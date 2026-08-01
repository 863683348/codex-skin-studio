# license-dream-skin.ps1 — PRO 主题 License Key 校验与持久化
#
# Key 格式: CSS1-{sig24hex}-{base64url("email|plan|yyyyMMdd")}
#   sig = HMAC-SHA256(secret, payload) 前 24 位 hex
#   有效期 = 签发日 + 365 天
# 说明: 对称密钥内嵌（防君子不防小人）。主题文件本就在安装包内，
#       解锁校验的意义是"约定 + 许可证"，不是防破解。

$script:DreamSkinLicenseSecret = 'CSS1:a7c3e91d4f6b2a8e5c0d9f3b7a1e6c4d8f2b5a0e9c3d7f1b4a8e6c2d0f5b9a3e7c'

function Test-DreamSkinLicenseKey {
  param([Parameter(Mandatory = $true)][string]$LicenseKey)

  $result = [pscustomobject]@{
    Valid = $false; Plan = ''; Email = ''
    Issued = $null; Expires = $null; Expired = $false; Reason = ''
  }
  try {
    $parts = $LicenseKey -split '-', 3
    if ($parts.Count -ne 3 -or $parts[0] -cne 'CSS1') { $result.Reason = 'BAD_FORMAT'; return $result }
    $sig = $parts[1]
    $b64 = $parts[2]
    if ($sig -notmatch '^[0-9a-f]{24}$') { $result.Reason = 'BAD_SIG'; return $result }

    $b64p = $b64.Replace('-', '+').Replace('_', '/')
    switch ($b64p.Length % 4) { 2 { $b64p += '==' } 3 { $b64p += '=' } }
    $payload = [System.Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($b64p))

    $keyBytes = [System.Text.Encoding]::UTF8.GetBytes($script:DreamSkinLicenseSecret)
    $hmac = [System.Security.Cryptography.HMACSHA256]::new($keyBytes)
    $sigBytes = $hmac.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($payload))
    $expected = (($sigBytes | ForEach-Object { $_.ToString('x2') }) -join '').Substring(0, 24)
    if ($expected -cne $sig) { $result.Reason = 'SIG_MISMATCH'; return $result }

    $fields = $payload -split '\|'
    if ($fields.Count -ne 3) { $result.Reason = 'BAD_PAYLOAD'; return $result }
    $email = $fields[0]
    $plan = $fields[1]
    $dateStr = $fields[2]
    if ($plan -notin @('pro', 'team')) { $result.Reason = 'BAD_PLAN'; return $result }
    if ($dateStr -notmatch '^\d{8}$') { $result.Reason = 'BAD_DATE'; return $result }

    $issued = [datetime]::ParseExact($dateStr, 'yyyyMMdd', $null)
    $expires = $issued.AddDays(365)
    $result.Valid = $true
    $result.Plan = $plan
    $result.Email = $email
    $result.Issued = $issued
    $result.Expires = $expires
    $result.Expired = ([datetime]::Now -gt $expires)
    $result.Reason = if ($result.Expired) { 'EXPIRED' } else { 'OK' }
  } catch {
    $result.Reason = 'EXCEPTION'
  }
  return $result
}

function Read-DreamSkinProLicense {
  param([string]$StateRoot = (Join-Path $env:LOCALAPPDATA 'CodexSkinStudio'))
  $p = Join-Path $StateRoot 'license.json'
  if (-not (Test-Path -LiteralPath $p -PathType Leaf)) { return $null }
  try {
    $d = Get-Content -LiteralPath $p -Raw -Encoding UTF8 | ConvertFrom-Json
    if ($null -eq $d -or $null -eq $d.key) { return $null }
    $v = Test-DreamSkinLicenseKey -LicenseKey "$($d.key)"
    if ($v.Valid -and -not $v.Expired) {
      return [pscustomobject]@{
        Key = "$($d.key)"; Plan = $v.Plan; Email = $v.Email
        Expires = $v.Expires.ToString('yyyy-MM-dd')
      }
    }
  } catch {}
  return $null
}

function Write-DreamSkinProLicense {
  param(
    [Parameter(Mandatory = $true)][string]$LicenseKey,
    [string]$StateRoot = (Join-Path $env:LOCALAPPDATA 'CodexSkinStudio')
  )
  $v = Test-DreamSkinLicenseKey -LicenseKey $LicenseKey
  if (-not $v.Valid) { return $v }
  $dir = $StateRoot
  if (-not (Test-Path -LiteralPath $dir -PathType Container)) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
  }
  $json = @{
    key = $LicenseKey
    plan = $v.Plan
    email = $v.Email
    expires = $v.Expires.ToString('yyyy-MM-dd')
  } | ConvertTo-Json
  $utf8 = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText((Join-Path $dir 'license.json'), $json, $utf8)
  return $v
}

function Test-DreamSkinProUnlocked {
  param([string]$StateRoot = (Join-Path $env:LOCALAPPDATA 'CodexSkinStudio'))
  return ($null -ne (Read-DreamSkinProLicense -StateRoot $StateRoot))
}
