import React from 'react';
import cityspireLogo from '../../assets/imgs/cityspireLogoAlternative.png';
import cityspireLogo2 from '../../assets/imgs/citySpireLogoAlternative2.png';

const LogoStyle = {
  marginBottom: '0',
  display: 'flex',
  alignItems: 'center',
};

const LogoImageStyle = {
  width: 'auto',
  height: '2.5rem',
  marginRight: '1rem',
};

const LogoComponent = () => {
  return (
    <a href="/">
      <h1 style={LogoStyle}>
        {/*<img src={cityspireLogo} style={LogoImageStyle} alt="CitySpire | Find your home!" />*/}
        <img
          src={cityspireLogo2}
          style={LogoImageStyle}
          alt="CitySpire | Find your home!"
        />
        CitySpire
      </h1>
    </a>
  );
};

export default LogoComponent;
