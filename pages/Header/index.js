"use client"
import { Menu } from 'lucide-react'
import Link from 'next/link';
import React, { useState } from 'react'



const Index = () => {
const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        {/* Header */}
    <div className="flex justify-between mt-4 font-sans w-full">
      <div className="p-3 md:text-2xl ml-7 text-[#8bc339]">Prime</div>
        <ul className="bg-gradient-to-br from-green-700 via-[#8bc339] to-green-700 rounded-full md:w-110 shadow-2xl p-4 md:text-lg md:flex space-x-8 hidden mr-7 text-white">
          <Link href={"#"} className="hover:text-gray-200"><li>Home</li></Link>
          <Link href={"#"} className="hover:text-gray-200"><li>Services</li></Link>
          <Link href={"#"} className="hover:text-gray-200"><li>About</li></Link>
          <Link href={"#"} className="hover:text-gray-200"><li>Blog</li></Link>
          <Link href={"/Login"} className="hover:text-gray-200"><li>Contact</li></Link>
        </ul>
      
       {/* Mobile Menu Button */}
       
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
    </div>

    {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-transparent backdrop:backdrop-blur-3xl shadow-md py-4 px-0 mx-70 w-40  rounded">
            <ul className="flex flex-col items-center space-y-3 font-mono text-base">
              <li><Link href={"#"} onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link href={"#"} onClick={() => setIsOpen(false)}>Services</Link></li>
              <li><Link href={"#"} onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link href={"#"} onClick={() => setIsOpen(false)}>Blogs</Link></li>
              <li><Link href={"#"} onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
    </>
  )
}

export default Index