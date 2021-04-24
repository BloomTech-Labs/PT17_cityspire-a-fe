import React from 'react';
import csLogo from '../../assets/imgs/CSpireLogo.png';

import { Anchor, Image } from 'antd';

const { Link } = Anchor;

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
        <Anchor targetOffset="80">
          <Link href="#factor" title="Neighborhood" />
          <Link href="#feature" title="Features" />
          <Link href="Login" title="Sign Up/Log In" target="LoginPage" />
        </Anchor>
      </div>
    </div>
  );
}

export default LandingHeader;
