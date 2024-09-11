require("dotenv").config();
const axios = require("axios");
const { getTimeStamp, getMpesaAccessToken } = require("../utils/mpesa");

exports.initiateStkPush = async (phoneNumber, amount) => {
  const timestamp = getTimeStamp();
  const accessToken = await getMpesaAccessToken();
  const password = Buffer.from(
    process.env.MPESA_SHORT_CODE + process.env.MPESA_PASS_KEY + timestamp
  ).toString("base64");
  const url = `${process.env.MPESA_BASE_URL}/mpesa/stkpush/v1/processrequest`;
  const response = await axios.post(
    url,
    {
      BusinessShortCode: process.env.MPESA_SHORT_CODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: process.env.MPESA_TRANSACTION_TYPE,
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: process.env.MPESA_SHORT_CODE,
      PhoneNumber: phoneNumber,
      CallBackURL: `${process.env.MPESA_CALLBACK_BASE_URL}/api/v1/donate/mpesa/callback`,
      AccountReference: "MmustIhub",
      TransactionDesc: "Donation Payment",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};
