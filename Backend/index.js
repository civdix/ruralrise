const express = require("express");
const { connectToMongo } = require("./db");
const cors = require("cors");
connectToMongo();
// now an database server is running on port 27017

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors({ credentials: true }));

app.use(require("cors")({ origin: "http://localhost:3000" }));
app.use("/api/auth/", require("./routes/auth.js"));
app.use("/api/data/", require("./routes/shareData.js"));
app.get("/", (req, res) => {
  res.send("<h1>Your Connection is Succesfully Open and Ready to work</h1>");
});
app.listen(port, () => {
  console.log("Connected");
});
