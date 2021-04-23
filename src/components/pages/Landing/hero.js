import React from 'react';
import { Button, Carousel } from 'antd';

const items = [
  {
    Key: '1',
    title: 'Location, Community, Quality Living... It Starts Here!',
  },
];

function CityHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="main-container">
              <div className="content">
                <h3
                  style={{
                    color: 'white',
                    paddingTop: '200px',
                    fontSize: '45px',
                    fontWeight: 'bold',
                  }}
                >
                  {item.title}
                </h3>
                <p></p>
                <div className="btnHolder">
                  <Button
                    type="primary"
                    size="medium"
                    style={{ borderRadius: '10px' }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CityHero;
