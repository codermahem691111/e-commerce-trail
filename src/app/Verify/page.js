"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";

export default function Verify() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(100);
  const [disabled, setDisabled] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const phone = searchParams.get("phone") || "";

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setDisabled(true);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join("");
    try {
      const res = await axios.post("http://localhost:5000/verify-otp", {
        phone,
        otp: enteredOtp,
      });

      if (res.data.success) {
        router.push("/acc");
      } else {
        alert("Invalid OTP. Try again.");
      }
    } catch (error) {
      alert("Verification failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">OTP Verification</h2>
        <p className="text-gray-600 mb-2">Enter the OTP sent to</p>
        <p className="font-bold text-gray-800">{phone}</p>
        <div className="flex justify-center gap-2 my-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-xl text-center border rounded-md"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              disabled={disabled}
            />
          ))}
        </div>
        <p className="text-red-500 text-sm">Resend OTP ({timer})</p>
        <button
          onClick={handleVerify}
          className="mt-4 px-6 py-2 bg-black text-white rounded-md"
        >
          Verify
        </button>
      </div>
    </div>
  );
}
