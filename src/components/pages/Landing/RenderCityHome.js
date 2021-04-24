import React from 'react';

import CityHero from '../Landing/hero';
import CityFactors from '../Landing/factors';
import CityFeature from '../Landing/feature';

function RenderCityHome() {
  return (
    <div className="main">
      <CityHero />
      <CityFactors />
      <CityFeature />
    </div>
  );
}

export default RenderCityHome;
