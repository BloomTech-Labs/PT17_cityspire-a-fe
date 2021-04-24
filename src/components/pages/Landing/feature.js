import React from 'react';

import image1 from '../../../assets/imgs/city1.jpg';
import image2 from '../../../assets/imgs/city2.jpg';
import image3 from '../../../assets/imgs/city3.jpg';
import image4 from '../../../assets/imgs/city4.jpg';
import image5 from '../../../assets/imgs/city5.jpg';
import image6 from '../../../assets/imgs/city6.jpg';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function CityFeature() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="main-container">
        <div className="titleContainer">
          <h2>Key Features and Benefits</h2>
          <p>
            Find the ideal home of your dreams with all the feature and
            amenities you like.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt="Modern Design" src={image1} />}>
              <Meta title="Location" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt="Test" src={image2} />}>
              <Meta title="Accessibility" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt="Test" src={image3} />}>
              <Meta title="Luxury Living" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt="Test" src={image4} />}>
              <Meta title="Entertainment" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt="Test" src={image5} />}>
              <Meta title="Great Views" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt="Test" src={image6} />}>
              <Meta title="Schools" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CityFeature;
