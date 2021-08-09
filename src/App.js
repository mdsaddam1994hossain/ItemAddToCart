import React from 'react';
import 'antd/dist/antd.css';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {BrowserRouter as Router } from 'react-router-dom';
import MyRoute from './Container/MyRoute';

const App = () => {
  return (
    <div>
        <Router>
          <MyRoute />
        </Router>
    </div>
  );
};

export default App;