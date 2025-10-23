import React, { useEffect, useState } from "react";
import axios from "axios";
import { UploadCloud, Loader2, FileText } from "lucide-react";
import { useRouter } from "next/router";

const UploadReport = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [token, setToken] = useState(null);

  const router = useRouter();
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResponse(null);
    setError("");
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a medical report file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      setError("");

      const res = await axios.post("https://auth-be-production.up.railway.app/auth/upload-report", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percent);
        }
      });

      setResponse(res.data);
    } catch (err) {
      console.error(err);
      setError("Upload failed. Please try again.");
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };



  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      router.push("/"); // redirect to login
    } else {
      setToken(storedToken);
    }
  }, [router]);

  if (!token) return null;

  return (
    <div
      className="
    min-h-screen 
    flex flex-col items-center justify-center 
    p-6 
    transition-all duration-300
  "
    >
      <h1 className="text-3xl font-bold text-green-700 text-center mb-10 mr-60">
           Upload Your Reports
        </h1>

      <div
        className="
      w-full max-w-lg 
      bg-white/90 backdrop-blur-lg 
      shadow-2xl rounded-2xl 
      p-8 
      transition-all duration-300 
      hover:shadow-green-200
      mx-auto md:ml-10 mt-10
    "
      >

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-[#8bc339] flex items-center justify-center gap-2">
            <FileText className="w-7 h-7 text-[#8bc339]" /> HealthMate
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Upload your medical report and let AI analyze it for insights.
          </p>
        </div>

        {/* File Input */}
        <label
          htmlFor="file"
          className="
        border-2 border-dashed border-green-400 
        hover:border-[#8bc339] 
        cursor-pointer rounded-xl 
        flex flex-col items-center justify-center 
        py-10 transition text-center
      "
        >
          {file ? (
            <>
              <FileText className="text-[#8bc339] w-10 h-10 mb-2" />
              <p className="text-[#8bc339] font-medium">{file.name}</p>
            </>
          ) : (
            <>
              <UploadCloud className="text-green-500 w-10 h-10 mb-2" />
              <p className="text-gray-600 font-medium">
                Click or drag your file here
              </p>
              <p className="text-xs text-gray-400">Accepted: PDF, JPG, PNG</p>
            </>
          )}
          <input
            type="file"
            id="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={loading}
          className={`w-full mt-6 flex justify-center items-center gap-2 py-3 text-white rounded-lg font-semibold shadow-md transition-all ${loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#8bc339] hover:bg-[#7db030] active:scale-95"
            }`}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin w-5 h-5" /> Uploading...
            </>
          ) : (
            <>
              <UploadCloud className="w-5 h-5" /> Upload & Analyze
            </>
          )}
        </button>

        {/* Progress Bar */}
        {progress > 0 && (
          <div className="w-full bg-gray-200 rounded-full mt-4">
            <div
              className="bg-green-500 text-xs text-white text-center p-0.5 rounded-full"
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-red-600 text-sm mt-4 font-medium text-center">
            {error}
          </p>
        )}
      </div>

      {/* AI Response Section */}
      {response && (
        <div
          className="
        mt-10 max-w-3xl w-full 
        bg-white/90 shadow-xl 
        rounded-2xl p-8 
        border border-green-100 
        backdrop-blur
         md:mr-40
      "
        >
          <h2 className="text-2xl font-bold text-[#8bc339] text-center mb-4">
            AI Report Summary
          </h2>
          <p className="text-gray-800 leading-relaxed whitespace-pre-wrap text-justify">
            {response.report.aiSummary || "No AI summary returned from backend."}
          </p>
        </div>
      )}
    </div>

  );
};

export default UploadReport;
