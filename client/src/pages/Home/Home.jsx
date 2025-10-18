import React from 'react'
import "./Home.css"
import logo from "../../assets/Logo.png";
import heart from "../../assets/Heart.png";
import user from "../../assets/Stroke 2.png";
import bag from "../../assets/Rectangle 9.png";
import img1 from "../../assets/Rectangle 10.png";
import img2 from "../../assets/Rectangle 11.png";
function Home() {
    return (
        <>
            <div className='page-container'>


                <div className='form1'>

                    <header className='header'>
                        <div><img src={logo} className='logo' /></div>
                        <div className='list'>
                            <ul>
                                <li>Home</li>
                                <li>About us </li>
                                <li>Cotton Bags</li>
                                <li>Jute Bags</li>
                                <li>Non-wogens Bags</li>
                            </ul>
                        </div>
                        <div className='logos'>
                            <img src={user} alt="user" className='logo1' />
                            <img src={heart} alt="like" className='logo1' />
                        </div>
                    </header>

                    <section className='second'>
                        <div className='part1'>
                            <img src={bag} alt="side-bag" className='bag' />
                        </div>
                        <div className='part2'>
                            <h1 className='head'><b>Cotton Bag - Vegetable bag
                                100% cotton bag</b></h1>

                            <div className='rank'>
                                <p>Minimum order - 300 bags</p>
                                <p>Material used - Cotton and rubber</p>
                            </div>

                            <div className='rank1'>
                                <h1>You can customize this bag also</h1>
                            </div>

                            <div className='rank3'>
                                <p><b>Maharashtra Bags guarantees the quality of every product we create.</b>
                                    uality control to ensure durability, eco-friendliness, and long-lasting
                                    performance. We stand behind our products, promising reliable strength,
                                    stylish designs, and sustainable solutions you can trust.</p>
                            </div>

                            <div className='buttons'>
                                <button className='btn1'>Add To List</button>
                                <button className='btn2'>Yes,I'm Intrested</button>
                            </div>
                        </div>
                    </section>

                    <div className='third'>
                        <p><b>Description of bag -</b> Our 100% cotton bag is the perfect blend of sustainability and everyday functionality. Crafted from pure, high-quality cotton fabric, this bag is lightweight yet strong
                            enough to carry heavy loads with ease. Its breathable and reusable design makes it an ideal choice for shopping, packaging, gifting, or promotional use. With a
                            soft texture and natural finish, it offers both comfort and style while helping reduce plastic waste. Easily customizable with printing and available in various sizes,
                            this eco-conscious bag is a smart, sustainable solution for both individuals and businesses.</p>
                    </div>

                    <div>
                        <h1 className='text2'>Similar Products</h1>
                    </div>

                    <div className='end1'>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={bag} alt="" />

                    </div>
                    <hr className="my-horizontal-line" />


                    <footer>
                        <div>
                            <img src={logo} alt="footer-logo" style={{ height:"169px", width: "344px" }} />
                            <p className='text3'>We create durable, eco-friendly jute, cotton, and
                                non-woven bags that combine style and sustainability—
                                perfect for shopping, packaging, and promotions.</p>
                        </div>
                        <div>
                            <h3><b> Quick links</b></h3>
                            <p>About Us</p>
                            <p>Contact Us</p>
                            <p>Privacy Policy</p>
                            <p>Terms and Condition</p>
                        </div>
                        <div>
                            <h3> <b> Our Product</b></h3>
                            <p>Cotton Bags</p>
                            <p>Jute Bags</p>
                            <p>Non-wogen Bags</p>
                        </div>
                        <div>
                            <h3> <b>Contact Us </b></h3>
                            <p>Phone</p>
                            <p>Email Adress</p>
                            <p>Address</p>
                        </div>

                    </footer>
                </div>


            </div>

        </>
    )
}

export default Home
