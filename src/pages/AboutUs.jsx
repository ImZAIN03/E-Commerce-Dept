import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-semibold mb-4 text-center">The Team</h2>
      <div className="bg-slate-100 p-6 rounded-lg shadow-md">
        <p className=" text-xl font-semibold text-center">
          This Website was created using React. It is an E-Commerce website. <br/>
          <p className='pt-2'>The Project will be Submitted To: <span className='font-bold text-2xl'>Mam Sara Shahzad</span></p>  
        </p>
      </div>

      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold mb-4 text-center">The Team</h3>
        <p className='font-semibold text-center'>
          Following is the Team (React Team):
        </p>
        <p className='pt-2 text-xl font-semibold text-center'>
          Muhammed Zain (101) <br/>
          Bismillah (104) <br/>
          Farheen Muzaffar (105) <br/>
          Muskan Hayat Sadozai (108) <br/>
          M Saqlain Ur Rehman (111) <br/>
          Ameer Hamza (114) <br/>
          Syed Mubashir Ali Shah (117) <br/>
          Muhammad Awais Khan (118) <br/>
          Kulsoom Mubarik (119) <br/>
          Umer Shakeel (128) <br/>
          Ubaid Ullah (130) <br/>
          Arfa Amir (132) <br/>
          Javeria Israr (139) <br/>
          Tuba Abrar (144) <br/>
          Tamkeen Amjid (145) <br/>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
