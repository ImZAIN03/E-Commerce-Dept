import React from 'react';
import CategoriesSection from './CategoriesSection';
import SliderSection from './SliderSection';
import FavoritesSection from './FavoritesSection';

const MainSection = () => {
  return (
    <div className="flex mb-5">
      <div className="w-1/4">
        <CategoriesSection />
      </div>
      <div className="w-1/2">
        <SliderSection />
      </div>
      <div className="w-1/4">
        <FavoritesSection />
      </div>
    </div>
  );
};

export default MainSection;
