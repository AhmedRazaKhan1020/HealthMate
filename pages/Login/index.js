"use client";
import { useState } from "react";
import { Eye, EyeOff, HeartPulse } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple validation
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.password) tempErrors.password = "Password is required";
    setErrors(tempErrors);

    if (Object.keys(tempErrors).length > 0) return;

    setLoading(true);
    try {
      const res = await fetch("https://auth-be-production.up.railway.app/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        if (result.token) {
          localStorage.setItem("token", result.token);
        }
        toast.success("Login Successful!");
        router.push("/Home"); // uncomment if needed
      } else {
        toast.error(result.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen relative flex flex-col lg:flex-row items-center justify-center px-6 py-12 overflow-hidden">
      <ToastContainer position="top-center" hideProgressBar theme="dark" />

      {/* Left: Welcome Content */}
      <div className="max-w-xl text-center lg:text-left mb-12 lg:mb-0 lg:mr-12">
        <div className="flex justify-center lg:justify-start mb-4">
          <HeartPulse className="w-10 h-10 text-[#8bc339]" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#8bc339] mb-3">
          Welcome to <span className="text-green-700">HealthMate</span>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Your smart medical companion — upload reports, get instant AI insights,
          and stay informed about your health
        </p>
      </div>

      {/* Right: Login Form */}
      <div className="w-full max-w-md bg-black/60 backdrop-blur-lg text-white rounded-2xl shadow-2xl p-6">
        <h2 className="text-center text-2xl font-semibold mb-6">LOGIN</h2>

        {/* Email Field */}
        <div className="mb-6">
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent border-b-2 border-[#7bb32f] text-white px-3 py-2 outline-none placeholder-gray-300"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="relative mb-4">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full bg-transparent border-b-2 border-[#7bb32f] text-white px-3 py-2 pr-10 outline-none placeholder-gray-300"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-300 hover:text-[#8bc339] pt-2"
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mb-4">{errors.password}</p>
        )}

        <div className="text-right mb-4">
          <Link
            href="/Register"
            className="text-[#7bb32f] hover:text-[#7bb32f]/70 text-sm"
          >
            Create an account
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className={`w-full bg-[#8bc339] hover:bg-[#7bb32f] py-3 rounded-full text-lg font-semibold text-white shadow-lg transition-all duration-300 ${loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </section>
  );
};

export default Login;
