import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewProducts = ({ addToCart }) => {
  const navigate = useNavigate();

  const initialProducts = [
    { id: 1, name: 'Product 1', price: 20, image: 'https://seoghana.com/wp-content/uploads/2017/09/s3-news-tmp-85019-nestle_products-2x1-746-e1512646140862.jpg', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: 30, image: 'https://i0.wp.com/startuptipsdaily.com/wp-content/uploads/2016/02/how-to-sell-farm-products-in-nigeria.jpg?fit=560%2C315&ssl=1', description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', price: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3q4MxbmLjlo4gOeTMyrNDNGBhbqqw_SZQCA&usqp=CAU', description: 'Description for Product 3' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4">New Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {initialProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-4" />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-gray-800">${product.price}</p>
            <button
              onClick={() => {
                addToCart(product);
                navigate('/cart'); // Move navigation here to ensure it's triggered after addToCart
              }}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
