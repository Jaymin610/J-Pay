const express = require("express");
const qrcode = require("qrcode");
let app = express();

app.get("/", (req, res) => {
  res.sendFile("D:/Code_J/Node JS/J_Pay/main.html");
});

app.get("/api/qrcode", (req, res) => {
  let amt = req.query.am;
  qrcode.toDataURL(
    `upi://pay?gajerajaymin9@oksbi&pn=JAYMIN N GAJERA&tn=UPI Transaction&am=${amt}`,
    function (err, url) {
      res.send(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
          />
          <style>
            body {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              height: 95vh;
            }
            h2,
            h3 {
              display: inline-block;
            }
          </style>
          <title>J Pay</title>
        </head>
        <body>
          <h1>Scan & Pay Using This QR</h1>
          <div><img src="${url}" alt="" /></div>
          <div>
            <h3>
              Amount:
              <h2 class="amnt">₹${amt}</h2>
            </h3>
          </div>
          <a class="button" href="/">Home</a>
        </body>
      </html>
      `);
    }
  );
});
let portNumber = process.env.PORT || 3000;
app.listen(portNumber, () => console.log("Connected"));
