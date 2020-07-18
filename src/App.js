import React, { Component } from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/nav';
import Home from './pages/Home';
import TVShows from './pages/TvShowsPage';
import Movies from './pages/MoviesPage';
import DetailPlayer from './pages/detailPlayer';
import Profile from './pages/profilePage';
import Upgrade from './pages/upgradePage';
import AddFilm from './pages/addFilm';
import ListFilm from './pages/listFilm';
import Transaction from './pages/transactionPage';
import Snackbar from './components/snackbar';
import UpdatePage from './pages/updatePage';
import HeroPage from './pages/heroPage';
import SearchPage from './pages/searchPage';

import { authAction } from './redux/actions/auth_action';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount = () => {
    this.props.authAction();
  };

  render() {
    const { userState } = this.props.authReducer;
    const StateAdmin = userState && userState.isAdmin ? userState.isAdmin : false;
    const stateLogin = userState && userState.isLogin ? userState.isLogin : false;
    const stateSubscribe = userState && userState.subscribe ? userState.subscribe : false;
    const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (StateAdmin === true ? <Component {...props} /> : <Redirect to='/' />)} />
    );
    const PrivateRouteUser = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (stateLogin === true ? <Component {...props} /> : <Redirect to='/' />)} />
    );
    const PrivateRouteSubscribe = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          stateLogin === true && stateSubscribe === true ? <Component {...props} /> : <Redirect to='/upgrade' />
        }
      />
    );
    return (
      <Router>
        <div>
          <CssBaseline />
          {stateLogin ? <Navbar /> : null}
          <Snackbar />
          <Switch>
            <PrivateRouteAdmin path='/update' component={UpdatePage} />
            <PrivateRouteAdmin path='/transactions' component={Transaction} />
            <PrivateRouteAdmin path='/add-movie' component={AddFilm} />
            <PrivateRouteAdmin path='/list-film' component={ListFilm} />
            <PrivateRouteUser path='/upgrade' component={Upgrade} />
            <PrivateRouteUser path='/profile' component={Profile} />
            <PrivateRouteSubscribe path='/detail' component={DetailPlayer} />
            <PrivateRouteSubscribe path='/tv' component={TVShows} />
            <PrivateRouteSubscribe path='/movies' component={Movies} />
            {/* {stateLogin ? <PrivateRouteSubscribe path='/' component={Home} /> : <Route path='/' component={HeroPage} />} */}
            <Route path='/' component={SearchPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authReducer: state.authReducer,
  };
};
export default connect(mapStateToProps, { authAction })(App);
