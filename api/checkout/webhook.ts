// @ts-nocheck
const Stripe = require('stripe');

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!stripeSecretKey) {
    return res.status(503).json({ error: 'STRIPE_NOT_CONFIGURED' });
  }

  try {
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2026-06-24.dahlia',
    });

    const sig = req.headers['stripe-signature'];
    let event;
    if (webhookSecret && sig) {
      const buf = Buffer.from(JSON.stringify(req.body));
      try {
        event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
      } catch (e) {
        return res.status(400).json({ error: 'Invalid signature' });
      }
    } else {
      event = req.body;
    }

    if (event && event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const userId = (session.metadata && session.metadata.userId) || session.client_reference_id;

      if (userId) {
        console.log(`Payment completed for user: ${userId}, session: ${session.id}`);
      }

      console.log(`Checkout session completed: ${session.id}`);
    }

    return res.status(200).json({ received: true });
  } catch (error) {
    console.error('Stripe webhook error:', error);
    return res.status(500).json({
      error: error && error.message ? error.message : 'Internal server error',
    });
  }
}

module.exports = handler;
