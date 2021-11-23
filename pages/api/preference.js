// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mercadopago from "mercadopago"

mercadopago.configure({
  access_token: process.env.MERCADOPAGO,
});

export default function handler(req, res) {
  const { id, title, description, img, quantity, price } = req.query
  // res.end(`title: ${title}, price: ${price},quantity:${quantity}`
  let preference = {
    items: [
      {
        id: id,
        title: title,
        picture_url: img,
        description: description,
        quantity: Number(quantity),
        unit_price: Number(price),
      }
    ],

    back_urls: {
      "success": "http://localhost:8080/feedback",
      "failure": "http://localhost:8080/feedback",
      "pending": "http://localhost:8080/feedback"
    },
    "auto_return": "approved",
    "payment_methods": {
      "excluded_payment_methods": [
        {
          "id": "amex"
        }
      ],
      "excluded_payment_types": [
        {
          "id": "atm",
        }
      ],
      "installments": 6
    },
    external_reference: 'juanpablosolana@gmail.com',
  };
  mercadopago.preferences.create(preference)
    .then(function (response) {
      console.log(response);
      // Este valor reemplazará el string "<%= global.id %>" en tu HTML global.id = response.body.id;
      res.json({
        id: response.body.id
      })
    }).catch(function (error) {
      res.status(200).json({ err:error })
    });
}
