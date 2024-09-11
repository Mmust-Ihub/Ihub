const { donateByMpesa, mpesaCallback, checkTransactionStatus } = require("../controllers/donation");

const donationRouter = require("express").Router();

donationRouter.post("/donate/mpesa", donateByMpesa)
donationRouter.get("/donate/mpesa/:CheckoutRequestID", checkTransactionStatus)
donationRouter.post("/donate/mpesa/callback", mpesaCallback)


module.exports = { donationRouter };
