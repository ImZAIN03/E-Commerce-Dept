import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-4 text-center text-sky-700">
        The Team
      </h2>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <p className="text-lg font-normal">
          This website was created using React. It is an E-Commerce website.
        </p>
        <p className="pt-2 text-lg font-semibold">
          The project will be submitted to:
          <span className="block text-sky-700 text-2xl font-bold mt-2">
            Dr Sara Shahzad
          </span>
        </p>
      </div>

      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold mb-4 text-center text-sky-700">
          The Team (React Team)
        </h3>

        <p className="font-semibold text-center text-lg">
          Muhammed Zain (101) <br />
          Bismillah (104) <br />
          Farheen Muzaffar (105) <br />
          Muskan Hayat Sadozai (108) <br />
          M Saqlain Ur Rehman (111) <br />
          Ameer Hamza (114) <br />
          Syed Mubashir Ali Shah (117) <br />
          Muhammad Awais Khan (118) <br />
          Kulsoom Mubarik (119) <br />
          Umer Shakeel (128) <br />
          Arfa Amir (132) <br />
          Javeria Israr (139) <br />
          Tuba Abrar (144) <br />
          Tamkeen Amjid (145) <br />
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
