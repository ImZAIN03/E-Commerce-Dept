import React from 'react';

const FavoritesSection = () => {
  const products = [
    { id: 1, name: 'Microsoft Surface', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmtSo_YvfaNkoYTUvDNrTMyqUeo8pYF80kg&usqp=CAU' },
    { id: 2, name: 'Iphone 15 Pro Max', imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/6521318f9f1f39d21024aec0/IMG-5975/0x0.jpg?format=jpg&crop=2826,1955,x0,y158,safe&width=960' },
    { id: 3, name: 'PC Set-Up for Gamers', imageUrl: 'https://cdn.shopify.com/s/files/1/0096/4594/9013/files/Latest_Computer_Table_Design_For_Home_And_Office_In_2022-2.jpg?v=1651644413' },
  ];

  return (
    <div className="text-center">
      <h2 className="mb-1 text-xl font-bold">Users Favourites:</h2>
      <div className="flex flex-col items-center justify-center">
        {products.map((product) => (
          <div key={product.id} className="mb-3">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-32 h-32 object-cover mx-auto rounded-full my-2"
            />
            <p className="mt-1 font-semibold text-md">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesSection;
