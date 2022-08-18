import React from 'react';
import {AiFillDelete} from 'react-icons/ai'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const CartItem = ({ cartItem, removeFromCart, addItemQty, removeItemQty }) => {
  return (
    <>
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <div className="flex justify-between border-b-2 mb-2">
          <div className="text-lg py-2">
            <p>{cartItem.name}</p>
          </div>
          <div className="text-lg py-2">
            <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
              <div>
                {cartItem.quantity !== 26 ? (
                <button
                  onClick={() => addItemQty(cartItem)}
                  className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                >
                  <AiOutlinePlus />
                </button>
                ) : alert("No Product are available here")}
              </div>
              <p>{cartItem.quantity}</p>
              <button
                disabled={cartItem.quantity === 1}
                onClick={() => removeItemQty(cartItem)}
                className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
              >
                <AiOutlineMinus/>
              </button>
              <button
                onClick={() => removeFromCart(cartItem)}
                className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
              >
               <AiFillDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
