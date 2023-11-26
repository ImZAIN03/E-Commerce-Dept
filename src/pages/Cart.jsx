import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  console.log('Received cart items in Cart component:', cartItems);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const totalPrice = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  return (
    <div className="container mx-auto p-4 w-4/6">
      <h2 className="text-3xl font-semibold my-4 bg-white">Shopping Cart</h2>
      {cartItems && cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
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
                    <button
                      onClick={() => handleRemove(cartItem.id)}
                      className="text-red-600 font-semibold text-md focus:outline-none"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
