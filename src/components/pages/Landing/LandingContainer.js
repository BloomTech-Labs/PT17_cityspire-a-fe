import React from 'react';
import 'antd/dist/antd.css';

import RenderCityHome from './RenderCityHome';
import HeaderNav from '../../common/HeaderNav';
import CityFooter from '../../common/footerLanding';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function LandingContainer({ LoadingComponent }) {
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
