import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems && cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems?.map((cartItem) => (
            <div key={cartItem.id} className="bg-white p-4 rounded-lg shadow-md relative">
              <div className="flex items-center mb-4">
                <img
                  src={cartItem.image}
                  alt={cartItem.name}
                  className="w-16 h-16 object-cover mr-4 rounded-md"
                />
                <div>
                  <p className="text-lg font-semibold">{cartItem.name}</p>
                  <p className="text-gray-600">{cartItem.description}</p>
                  <p className="text-gray-800">${cartItem.price} x {cartItem.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(cartItem.id)}
                className="text-red-500 font-semibold hover:underline focus:outline-none absolute bottom-2 right-2"
                style={{ zIndex: '1' }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;