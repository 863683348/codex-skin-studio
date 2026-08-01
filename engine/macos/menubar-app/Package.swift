// swift-tools-version: 5.9

import PackageDescription

let package = Package(
  name: "CodexSkinStudioMenuBar",
  platforms: [
    .macOS(.v13)
  ],
  products: [
    .executable(
      name: "CodexSkinStudioMenuBar",
      targets: ["CodexSkinStudioMenuBar"]
    )
  ],
  targets: [
    .target(
      name: "DreamSkinCore",
      path: "Sources/DreamSkinCore"
    ),
    .executableTarget(
      name: "CodexSkinStudioMenuBar",
      dependencies: ["DreamSkinCore"],
      path: "Sources/CodexSkinStudioMenuBar"
    ),
    .testTarget(
      name: "DreamSkinCoreTests",
      dependencies: ["DreamSkinCore"],
      path: "Tests/DreamSkinCoreTests"
    )
  ]
)
