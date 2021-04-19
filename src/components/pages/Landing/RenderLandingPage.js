import React from 'react';
import { Link } from 'react-router-dom';

import cities from '../../../assets/imgs/cities.png';
import citylife from '../../../assets/imgs/citylife.jpg';
import map from '../../../assets/imgs/map2.jpg';
import city1 from '../../../assets/imgs/city1.png';
import city2 from '../../../assets/imgs/city2.png';
import city3 from '../../../assets/imgs/city3.png';
import city4 from '../../../assets/imgs/city4.png';
import city5 from '../../../assets/imgs/city5.png';

function RenderLandingPage(props) {
  return (
    <div>
      <h1>Welcome to Labs Basic SPA</h1>
      <div>
        <p>
          This is an example of how we'd like for you to approach page/routable
          components.
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
