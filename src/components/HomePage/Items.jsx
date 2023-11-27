import React from 'react';

const Items = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
      name: 'Watch',
      price: 12000,
      description: 'Good Quality Watch',
      reviews: ["⭐⭐⭐ (50)"]
    },
    {
      id: 2,
      image: 'https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png',
      name: 'Laptop',
      price: 30000,
      description: 'Laptop for sale',
      reviews: ["⭐⭐⭐⭐⭐ (150)"]
    },
    {
      id: 3,
      image: 'https://thumbs.dreamstime.com/b/cleaning-products-hong-kong-supermarket-28191093.jpg',
      name: 'Bathroom Cleaner',
      price: 2590,
      description: 'Bathroom Products for Cleaning',
      reviews: ["⭐⭐⭐⭐ (20)"]
    },
    {
      id: 4,
      image: 'https://airspeed.ph/wp-content/uploads/2020/06/The-Importance-of-Courier-Services-for-Online-Shopping-of-Essential-Items.jpg',
      name: 'Shopping Cart',
      price: 1457,
      description: 'Shopping Cart for products',
      reviews: ["⭐⭐⭐⭐⭐ (82)"]
    },
    {
      id: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkFdPF3NH6EJIXAFMg0Ii2hxSrDHcd2fpfg&usqp=CAU',
      name: 'Food Items',
      price: 4560,
      description: 'Every day Food Items',
      reviews: ["⭐⭐ (420)"]
    },
    {
      id: 6,
      image: 'https://hips.hearstapps.com/hmg-prod/images/22-del-supermarket-explainer-lead-1676584430.jpg?crop=1xw:1xh;center,top&resize=1200:*',
      name: 'Fresh Food',
      price: 7500,
      description: 'Fresh Food on sale.',
      reviews: ["⭐ (80)"]
    },
    {
      id: 7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ubPdQutVjqSU8gQokSUjWVipAW1ZBxsSHQ&usqp=CAU',
      name: 'Washing Products',
      price: 1455,
      description: 'Washing Products for everyday use.',
      reviews: ["⭐⭐⭐⭐ (45)"]
    },
    {
      id: 8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrUN6WTST0PPEe2BUkCMx0RFn6E0veeIKFyQ&usqp=CAU',
      name: 'Bedroom Set',
      price: 15902,
      description: 'Elegant Bedroom Set',
      reviews: ["⭐⭐⭐ (56)"]
    },
    {
      id: 9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFfha3mKEFOWK3DgWFippxqkIRA-QXodVX4w&usqp=CAU',
      name: 'Clothes Set',
      price: 1250,
      description: 'Clothes Set Description',
      reviews: ["⭐⭐⭐⭐⭐ (255)"]
    }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center">
      {products.map((product) => (
        <div key={product.id} className="m-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md border-2 border-neutral-700">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-900 mb-4 font-semibold text-lg">{product.description}</p>
              <p className="text-white bg-gray-800 border-2 py-2 border-black rounded-full font-bold">PKR {product.price}</p>
              
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

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
