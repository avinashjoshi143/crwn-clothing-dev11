import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin-and-signup-page/signin-and-signup-page.component';
import {Switch,Route} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user.actions';





class App extends React.Component {
  

  componentDidMount() {
    const {setCurrentUser} = this.props;
    auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot =>{
          setCurrentUser({
            currentUSer:{
              id: snapshot.id,
              ...snapshot.data()
            }
          });
          console.log(this.state);
        });
      }
      else {
        setCurrentUser(userAuth);
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>  
          <Route exact path="/" component={HomePage} />
          <Route  path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);
