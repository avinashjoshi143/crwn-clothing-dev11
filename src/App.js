import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shoppage/shoppage.component';

import Header from './components/header/header.component';

import SignInAndSignUpPage from './pages/signin-and-signup-page/signin-and-signup-page.component';

import {Switch,Route} from 'react-router-dom';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';





class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      currentUSer:null
    }
  }

  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot =>{
          this.setState({
            currentUSer:{
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }
      else {
        this.setState({currentUSer:userAuth});
      }
    });
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
