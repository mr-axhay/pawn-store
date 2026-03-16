import express from 'express';
import Razorpay from 'razorpay';
import http from "http";
import { Server } from "socket.io";
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import cors from 'cors';

import UserRouter from './routes/user.router.js';
import CategoryRouter from './routes/category.router.js';
import SubCategoryRouter from './routes/subcategory.js';
import ForgetPassword from './controller/fp.controller.js';
import aiChatRoute from "./routes/aiChat.js";
import chatRouter from "./routes/chat.router.js";
// import paymentRoutes from './routes/paymentRoutes.js';
// import paymentRoutes from "./routes/paymentRoutes.js";
// import paymentRoutes from "./routes/payment.routes.js";


import dotenv from "dotenv";
import paymentRoutes from "./routes/payment.routes.js";

dotenv.config();
const razorpayInstance = new Razorpay({
  key_id: 'rzp_test_RQJdSKL0BrIIkM',//process.env.RAZORPAY_KEY_ID,
    key_secret: 'djR7ZJMdfEpL7ipGKIqLbj1P'

//   key_secret: process.env.RAZORPAY_KEY_SECRET
});

const app = express();


//to handle cross origin request
app.use(cors());

//configuration to fetch req body content : body parser middleware
//used to fetch req data from methods like : POST , PUT , PATCH , DELETE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//configuration to fetch file content : file upload middleware
app.use(fileUpload());

//route level middleware
app.use("/chat", chatRouter);
app.use("/api/ai", aiChatRoute);
app.use("/user",UserRouter);
app.use("/category",CategoryRouter);
app.use("/subcategory",SubCategoryRouter);
// app.use("/api/payment", paymentRoutes);
// app.use("/api/payment", paymentRoutes);
//route for forgetpassword
app.post("/forgetpassword",ForgetPassword);
app.use("/api/payment", paymentRoutes);
app.listen(3001);
console.log("Server invoked at link http://localhost:3001");


