import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://maheemshahreear2:7VK0LM6JxFpbxzCW@cluster0.urzuizl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const otpSchema = new mongoose.Schema({
  phone: String,
  otp: String,
  createdAt: { type: Date, expires: 300, default: Date.now }, // Expires in 5 minutes
});

const OTP = mongoose.model("OTP", otpSchema);

// Generate OTP and send via SMS
app.post("/send-otp", async (req, res) => {
  const { phone } = req.body;
  const otp = Math.floor(1000 + Math.random() * 9000).toString();

  try {
    // Send OTP via SMS API
    await axios.get(`http://sms.joypurhost.com/api/getBalanceApi`, {
      params: {
        api_key: "RPX28BMFjP2wZAkMTrMq",
        sender_id: "8809617623961",
        message: `Your OTP is ${otp}`,
        mobile: phone,
      },
    });

    // Store OTP in DB
    await OTP.findOneAndUpdate({ phone }, { otp }, { upsert: true });

    res.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "OTP sending failed" });
  }
});

// Verify OTP
app.post("/verify-otp", async (req, res) => {
  const { phone, otp } = req.body;
  const record = await OTP.findOne({ phone, otp });

  if (record) {
    res.json({ success: true, message: "OTP verified successfully" });
  } else {
    res.status(400).json({ success: false, message: "Invalid OTP" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
