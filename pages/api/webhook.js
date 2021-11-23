// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  res.json({

    action: req.query.action,
    api_version: req.query.api_version,
    application_id: req.query.application_id,
    date_created: req.query.date_created,
    id: req.query.id,
    live_mode: req.query.live_mode,
    type: req.query.type,
    user_id: req.query.user_id,
  });
}
