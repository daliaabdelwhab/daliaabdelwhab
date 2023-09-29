import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/components/Home';
import ProductDetails from './pages/components/ProductDetails';
import NotFound from './pages/components/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
};

export default App;