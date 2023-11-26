import React from 'react';

const Items = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
      name: 'Item 1',
      price: 1200,
      description: 'Good Quality Watch',
    },
    {
      id: 2,
      image: 'https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png',
      name: 'Item 2',
      price: 30000,
      description: 'Good Laptop',
    },
    {
      id: 3,
      image: 'https://thumbs.dreamstime.com/b/cleaning-products-hong-kong-supermarket-28191093.jpg',
      name: 'Item 3',
      price: 2590,
      description: 'Bathroom Cleaner',
    },
    {
      id: 4,
      image: 'https://airspeed.ph/wp-content/uploads/2020/06/The-Importance-of-Courier-Services-for-Online-Shopping-of-Essential-Items.jpg',
      name: 'Item 4',
      price: 1457,
      description: 'Shopping Cart',
    },
    {
      id: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkFdPF3NH6EJIXAFMg0Ii2hxSrDHcd2fpfg&usqp=CAU',
      name: 'Item 5',
      price: 4560,
      description: 'Food Items',
    },
    {
      id: 6,
      image: 'https://hips.hearstapps.com/hmg-prod/images/22-del-supermarket-explainer-lead-1676584430.jpg?crop=1xw:1xh;center,top&resize=1200:*',
      name: 'Item 6',
      price: 7500,
      description: 'Fresh Food',
    },
    {
      id: 7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ubPdQutVjqSU8gQokSUjWVipAW1ZBxsSHQ&usqp=CAU',
      name: 'Item 7',
      price: 1455,
      description: 'Washing Products',
    },
    {
      id: 8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrUN6WTST0PPEe2BUkCMx0RFn6E0veeIKFyQ&usqp=CAU',
      name: 'Item 8',
      price: 15902,
      description: 'Bedroom Set',
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

 return (
    <div className="flex flex-wrap justify-center items-center">
      {products.map((product) => (
        <div key={product.id} className="m-4 max-w-xs bg-white p-6 rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-gray-800 font-bold">Pkr {product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
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