import React from 'react'

const CardProduct = ({ product, addToCart }) => {
    return (
      <div>
        <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div class="flex justify-between px-4 items-center">
              <div className="text-lg font-semibold">
                <h5 >{product.name}</h5>
                <p className="text-gray-400 text-base">{product.price}</p>
                </div>
                <div className='text-lg font-semibold'>
                <button onClick={() => addToCart(product)} className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center">+</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CardProduct