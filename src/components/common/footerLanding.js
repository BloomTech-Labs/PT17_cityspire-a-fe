import React, { useState, useEffect } from 'react';

import csLogo from '../../assets/imgs/CSpireFtLogo.png';

import { BackTop, Image } from 'antd';

const CityFooter = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <div className="footer-container">
      <div className="footer">
        <ul className="socials">
          <li>
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <div className="copyright">
          Copyright
          <span className="logo">
            <Image
              preview={false}
              src={csLogo}
              style={{
                width: '100px',
                paddingLeft: '10px',
                paddingRight: '10px',
              }}
            />
          </span>
          ©{date} Created by Labspt17-cityspire-a
        </div>
        <BackTop>
          <div className="goTop">
            <i className="fas fa-arrow-circle-up"></i>
          </div>
        </BackTop>
      </div>
    </div>
  );
};

export default CityFooter;
