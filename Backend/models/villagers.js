const mongoose = require("mongoose");

const VillagerSchema = new mongoose.Schema({
  name: { type: String },
  gender: { type: String },
  age: { type: Number },
  mobileNumber: { type: Number },
  alternateNumber: { type: Number },
  aadhaarNumber: { type: String, unique: true }, // Unique Aadhaar for authentication
  familyMembers: { type: Number },
  password: { type: String },
  email: { type: String, unique: true },

  villageName: { type: String },
  panchayat: { type: String },
  landmark: { type: String },
  district: { type: String },
  tehsil: { type: String },
  state: { type: String },
  pinCode: { type: Number },

  landOwnership: { type: Boolean },
  landArea: { type: Number }, // In acres/hectares
  landType: {
    type: String,
  },
  landUsage: [{ type: String }],
  landDescription: { type: String, maxlength: 500 },

  joined: { type: Date, default: Date.now },
  termsAgree: { type: Boolean, default: false },
  contactConsent: { type: Boolean, default: false },
});

const Villager = mongoose.model("villager", VillagerSchema);
Villager.createIndexes();

module.exports = Villager;
