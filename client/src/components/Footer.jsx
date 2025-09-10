import React from 'react'
import logo from "../assets/logo.png"
function Footer() {
  return (
    <>
    <div className='p-0 m-0'> 
   <footer className='grid grid-cols-5 gap-8 items-center justify-between'>

 
    <div className=' col-span-2 space-y-4 flex flex-col justify-centertext-center items-center p-8'>

        <img src={logo} alt="footer-logo" className='h-28 w-[340px]' />
        <p>We create durable, eco-friendly jute, cotton, and
     non-woven bags that combine style and sustainability—
      perfect for shopping, packaging, and promotions.</p>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
        <ul className='flex flex-col'>
       
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms Condition </li>
        </ul>
    </div>

     <div>
       <h3 className="font-semibold text-lg mb-3">Our Products</h3>
        <ul className='flex flex-col'>
        
          <li>Cotton bags</li>
          <li>Jute bags</li>
          <li>Non-wogen bags</li>
          
        </ul>
    </div>

     <div>
        <h3 className="font-semibold text-lg mb-3 items-center">Contact Us</h3>
        <ul className='flex flex-col'>
          
          <li>Phone</li>
          <li>Email</li>
          <li>Address</li>
          
        </ul>
    </div>
      </footer>
      </div>
      <div className='items-center '>
              <hr className='flex mx-15 text-gray-400' />
      <p className='text-center mt-5 text-gray-900'>@2024 All Rights Reserved</p>
      </div>
     
     </>
  )
}

export default Footer
