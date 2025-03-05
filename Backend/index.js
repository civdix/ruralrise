const express = require("express");
const { connectToMongo } = require("./db");
const cors = require("cors");
connectToMongo();
// now an database server is running on port 27017
require("dotenv").config();
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors({ credentials: true }));
const mailjet = require("node-mailjet").apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
);
app.use(cors({ origin: "http://localhost:3000" }));
app.use("/api/auth/", require("./routes/auth.js"));
app.use("/api/data/", require("./routes/shareData.js"));
app.get("/", (req, res) => {
  res.send("<h1>Your Connection is Succesfully Open and Ready to work</h1>");
});

app.post("/send-email", (req, res) => {
  const { senderEmail, email, message, phone, name } = req.body;

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "shivamdix@icloud.com",
          Name: "Contact Us RuralRise",
        },
        To: [
          {
            Email: email,
            Name: name,
          },
        ],
        Subject: "Customer ContactUs Message",
        TextPart: "RuralRise Customer Support",
        HTMLPart: `<h3>Name: ${name}</h3><br />Sender Email: ${email},Sender Phone: ${phone} <br/>Message: ${message}`,
      },
    ],
  });

  request
    .then((result) => {
      res.status(200).json(result.body);
    })
    .catch((err) => {
      res.status(err.statusCode).json({ error: err.message });
    });
});

app.listen(port, () => {
  console.log("Connected");
});
