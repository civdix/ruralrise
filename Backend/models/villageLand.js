const mongoose = require("mongoose");
const { Schema } = mongoose;

const VillageLandSchema = Schema({
  villagerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Villager",
    required: true,
  }, // Reference to Villager
  name: { type: String, required: true },
  aadhaarNumber: { type: String, required: true }, // Unique for authentication

  coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  googleMapLink: { type: String },
  sarpanchName: { type: String },
  sarpanchContact: { type: String },
  panchayatEmail: { type: String },
  villageName: { type: String, required: true },
  panchayat: { type: String, required: true },
  district: { type: String, required: true },
  state: { type: String, required: true },
  pinCode: { type: String, required: true },
  censusCode: { type: Number },
  tehsil: { type: String, required: true },
  facilities: {
    water: { type: Boolean, default: false },
    electricity: { type: Boolean, default: false },
    healthcare: { type: Boolean, default: false },
    education: { type: Boolean, default: false },
    internet: { type: Boolean, default: false },
    roads: { type: Boolean, default: false },
  },

  plotNumber: { type: String, required: true, unique: true }, // Unique plot number
  totalArea: { type: Number, required: true }, // In acres or hectares
  landType: {
    type: String,
    enum: ["Agricultural", "Berran", "Mixed", "Residential", "Commercial"],
    required: true,
  },
  registrationNumber: { type: String, unique: true },
  // Government-issued registration ID

  landValue: { type: Number },
  // Estimated land value

  landDeed: { type: String },
  // URL or path of uploaded land deed document
  ownershipProof: { type: String }, // URL or path for ownership proof

  uploadDate: { type: Date, default: Date.now },
});

const Land = mongoose.model("land", VillageLandSchema);
Land.createIndexes();

module.exports = Land;
