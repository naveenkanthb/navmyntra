import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage";
import { Route,Switch } from 'react-router-dom';
import ShopPage from '../src/pages/shop/ShopPage';
import Header from '../src/components/header/Header';

const HatsPage = () => (
  <div>
    hatspage
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
