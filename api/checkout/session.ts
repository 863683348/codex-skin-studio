import type { VercelRequest, VercelResponse } from '@vercel/node';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 只允许 POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 检查 Stripe 是否配置
  if (!stripeSecretKey) {
    return res.status(503).json({ error: 'STRIPE_NOT_CONFIGURED' });
  }

  try {
    const { priceId, userId, locale } = req.body as {
      priceId?: string;
      userId?: string;
      locale?: string;
    };

    if (!priceId) {
      return res.status(400).json({ error: 'priceId is required' });
    }

    // 动态导入 stripe，只在调用时加载
    const Stripe = await import('stripe');
    const stripe = new Stripe.default(stripeSecretKey, {
      apiVersion: '2026-06-24.dahlia',
    });

    // 构造 Success / Cancel URL
    const origin = req.headers.origin ?? `https://${req.headers.host ?? 'localhost:3000'}`;
    const lang = locale === 'en' ? '/en' : '/zh';
    const successUrl = `${origin}${lang}/pricing/result?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${origin}${lang}/pricing/result?canceled=true`;

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      ...(userId ? {
        client_reference_id: userId,
        metadata: { userId },
      } : {}),
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Stripe Checkout error:', error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Internal server error',
    });
  }
}
