const axios = require("axios");
require("dotenv").config();

// The timestamp should be in this format, YYYYMMDDHHmmss
exports.getTimeStamp = () => {
  function formatdate(time) {
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
  }

  const date = new Date();
  const year = date.getFullYear();
  const month = formatdate(date.getMonth() + 1);
  const day = formatdate(date.getDate());
  const hours = formatdate(date.getHours());
  const minutes = formatdate(date.getMinutes());
  const seconds = formatdate(date.getSeconds());
  return `${year}${month}${day}${hours}${minutes}${seconds}`;
};

exports.getMpesaAccessToken = async () => {
  const url = `${process.env.MPESA_BASE_URL}/oauth/v1/generate?grant_type=client_credentials`;
  const consumerKey = process.env.MPESA_CONSUMER_KEY;
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
  const base64String = Buffer.from(`${consumerKey}:${consumerSecret}`).toString(
    "base64"
  );
  const response = await axios.get(url, {
    headers: {
      Authorization: `Basic ${base64String}`,
      "Content-Type": "application/json",
    },
  });

  const token = await response.data.access_token;
  return token;
};
