import React from 'react';

const Items = () => {
  return (
    <div className="flex justify-center items-center">
      <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Item 1" className="m-4" style={imageStyle} />
      <img src="https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png" alt="Item 2" className="m-4" style={imageStyle} />
      <img src="https://thumbs.dreamstime.com/b/cleaning-products-hong-kong-supermarket-28191093.jpg" alt="Item 3" className="m-4" style={imageStyle} />
    </div>
  );
};

const imageStyle = {
  width: '100%', 
  maxWidth: '400px', 
  height: 'auto', 
  objectFit: 'cover', 
  display: 'inline-block',
};

export default Items;
