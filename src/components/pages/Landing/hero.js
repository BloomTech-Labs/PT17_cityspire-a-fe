import React from 'react';
import { Carousel } from 'antd';

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
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CityHero;
