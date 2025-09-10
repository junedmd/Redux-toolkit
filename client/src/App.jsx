import React from "react";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Product from "./components/Product.jsx";
import bg from "./assets/bg.png"

export default function App() {
  return (
    <div className="app-root">
      <Navbar/>
     <img src={bg} alt="background-img" />

        <div className="p-7">
        <h3 className="text-center text-xl font-semibold mb-6">Premium Cotton Bags by Maharashtra Bags – Durable, Eco-Friendly & Customizable</h3>

        <p><b>Maharashtra Bags, </b> established in 1990 in Nagpur, specializes in manufacturing high-quality cotton, jute, and non-woven bags that combine 
durability, style, and sustainability. Our cotton bags are crafted from premium-grade materials, designed to carry up to 25 kg with ease, 
making them ideal for shopping, packaging, and promotional purposes. Each bag undergoes strict quality checks and advanced manufacturing
 processes to ensure long-lasting performance. We offer complete customization including loop handles, logo printing, and flexible packaging options,
 allowing businesses and individuals to showcase their brand while reducing plastic waste. With decades of expertise, ethical practices, and reliable
 delivery, Maharashtra Bags provides the perfect eco-friendly alternative to single-use plastics—helping you make a positive environmental impact 
without compromising on style or functionality.</p>
        </div>


        <div>
            <h1 className=' font-playfair  font-light tracking-wide text-center text-5xl '>Sample Cotton Bags</h1>
        <Product/>

        <p className="text-center font-bold">You can customize cotton bags like these, for further enquires tap custom</p>
        <div className="flex items-center justify-center mt-5">
            <button className="bg-blue-700 text-white p-2 block items-center">Customize</button>
        </div>
        
        </div>

        <div className="mt-5">
            <h1 className=' font-playfair  font-light tracking-wide text-center text-5xl '>Our Cotton Bags</h1>
        <Product/>
        <Product/>

        <p className="text-center font-bold mb-5">This all our products</p>
        
        
        </div>
        <hr />
      <Footer/>
    
    </div>
  );
}
