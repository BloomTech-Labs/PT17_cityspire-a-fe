import React from 'react';
import { Menu, Image } from 'antd';
import csLogo from '../../assets/imgs/CSpireLogo.png';

function LandingHeader() {
  return (
    <div className="main-container">
      <div className="header">
        <div className="logo">
          <Image
            preview={false}
            src={csLogo}
            style={{ width: '180px', paddingLeft: '30px', paddingTop: '10px' }}
          />
        </div>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="neighborhood">Neighborhood</Menu.Item>
          <Menu.Item key="feature">Features</Menu.Item>
          <Menu.Item key="login">SignUp/Login</Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default LandingHeader;
