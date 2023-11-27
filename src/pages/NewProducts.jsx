import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductModal = ({ product, closeModal }) => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-90">
    <div className="mt-10 w-5/6 bg-gray-200 text-black font-semibold p-8 rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-96 h-full object-cover mb-4 rounded-md shadow-md mx-auto"
      />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-gray-800 font-semibold">${product.price}</p>
      <button
        onClick={closeModal}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Close
      </button>
    </div>
  </div>
);

const NewProducts = ({ addToCart }) => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const initialProducts = [
    { id: 1, reviews: ["⭐⭐⭐⭐⭐ (201)"], name: 'Health Care', price: 25, image: 'https://th.bing.com/th/id/OIP.sRufQ_P_SgGVnOBPjYv7wgHaER?rs=1&pid=ImgDetMain', description: 'VitaWell Nutraceuticals introduces RevivePro, a cutting-edge health supplement designed to optimize wellness. RevivePro is formulated with natural ingredients and essential nutrients, aiming to enhance vitality, support immune function.' },
    { id: 2, reviews: ["⭐⭐⭐ (30)"], name: 'Men`s Clothing', price: 89, image: 'https://th.bing.com/th/id/R.f223fef99794fefa9d248fd02af59013?rik=d14O3%2baOwShB3A&pid=ImgRaw&r=0', description: 'Menswear is a contemporary men`s fashion brand recognized for its timeless elegance and modern sophistication. Renowned for its quality craftsmanship, attention to detail, and versatile designs.' },
    { id: 3, reviews: ["⭐⭐  (50)"], name: 'Women`s Clothing', price: 69, image: 'https://th.bing.com/th/id/OIP.hF7QTj2zZqAf4Mu0SpB6MgHaE_?rs=1&pid=ImgDetMain', description: ' Women`s Wear epitomizes chic sophistication and effortless style. Renowned for its curated collections, XYZ offers a diverse range of fashion-forward clothing and accessories tailored for the modern woman.' },
    { id: 4, reviews: ["⭐⭐⭐⭐ (420)"], name: 'Canon PowerShot', price: 650, image:'https://th.bing.com/th/id/OIP.eKtEiAK9cCeTGk8rY2om7wHaFj?w=2000&h=1500&rs=1&pid=ImgDetMain', description: 'The Canon PowerShot camera is a compact yet powerful imaging device known for its user-friendly interface, excellent image quality, and versatile shooting capabilities. Offering portability with advanced features.' },
    { id: 5,reviews: ["⭐⭐⭐⭐⭐ (1000)"], name: 'IPhone 15 Pro Max', price: 1225, image: 'https://imageio.forbes.com/specials-images/imageserve/641397e79f04500b85460b8f/Apple--iPhone-15--iPhone-15-Pro-Max--iPhone-15-Pro--iPhone-15-Pro-design--iPhone-15/0x0.jpg?format=jpg&crop=924,693,x359,y0,safe&width=960', description: 'The iPhone 15 Pro Max is Apples flagship smartphone, featuring cutting-edge technology, an advanced camera system, and a sleek design. With its powerful performance, stunning display, and innovative features.' },
    { id: 6,reviews: ["⭐ (690)"], name: 'Ulysse Nardin El Toro', price: 299, image: 'https://th.bing.com/th/id/OIP.6ZrAU8KTlIqI85WW29DQmAHaFj?rs=1&pid=ImgDetMain', description: 'The Ulysse Nardin El Toro watch is a remarkable timepiece renowned for its exquisite craftsmanship and sophisticated features. It`s part of the Ulysse Nardin Marine Collection, known for its maritime heritage and precision engineering.' },



  ];

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-semibold mb-8 text-center">Explore New Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initialProducts.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-md shadow-md cursor-pointer"
              onClick={() => openModal(product)}
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-gray-800 font-semibold">${product.price}</p>
            {product.reviews && (
                <div className="mt-2">
                  <h4 className="text-xl font-semibold">Customer Reviews:</h4>
                  <ul>
                    {product.reviews.map((review, index) => (
                      <li key={index} className="mb-2">
                        <p className="text-gray-700">{review}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            <button
              onClick={() => {
                addToCart(product);
                navigate('/cart');
              }}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} closeModal={closeModal} />
      )}
    </div>
  );
};

export default NewProducts;
