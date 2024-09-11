const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    MerchantRequestID: {
      type: String,
      required: true,
    },
    CheckoutRequestID: {
      type: String,
      required: true,
    },
    Status: {
      type: String,
      default: "pending",
    },
    ResponseCode: {
      type: String,
      required: true,
      default: "0",
    },
    ResultCode: {
      type: Number,
      required: true,
      default: 0,
    },
    Amount: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
    PhoneNumber: {
      type: String,
      required: true,
    },
    MpesaReceiptNumber: {
      type: String,
      required: false,
    },
    Email: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Donation", donationSchema);
