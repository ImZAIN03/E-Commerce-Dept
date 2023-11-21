import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-between p-4 bg-gray-700 ">
      <div className='border-2 border-gray-600 p-4 bg-white text-black rounded-md'>
        <div className="bg-white text-black">Help/FAQ</div>
      </div>
      <div>
        <p className="border-2 border-gray-600 bg-white text-black p-4 rounded-md">© E-Commerce React</p>
      </div>
    </div>
  );
};

export default Footer;
