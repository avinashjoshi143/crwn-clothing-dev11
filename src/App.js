import React, { useEffect } from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin-and-signup-page/signin-and-signup-page.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';

import {Switch,Route,Redirect} from 'react-router-dom';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {connect} from 'react-redux';

import setCurrentUser from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';

import {createStructuredSelector} from 'reselect';






const App = ({setCurrentUser,currentUser})=> {
  
  useEffect(()=>{
    console.log("i am subscribing");
       const unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
      
          userRef.onSnapshot(snapshot =>{
            setCurrentUser({
              currentUser:{
                id: snapshot.id,
                ...snapshot.data()
              }
            });
          });
        }
        else {
          setCurrentUser(userAuth);
        }
      });

      return () => {
        unSubscribeFromAuth();
      }
  },[setCurrentUser])

  
  
  return (
    <div>
        <Header />
        <Switch>  
          <Route exact path="/" render={() => currentUser ?<HomePage/> : <Redirect to='/signin' />} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => currentUser ?<Redirect to='/' /> : <SignInAndSignUpPage />} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
