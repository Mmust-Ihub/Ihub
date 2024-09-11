const createError = require("http-errors");
const { initiateStkPush } = require("../helpers/initiateStkPush");
const donationModel = require("../models/donation.model");
const { successEmail, sendMail, failureEmail } = require("../utils/sendMail");

exports.donateByMpesa = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, phoneNumber, amount } = req.body;
    if (!email || !phoneNumber || !amount) {
      throw createError.BadRequest(
        "email, phoneNumber and amount are required ..."
      );
    }
    const response = await initiateStkPush(phoneNumber, amount);
    await donationModel.create({
      ...response,
      Amount: amount,
      PhoneNumber: phoneNumber,
      Email: email,
    });
    res
      .status(200)
      .json({
        status: response.CustomerMessage,
        checkoutRequestId: response.CheckoutRequestID,
      });
  } catch (error) {
    next(error);
  }
};

exports.checkTransactionStatus = async (req, res, next) => {
  try {
    const checkoutRequestId = req.params.CheckoutRequestID;
    const transaction = await donationModel.findOne({
      CheckoutRequestID: checkoutRequestId,
    });
    if (transaction) {
      const status = transaction.Status;
      return res.status(200).json({ status: status });
    } else {
      return res.status(404).json({ status: "not found" });
    }
  } catch (error) {
    next(error);
  }
};

exports.mpesaCallback = async (req, res, next) => {
  try {
    console.log("The callback url has been hit ....");
    const { CheckoutRequestID, ResultCode, CallbackMetadata } =
      req.body.Body.stkCallback;
    const transaction = await donationModel.findOne({
      CheckoutRequestID: CheckoutRequestID,
    });

    if (ResultCode === 0) {
      const metadata = Object.values(await CallbackMetadata.Item);
      const mpesaReceipt = metadata
        .find((data) => data.Name === "MpesaReceiptNumber")
        .Value.toString();
      const data = {
        Status: "success",
        MpesaReceipt: mpesaReceipt,
      };
      await donationModel.findOneAndUpdate(
        {
          CheckoutRequestID: CheckoutRequestID,
        },
        data,
        { new: true }
      );
      const payload = successEmail(transaction.Email, transaction.Amount);
      await sendMail(payload);
    } else {
      const data = {
        Status: "failed",
        ResultCode: ResultCode,
      };
      await donationModel.findOneAndUpdate(
        {
          CheckoutRequestID: CheckoutRequestID,
        },
        data,
        { new: true }
      );
      const payload = failureEmail(transaction.Email, transaction.amount);
      await sendMail(payload);
    }
    console.log("-".repeat(25), "Callback data", "-".repeat(25));
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
