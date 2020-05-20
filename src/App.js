import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage";
import { Route,Switch } from 'react-router-dom';
import ShopPage from '../src/pages/shop/ShopPage';
import Header from '../src/components/header/Header';
import SignInandSignUp from '../src/pages/sign-in-and-sign-up/SignInandSignUp';
import { auth } from '../src/firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser : null
    }
  }
  unSubscribeAuth = null;
  componentDidMount() {
    this.unSubscribeAuth = auth.onAuthStateChanged(user => { 
      this.setState({ currentUser: user })
      console.log(this.state.currentUser);
    })
  }
  componentWillUnmount() {
    this.unSubscribeAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInandSignUp} />     
        </Switch>
      </div>
    );   
  }
}

export default App;
