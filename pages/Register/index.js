"use client";

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HeartPulse } from "lucide-react";
import Link from "next/link";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, address, password } = formData;
    if (!name || !email || !phone || !address || !password) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("https://auth-be-production-9db8.up.railway.app/auth/register", formData);
      if (res.status === 200 || res.status === 201) {
        toast.success("User Registered Successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          password: "",
        });
        setTimeout(() => {
          window.location.href = "/Login";
        }, 1000);
      } else {
        toast.error(res.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-12 bg-gradient-to-br from-green-50 via-white to-green-100">
      <ToastContainer position="top-center" hideProgressBar theme="dark" />

      {/* Left side: Info Section */}
      <div className="max-w-xl text-center lg:text-left mb-12 lg:mb-0 lg:mr-12">
        <div className="flex justify-center lg:justify-start mb-4">
          <HeartPulse className="w-10 h-10 text-[#8bc339]" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#8bc339] mb-3">
          Join <span className="text-green-700">HealthMate</span>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Create your account to access personalized AI-powered medical report
          analysis and track your health journey 💚
        </p>
      </div>

      {/* Right side: Registration Form */}
      <div className="w-full max-w-md bg-black/60 backdrop-blur-lg text-white rounded-2xl shadow-2xl p-6">
        <h2 className="text-center text-2xl font-semibold mb-6">REGISTER</h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-[#7bb32f] text-white px-3 py-2 outline-none placeholder-gray-300"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-[#7bb32f] text-white px-3 py-2 outline-none placeholder-gray-300"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <input
              id="phone"
              type="number"
              placeholder="Enter your number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-[#7bb32f] text-white px-3 py-2 outline-none placeholder-gray-300"
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <input
              id="address"
              type="text"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-[#7bb32f] text-white px-3 py-2 outline-none placeholder-gray-300"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-[#7bb32f] text-white px-3 py-2 outline-none placeholder-gray-300"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className={`w-full bg-[#8bc339] hover:bg-[#7bb32f] py-3 rounded-full text-lg font-semibold text-white cursor-pointer transition-all duration-200 shadow-xl ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {/* Already have account */}
          <p className="text-center text-sm text-gray-300 mt-4">
            Already have an account?{" "}
            <Link href="/Login" className="text-[#8bc339] hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
