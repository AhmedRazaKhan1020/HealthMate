"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FileText, Loader2, CalendarDays } from "lucide-react";
import { useRouter } from "next/router";

const ReportsPage = () => {
  const [reports, setReports] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [token, setToken] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      router.push("/"); // redirect to login
    } else {
      setToken(storedToken);
    }
    const fetchReports = async () => {
      try {
        const Token = localStorage.getItem("token")
        const res = await axios.get("https://auth-be-production.up.railway.app/auth/reports", {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        });
        setReports(res.data.report);
        console.log(" Reports fetched:", res.data.report);
      } catch (err) {
        console.error(" Error fetching reports:", err.response?.data || err.message);
        setError("Failed to load reports. Please check backend connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-green-50">
        <Loader2 className="w-10 h-10 text-green-600 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  if (!token) return null;

  return (
    <div className="min-h-screen  p-6 ">
      <div className="max-w-6xl mx-auto md:mr-30">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-10">
          Your Uploaded Reports
        </h1>

        {reports?.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            You haven’t uploaded any reports yet.
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {reports.map((r) => (
              <div
                key={r._id}
                className="bg-white shadow-md hover:shadow-gray-200 rounded-2xl border border-green-100 p-6 flex flex-col justify-between transition duration-300"
              >
                <div>
                  <div className="flex items-center mb-3">
                    <FileText className="text-green-600 w-6 h-6 mr-2" />
                    <h2 className="text-lg font-semibold text-green-700 truncate">
                      {r.title || "Untitled Report"}
                    </h2>
                  </div>

                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    {new Date(r.date).toLocaleDateString()}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                    {r.aiSummary
                      ? `${r.aiSummary.slice(0, 150)}...`
                      : "AI summary not available for this report."}
                  </p>
                </div>

                <a
                  href={r.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 text-center w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-all"
                >
                  View Report
                </a>
              </div>
            ))}
          </div>

        )}
      </div>
    </div>
  );
};

export default ReportsPage;
