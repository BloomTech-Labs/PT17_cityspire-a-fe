import React from 'react';
import 'antd/dist/antd.css';

import RenderCityHome from './RenderCityHome';
import LandingHeader from '../../common/HeaderLanding';
import CityFooter from '../../common/footerLanding';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function LandingContainer({ LoadingComponent }) {
  return (
    <>
      {/* <RenderLandingPage /> */}
      <Layout className="mainLayout">
        <Header>
          <LandingHeader />
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
