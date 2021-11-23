// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id
  });
}
