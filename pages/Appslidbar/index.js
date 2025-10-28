"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, LogOut, HeartPulse, Menu, X, UploadCloud } from "lucide-react";
import { useRouter } from "next/router";

const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Dashboard", icon: <Home size={20} />, href: "/Home" },
        { name: "Upload Reports", icon: <UploadCloud size={20} />, href: "/Upload" },
        { name: "Uploaded Reports", icon: <FileText size={20} />, href: "/Uploadedreport" },
    ];

    function handleLogout() {
        localStorage.removeItem("token");
        router.push("/");
    }

    return (
        <>
            <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-green-100 shadow-sm fixed top-0 left-0 w-full z-50">
                <div className="flex items-center gap-2">
                    <HeartPulse className="text-[#8bc339] w-6 h-6" />
                    <h1 className="text-lg font-bold text-[#8bc339]">HealthMate</h1>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-600 hover:text-[#8bc339] transition"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <div className={`
          fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r border-green-200 shadow-md flex flex-col justify-between transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0`}
            >
                <div>
                    {/* Logo (Desktop) */}
                    <div className="hidden md:flex items-center gap-3 px-6 py-5 border-b border-green-100">
                        <HeartPulse className="text-[#8bc339] w-7 h-7" />
                        <h1 className="text-xl font-bold text-[#8bc339]">HealthMate</h1>
                    </div>

                    {/* Nav Links */}
                    <nav className="mt-6 flex flex-col gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-6 py-3 text-sm font-medium rounded-lg mx-2 transition-all ${pathname === item.href
                                    ? "bg-green-100 text-[#8bc339]"
                                    : "text-gray-600 hover:bg-green-50 hover:text-[#8bc339]"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="text-[#8bc339]">{item.icon}</span>
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Footer */}
                <div className="border-t border-green-100 p-4">
                    <button
                        className="flex items-center gap-2 px-4 py-2 w-full text-sm font-medium text-gray-600 hover:bg-green-50 hover:text-[#8bc339] rounded-lg transition"
                        onClick={handleLogout}
                    >
                        <LogOut size={18} className="text-[#8bc339]" /> Logout
                    </button>
                    <p className="text-xs text-center text-gray-400 mt-2">
                        Made by <span className="text-green-600 font-medium">Ahmed</span>
                    </p>
                </div>
            </div>


            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-30"
                ></div>
            )}
        </>
    );
};

export default Sidebar;
