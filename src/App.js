import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shoppage/shoppage.component';

import Header from './components/header/header.component';

import SignInAndSignUpPage from './pages/signin-and-signup-page/signin-and-signup-page.component';

import {Switch,Route} from 'react-router-dom';

import {auth} from './firebase/firebase.utils';





class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      currentUSer:null
    }
  }

  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUSer:user})
      console.log(user)})
  }
 
  componentWillMount(){
    this.unSubscribeFromAuth = null;
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUSer} />
        <Switch>  
          <Route exact path="/" component={HomePage} />
          <Route  path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
