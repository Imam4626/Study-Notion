const Razorpay = require("razorpay");

exports.instance = new Razorpay({
	// key_id: process.env.RAZORPAY_KEY,
	// key_secret: process.env.RAZORPAY_SECRET,
	key_id: "123",
	key_secret: "123",
});
