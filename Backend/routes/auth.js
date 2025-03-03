const express = require("express");
// const BusinessOwner = require("../models/business");
const BusinessOwner = require("../models/business");
const Villager = require("../models/villagers");
const router = express.Router();
const jwt = require("jsonwebtoken");
router.post("/BusinessSignUp", (req, res) => {
  const {
    annualRevenue,
    businessAddress,
    businessDescription,
    businessName,
    businessPhone,
    businessType,
    businessWebsite,
    confirmPassword,
    email,
    employeeCount,
    firstName,
    lastName,
    password,
    phone,
    yearsInOperation,
  } = req.body;
  console.log(req.body);
  try {
    BusinessOwner.create({
      annualRevenue,
      businessAddress,
      businessDescription,
      businessName,
      businessPhone,
      businessType,
      businessWebsite,
      confirmPassword,
      email,
      employeeCount,
      firstName,
      lastName,
      password,
      phone,
      yearsInOperation,
    })
      .then((business) => {
        // creating json web token
        const data = {
          business: {
            id: business.id,
          },
        };
        const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
        res.json({ success: true, token });
      })
      .catch((err) => {
        if (err.code == 11000) {
          let message = "An Account associated with credentials  of your";

          Object.keys(err.keyPattern).forEach((errorKey) => {
            message += errorKey + ",";
          });
          res.status(400).json({
            error: message,
          });
          console.error("Duplicate key error:", err);
          // Handle duplicate key error (E11000) here
        } else {
          console.error("Error creating user:", err);
          // Handle other errors otherthan error 11000 or duplicate value error
        }
      });
  } catch (e) {
    console.log("Error while creating new Business Owner profile: " + e);
  }
});

// Village sign up

router.post("/VillagerRegistration", (req, res) => {
  const body = req.body;
  try {
    Villager.create({
      ...body,
    })
      .then((villager) => {
        const data = {
          villager: {
            id: villager.id,
          },
        };
        const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
        res.status(200).json({ success: true, token });
      })
      .catch((err) => {
        console.log("Error while creating index of Villagers" + err);
      });
  } catch (e) {
    res.status(400).json({ success: false });
    console.log("Error while registering Villagers" + e);
  }
});

router.post("/businessLogin", (req, res) => {
  const { phone, password } = req.body;

  BusinessOwner.findOne({ phone, password }).then((business) => {
    if (business) {
      console.log("Business Found" + business);
      const data = {
        business: {
          id: business.id,
        },
      };
      const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
      res
        .status(200)
        .json({ success: true, msg: "Business Found", token, business });
    } else {
      console.log("No Business found", phone, password);
      res.status(400).json({ success: false, msg: "No Business Found" });
    }
  });
});
module.exports = router;
