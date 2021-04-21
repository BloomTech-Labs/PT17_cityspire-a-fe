import React from 'react';
// import RenderLandingPage from './RenderLandingPage';
import RenderCityHome from './RenderCityHome';
import HeaderNav from '../../common/HeaderNav';

import { Layout } from 'antd';
const { Header, Content } = Layout;

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
      </Layout>
    </>
  );
}

export default LandingContainer;
