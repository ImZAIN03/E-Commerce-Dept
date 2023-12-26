import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-sky-700">
        Meet the Team
      </h2>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
        <p className="text-lg font-normal">
          Welcome to our E-Commerce website built with React.
        </p>
        <p className="pt-4 text-lg font-semibold">
          This project is supervised by:
          <span className="block text-sky-700 text-2xl font-bold mt-2">
            Dr. Sara Shahzad
          </span>
        </p>
      </div>

      <div className="mt-8 bg-gray-100 p-8 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold mb-6 text-center text-sky-700">
          The React Team
        </h3>

        <ul className="font-semibold text-center text-lg">
          <li>Muhammed Zain (101)</li>
          <li>Bismillah (104)</li>
          <li>Farheen Muzaffar (105)</li>
          <li>Muskan Hayat Sadozai (108)</li>
          <li>M Saqlain Ur Rehman (111)</li>
          <li>Ameer Hamza (114)</li>
          <li>Syed Mubashir Ali Shah (117)</li>
          <li>Muhammad Awais Khan (118)</li>
          <li>Kulsoom Mubarik (119)</li>
          <li>Umer Shakeel (128)</li>
          <li>Arfa Amir (132)</li>
          <li>Javeria Israr (139)</li>
          <li>Tuba Abrar (144)</li>
          <li>Tamkeen Amjid (145)</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
