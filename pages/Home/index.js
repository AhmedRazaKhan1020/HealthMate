// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { HeartPulse, Star } from "lucide-react";
// import { useRouter } from "next/router";

// const WelcomePage = () => {
//   const router = useRouter();
//   const [token, setToken] = useState(null);


//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     if (!storedToken) {
//       router.push("/"); // redirect to login
//     } else {
//       setToken(storedToken);
//     }
//   }, [router]);

//   if (!token) return null;

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center md:mr-25">

//       {/* Header Section */}
//       <div className="max-w-3xl">
//         <div className="flex justify-center mb-4">
//           <HeartPulse className="w-10 h-10 text-[#8bc339]" />
//         </div>
//         <h1 className="text-4xl sm:text-5xl font-extrabold text-[#8bc339] mb-3">
//           Welcome to <span className="text-green-700">HealthMate</span>
//         </h1>
//         <p className="text-gray-600 text-lg mb-6">
//           Your smart medical companion — upload reports, get instant AI insights, and stay informed about your health 
//         </p>

//         <Link
//           href="/Upload"
//           className="inline-block bg-[#8bc339] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#7ab631] transition-all"
//         >
//           Upload Report
//         </Link>
//       </div>

//       {/* Image Gallery */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12 max-w-5xl">
//         <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-green-200 transition">
//           <Image
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAA4JfgbfQPz2MzEhN7rfLYgzzpLsDiMmgIQ&usqp=CAU"
//             alt="Doctor analyzing report"
//             width={400}
//             height={300}
//             className="w-full h-64 object-cover"
//           />
//         </div>
//         <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-green-200 transition">
//           <Image
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTNmSbQPgxKT5xKj1IwN8IXssfV-lGIYkT6V49DQiBjw&s=10"
//             alt="Healthy lifestyle"
//             width={400}
//             height={300}
//             className="w-full h-64 object-cover"
//           />
//         </div>
//         <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-green-200 transition">
//           <Image
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7k-VRaAfUKVD1cmAXErF36LvF1PtsSMDkQ&s"
//             alt="Health monitoring"
//             width={400}
//             height={300}
//             className="w-full h-64 object-cover"
//           />
//         </div>
//       </div>

//       {/* Reviews Section */}
//       <div className="max-w-5xl mt-16 w-full">
//         <h2 className="text-2xl font-bold text-[#8bc339] mb-8">
//           What Our Users Say 
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             {
//               name: "Ayesha Khan",
//               text: "HealthMate helped me understand my blood test results so easily! The AI summary is amazing.",
//               rating: 5,
//               image:
//                 "https://randomuser.me/api/portraits/women/68.jpg",
//             },
//             {
//               name: "Ali Raza",
//               text: "Super clean UI and helpful insights. I love how quick the report upload is!",
//               rating: 4,
//               image:
//                 "https://randomuser.me/api/portraits/men/75.jpg",
//             },
//             {
//               name: "Sara Malik",
//               text: "Finally, an app that simplifies medical reports for normal people. 100% recommend ",
//               rating: 5,
//               image:
//                 "https://randomuser.me/api/portraits/women/44.jpg",
//             },
//           ].map((review, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-2xl shadow-md hover:shadow-green-200 border border-green-100 p-6 text-left transition"
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <Image
//                   src={review.image}
//                   alt={review.name}
//                   width={50}
//                   height={50}
//                   className="rounded-full"
//                 />
//                 <div>
//                   <h3 className="text-green-700 font-semibold">{review.name}</h3>
//                   <div className="flex text-yellow-400">
//                     {Array(review.rating)
//                       .fill(0)
//                       .map((_, idx) => (
//                         <Star key={idx} size={16} fill="#facc15" />
//                       ))}
//                   </div>
//                 </div>
//               </div>
//               <p className="text-gray-600 text-sm">{review.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="mt-16 text-sm text-gray-400">
//         Made with  by <span className="text-green-600 font-medium">Ahmed</span>
//       </footer>
//     </div>
//   );
// };

// export default WelcomePage;




"use client";
import React from "react";
import { Upload, Brain, Activity } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const tips = [
    "Drink at least 8 glasses of water daily 💧",
    "Walk for 30 minutes every day 🚶‍♂️",
    "Get 7–8 hours of sleep 😴",
    "Eat more fresh fruits and veggies 🍎",
  ];

  
  const [randomTip, setRandomTip] = useState("");

  useEffect(() => {
    const random = tips[Math.floor(Math.random() * tips.length)];
    setRandomTip(random);
  }, []);

  return (
    <div className="min-h-screen text-gray-800 w-full pr-5">

      {/* 🦸 Hero Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-700">
          Your Personal Health Companion
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Upload, track, and analyze your health reports effortlessly.  
          Stay organized and informed with <span className="font-semibold">Health Mate</span>.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/upload"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Upload Report
          </a>
          <a
            href="/reports"
            className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition"
          >
            View Reports
          </a>
        </div>
      </section>

      {/* 📊 Stats Section */}
      <section className="py-12 bg-green-100/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center p-5">
          {[
            { label: "Reports Uploaded", value: "120+" },
            { label: "Active Users", value: "85+" },
            { label: "AI Insights", value: "300+" },
            { label: "Health Tips", value: "50+" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-6 hover:scale-105 transition"
            >
              <p className="text-3xl font-bold text-green-600">{item.value}</p>
              <p className="text-gray-600 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⚙️ Features Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Upload className="text-green-600 w-8 h-8 mx-auto mb-3" />,
            title: "Upload Reports Easily",
            desc: "Quickly upload your lab results, scans, or prescriptions in seconds.",
          },
          {
            icon: <Brain className="text-green-600 w-8 h-8 mx-auto mb-3" />,
            title: "AI Insights (Coming Soon)",
            desc: "Get instant health insights and recommendations from your reports.",
          },
          {
            icon: <Activity className="text-green-600 w-8 h-8 mx-auto mb-3" />,
            title: "Track Your Progress",
            desc: "See how your health improves over time with easy-to-read visuals.",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold mb-2 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm text-center">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* 💡 Tip of the Day */}
      <section className="text-center py-12 bg-green-50">
        <h3 className="text-xl font-semibold text-green-700 mb-3">
          💡 Health Tip of the Day
        </h3>
         <p className="text-gray-700 font-medium">
          {randomTip || "Stay healthy and hydrated!"}
        </p>
      </section>

      {/* 🦶 Footer */}
      <footer className="text-center py-6 bg-white border-t">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Health Mate — Stay Healthy, Stay Strong 💪
        </p>
      </footer>
    </div>
  );
}
