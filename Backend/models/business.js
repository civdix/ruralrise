const mongoose = require("mongoose");

const BusinessOwnerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /\S+@\S+\.\S+/,
  },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  createdAt: { type: Date, default: Date.now },

  businessName: { type: String },
  businessType: {
    type: String,
    enum: [
      "Agriculture",
      "Retail",
      "Food & Beverage",
      "Manufacturing",
      "Services",
      "Healthcare",
      "Education",
      "Technology",
      "Other",
    ],
  },
  businessAddress: { type: String },
  businessPhone: { type: String },
  businessWebsite: { type: String },
  yearsInOperation: { type: Number, min: 0 },
  employeeCount: { type: Number, min: 0 },
  annualRevenue: {
    type: String,
    // enum: [
    //   "Under 50,000",
    //   "50,000 - 500,000",
    //   "500,000 - 25,00,000",
    //   "25,00,000 - 50,00,000",
    //   "Over 50,00,000",
    // ],
  },
  businessDescription: { type: String },

  termsAccepted: { type: Boolean, default: true },

  submissionStatus: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
});

const BusinessOwner = mongoose.model("BusinessOwner", BusinessOwnerSchema);
BusinessOwner.createIndexes();

module.exports = BusinessOwner;
