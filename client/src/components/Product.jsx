import React from 'react'
import data from "../data/data.js"
function Product() {
    return (
        <div>
          
            <div className='grid grid-cols-3 gap-8 p-10'>


                {data.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`cotton-bag-${index}`}
                        className="w-full h-auto "
                    />
                ))}







            </div>
        </div>
    )
}

export default Product
