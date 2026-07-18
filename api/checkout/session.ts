// @ts-nocheck
const Stripe = require('stripe');

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!stripeSecretKey) {
    return res.status(503).json({ error: 'STRIPE_NOT_CONFIGURED' });
  }

  try {
    const { priceId, userId, locale } = req.body || {};

    if (!priceId) {
      return res.status(400).json({ error: 'priceId is required' });
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2026-06-24.dahlia',
    });

    const origin = req.headers.origin || `https://${req.headers.host || 'localhost:3000'}`;
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
      error: error && error.message ? error.message : 'Internal server error',
    });
  }
}

module.exports = handler;
