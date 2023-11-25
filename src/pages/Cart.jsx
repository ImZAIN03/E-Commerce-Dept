// Cart.jsx
import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  console.log('Received cart items in Cart component:', cartItems);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems && cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
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
                  <p className="text-lg font-semibold">{cartItem.name}</p>
                  <p className="text-gray-600">{cartItem.description}</p>
                  <p className="text-gray-800">${cartItem.price} x {cartItem.quantity}</p>
                  <button
                    onClick={() => handleRemove(cartItem.id)}
                    className="text-red-500 font-semibold hover:underline focus:outline-none"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
