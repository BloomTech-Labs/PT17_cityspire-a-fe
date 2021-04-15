import React from 'react';

import { Image } from 'antd';
import cityspireLogo from '../../assets/imgs/cityspireLogo.png';

const LogoStyle = {
  marginBottom: '0',
};

const LogoComponent = () => {
  return (
    <h1 style={LogoStyle}>
      <a href="/">
        {/*<Image*/}
        {/*  preview={false}*/}
        {/*  src={cityspireLogo}*/}
        {/*  style={{ width: '120px' }}*/}
        {/*/>*/}
        CitySpire
      </a>
    </h1>
  );
};

export default LogoComponent;
