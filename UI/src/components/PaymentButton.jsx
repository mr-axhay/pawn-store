// import axios from "axios";

// function PaymentButton() {

//   const handlePayment = async () => {

//     const order = await axios.post("http://localhost:5000/api/create-order", {
//       amount: 500
//     });

//     const options = {
//       key: "rzp_test_xxxxx",
//       amount: order.data.amount,
//       currency: "INR",
//       name: "My Website",
//       description: "Test Payment",
//       order_id: 'order_IluGWxBm9U8zJ8',//order.data.id,

//       handler: function (response) {

//         console.log(response);

//         // send response to backend
//         axios.post("http://localhost:5000/api/verify-payment", response);

//       },

//       prefill: {
//         name: "Akshay",
//         email: "test@gmail.com",
//         contact: "9999999999"
//       },

//       theme: {
//         color: "#3399cc"
//       }
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <button onClick={handlePayment}>
//       Pay Now
//     </button>
//   );
// }

// export default PaymentButton;

import React from "react";

const PaymentButton = () => {

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {

    const res = await loadRazorpay();

    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }

    try {

      // Create order from backend
      const orderData = await fetch("http://localhost:3001/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 500
        }),
      }).then((res) => res.json());

      const options = {
        key: "rzp_test_RQJdSKL0BrIIkM",
        amount: orderData.amount,
        currency: "INR",
        name: "My MERN Store",
        description: "Test Transaction",
        order_id: orderData.id,

        handler: async function (response) {

          const verify = await fetch("http://localhost:3001/api/payment/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
          });

          const result = await verify.json();

          if (result.success) {
            alert("Payment Successful");
          } else {
            alert("Payment Verification Failed");
          }
        },

        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },

        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (err) {
      console.log(err);
      alert("Payment failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Pay ₹500</h2>
      <button
        onClick={handlePayment}
        style={{
          padding: "12px 20px",
          fontSize: "18px",
          backgroundColor: "#3399cc",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentButton;