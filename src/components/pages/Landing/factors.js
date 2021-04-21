import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i class="fas fa-subway"></i>,
    title: 'Transportation',
    content:
      'Streamlined public transportation that may not require the need for your own vehicle.',
  },
  {
    key: '2',
    icon: <i class="fas fa-graduation-cap"></i>,
    title: 'Education',
    content:
      'School and education system is an important factor when choosing a new home.',
  },
  {
    key: '3',
    icon: <i class="fas fa-city"></i>,
    title: 'Opportunities',
    content:
      'Career and job opportunities that allows you to be fulfilled in the work that you do.',
  },
];

function CityFactors() {
  return (
    <div id="factor" className="block factorBlock">
      <div className="main-container">
        <div className="titleContainer">
          <h2>Let Us Help You Find Your Ideal Home</h2>
          <p style={{ fontSize: '20px' }}>“Home is where the heart is.”</p>
        </div>
        <div className="contentContainer">
          <p>
            'Considering a variety of factors to determine where is the best
            place to find your ideal home can be daunting. Making the right
            choice can affect your quality of life and your families happiness.
            Thus, moving to a new location is not a decision that should be made
            lightly. Some of the most important factors to consider when
            choosing a place to live, in no particular order, as these factors
            may have different levels of importance to you.'
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default CityFactors;
