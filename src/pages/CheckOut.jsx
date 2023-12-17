import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ cartItems }) => {
  return (
    <div className="container mx-auto p-4 w-4/6">
      <h2 className="text-3xl font-semibold my-4 bg-white">Checkout</h2>
      {cartItems && cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items to proceed to checkout.</p>
      ) : (
        <div>
          <ul>
            {cartItems?.map((cartItem) => (
              <li key={cartItem.id} className="mb-2">
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

      <div className="mt-4 flex justify-between">
        <Link to="/" className="bg-sky-800 text-white px-4 py-2 rounded-md">
          Go To Home
        </Link>
        <Link to="/new-products" className="bg-sky-400 text-white px-4 py-2 rounded-md">
          Buy More Stuff
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
