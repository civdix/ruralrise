const mongoose = require("mongoose");

const VillageAppliedSchema = new mongoose.Schema(
  {
    ownerName: {
      type: String,
      required: true,
    },
    village: {
      type: String,
      required: true,
    },
    landSize: {
      type: Number,
      required: true,
    },
    appliedDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
    businessmanId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Businessman",
      required: true,
    },
    villagerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Villager",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("VillageApplied", VillageAppliedSchema);
