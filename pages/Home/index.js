"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartPulse, Star } from "lucide-react";
import { useRouter } from "next/router";

const WelcomePage = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);


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
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center md:mr-25">
      
      {/* Header Section */}
      <div className="max-w-3xl">
        <div className="flex justify-center mb-4">
          <HeartPulse className="w-10 h-10 text-[#8bc339]" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#8bc339] mb-3">
          Welcome to <span className="text-green-700">HealthMate</span>
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Your smart medical companion — upload reports, get instant AI insights, and stay informed about your health 🩺
        </p>

        <Link
          href="/Upload"
          className="inline-block bg-[#8bc339] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#7ab631] transition-all"
        >
          Go to Dashboard
        </Link>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12 max-w-5xl">
        <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-green-200 transition">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAA4JfgbfQPz2MzEhN7rfLYgzzpLsDiMmgIQ&usqp=CAU"
            alt="Doctor analyzing report"
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-green-200 transition">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTNmSbQPgxKT5xKj1IwN8IXssfV-lGIYkT6V49DQiBjw&s=10"
            alt="Healthy lifestyle"
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-green-200 transition">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7k-VRaAfUKVD1cmAXErF36LvF1PtsSMDkQ&s"
            alt="Health monitoring"
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-5xl mt-16 w-full">
        <h2 className="text-2xl font-bold text-[#8bc339] mb-8">
          What Our Users Say ❤️
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Ayesha Khan",
              text: "HealthMate helped me understand my blood test results so easily! The AI summary is amazing.",
              rating: 5,
              image:
                "https://randomuser.me/api/portraits/women/68.jpg",
            },
            {
              name: "Ali Raza",
              text: "Super clean UI and helpful insights. I love how quick the report upload is!",
              rating: 4,
              image:
                "https://randomuser.me/api/portraits/men/75.jpg",
            },
            {
              name: "Sara Malik",
              text: "Finally, an app that simplifies medical reports for normal people. 100% recommend 💚",
              rating: 5,
              image:
                "https://randomuser.me/api/portraits/women/44.jpg",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-green-200 border border-green-100 p-6 text-left transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-green-700 font-semibold">{review.name}</h3>
                  <div className="flex text-yellow-400">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, idx) => (
                        <Star key={idx} size={16} fill="#facc15" />
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{review.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-400">
        Made with 💚 by <span className="text-green-600 font-medium">Ahmed</span>
      </footer>
    </div>
  );
};

export default WelcomePage;
