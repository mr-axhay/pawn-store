import Razorpay from "razorpay";
console.log(process.env.RAZORPAY_KEY_ID)
const razorpay = new Razorpay({
  key_id: 'rzp_test_RQJdSKL0BrIIkM',
  key_secret: 'djR7ZJMdfEpL7ipGKIqLbj1P'
});

export default razorpay;

