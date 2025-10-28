import React from 'react'

const index = () => {
  return (
     <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-10 ">
        <h1 className="text-2xl font-bold text-green-600">Health Mate 🩺</h1>
        <div className="space-x-4">
          <a href="/" className="text-gray-700 hover:text-green-600 font-medium">
            Home
          </a>
          <a href="/upload" className="text-gray-700 hover:text-green-600 font-medium">
            Upload Report
          </a>
          <a href="/reports" className="text-gray-700 hover:text-green-600 font-medium">
            Reports
          </a>
          <a
            href="/login"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Login
          </a>
        </div>
      </nav>
  )
}

export default index