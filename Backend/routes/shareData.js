const express = require("express");
// const BusinessOwner = require("../models/business");
const BusinessOwner = require("../models/business");
const Villager = require("../models/villagers");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/businessData", (req, res) => {
  const businesstoken = req.headers.businesstoken;

  //   const Businesstoken = localStorage.getItem("businesstoken");
  const businessIdData = jwt.decode(businesstoken, process.env.JWT_SECRET_KEY);
  console.log("Business data is ", businessIdData);
  try {
    BusinessOwner.findOne({ _id: businessIdData.business.id })
      .then((data) => {
        res.status(200).json({ success: true, businessData: data });
      })
      .catch((err) => {
        res.status(401).json({ success: false, err });
      });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
});

module.exports = router;
