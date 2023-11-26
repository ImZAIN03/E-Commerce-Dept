import React from 'react';

const Items = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
      name: 'Item 1',
      price: 20,
      description: 'Description for Item 1',
    },
    {
      id: 2,
      image: 'https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png',
      name: 'Item 2',
      price: 30,
      description: 'Description for Item 2',
    },
    {
      id: 3,
      image: 'https://thumbs.dreamstime.com/b/cleaning-products-hong-kong-supermarket-28191093.jpg',
      name: 'Item 3',
      price: 25,
      description: 'Description for Item 3',
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="flex justify-center items-center">
      {products.map((product) => (
        <div key={product.id} className="m-4" style={{ maxWidth: '400px' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
          />
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-gray-800">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;