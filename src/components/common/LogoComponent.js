import React from 'react';

import { Image } from 'antd';
import cityspireLogo from '../../assets/imgs/cityspireLogoAlternative.png';

const LogoStyle = {
  marginBottom: '0',
  display: 'flex',
  alignItems: 'center',
};

const LogoImageStyle = {
  // display: 'inline-block',
  width: 'auto',
  height: '2.5rem',
  marginRight: '1rem',
};

const LogoComponent = () => {
  return (
    <a href="/">
      <h1 style={LogoStyle}>
        {/*<Image*/}
        {/*  preview={false}*/}
        {/*  src={cityspireLogo}*/}
        {/*  style={LogoImageStyle}*/}
        {/*/>*/}
        <img src={cityspireLogo} style={LogoImageStyle} alt="" />
        CitySpire
      </h1>
    </a>
  );
};

export default LogoComponent;
