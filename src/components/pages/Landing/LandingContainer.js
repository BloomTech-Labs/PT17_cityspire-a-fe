import React from 'react';
import 'antd/dist/antd.css';

import RenderCityHome from './RenderCityHome.js';
import HeaderNav from '../../common/HeaderNav.js';
import CityFooter from '../../common/footerLanding';

import { Layout } from 'antd';

function LandingContainer({ LoadingComponent }) {
  const { Header, Content, Footer } = Layout;
  return (
    <>
      {/* <RenderLandingPage /> */}
      <Layout className="mainLayout">
        <Header>
          <HeaderNav />
        </Header>
        <Content>
          <RenderCityHome />
        </Content>
        <Footer>
          <CityFooter />
        </Footer>
      </Layout>
    </>
  );
}

export default LandingContainer;
