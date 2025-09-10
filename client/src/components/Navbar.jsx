import React from 'react'
import logo from "../assets/logo.png"
import logo1 from "../assets/Stroke 2.png";
import heart from "../assets/Heart.png";
function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-12 w-auto" />
      </div>

      
      <ul className="flex space-x-8 text-gray-500 font-medium">
        <li className=" cursor-pointer">Home</li>
        <li className=" cursor-pointer">About Us</li>
        <li className=" cursor-pointer">Cotton Bags</li>
        <li className=" cursor-pointer">Jute Bags</li>
        <li className=" cursor-pointer">Non-woven Bags</li>
      </ul>
            <div className='flex flex-row gap-20 h-7 cursor-pointer'>
                <img src={logo1} alt="" />
                <img src={heart} alt="" />
            </div>
      
    </nav>
    )
}

export default Navbar
