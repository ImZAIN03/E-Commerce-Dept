import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ cartItems }) => {
  return (
    <div className="container my-10 mx-auto p-4 w-4/6">
      <h2 className="text-5xl font-semibold my-4 bg-white">Checkout</h2>
      {cartItems && cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items to proceed to checkout.</p>
      ) : (
        <div>
          <ul>
            {cartItems?.map((cartItem) => (
              <li key={cartItem.id} className="mb-2 text-md">
                <div className="flex items-center">
                  <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <p className="text-xl font-semibold">{cartItem.name}</p>
                    <p className="text-gray-900 font-semibold">{cartItem.description}</p>
                    <p className="text-gray-800">${cartItem.price} x {cartItem.quantity}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4 flex flex-col md:flex-row md:justify-between">
        <div className="mb-2 md:mb-0">
          <Link to="/" className="bg-sky-800 text-white px-4 py-2 rounded-md mr-2">
            Go To Home
          </Link>
          <Link to="/new-products" className="bg-sky-400 text-white px-4 py-2 rounded-md">
            Buy More Stuff
          </Link>
        </div>
        <div className="mt-2 md:mt-0">
          <Link to="/pay-now" className="bg-green-600 text-white px-4 py-2 rounded-md">
            Pay Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
