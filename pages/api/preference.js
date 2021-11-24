// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mercadopago from "mercadopago"

mercadopago.configure({
  access_token: process.env.MERCADOPAGO,
});

export default function handler(req, res) {
  const { title, picture_url, quantity, price } = req.query
  // res.end(`title: ${title}, price: ${price},quantity:${quantity}`
  let preference = {
    items: [
      {
        "id": 1234,
        title,
        picture_url,
        "description": "Dispositivo móvil de Tienda e-commerce",
        "quantity": Number(quantity),
        "unit_price": Number(price),
      }
    ],
    "payer": {
      "phone": {
        "area_code": "11",
        "number": Number(22223333)
      },
      "address": {
        "zip_code":"1111",
        "street_name": "Falsa",
        "street_number": Number(123)
      },
      "email": "test_user_81131286@testuser.com",
      "name":"Lalo",
      "surname":"Landa"
    },
    back_urls: {
      "success": "https://mercado-pago-checkout-pro.vercel.app/api/feedback",
      "failure": "https://mercado-pago-checkout-pro.vercel.app/api/feedback",
      "pending": "https://mercado-pago-checkout-pro.vercel.app/api/feedback"
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
    external_reference: "juanpablosolana@gmail.com",
    notification_url: "https://mercado-pago-checkout-pro.vercel.app/api/webhook",
  };
  mercadopago.preferences.create(preference)
    .then(function (response) {
      // console.log(response);
      // Este valor reemplazará el string "<%= global.id %>" en tu HTML global.id = response.body.id;
      res.json({
        id: response.body.id
      })
    }).catch(function (error) {
      res.status(200).json({ err: error })
    });
}
