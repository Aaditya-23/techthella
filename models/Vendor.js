const mongoose = require("mongoose");
const { Schema } = mongoose;

const vendorSchema = new Schema(
  {
    item: {
      type: String,
      default: null,
    },
    location: [
      {
        type: String,
        default: null,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vendor", vendorSchema);


