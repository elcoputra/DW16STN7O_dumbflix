import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
import learn from './pages/learnREDUX';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CssBaseline />
          <Navbar />
          <Switch>
            <Route path='/Transaction' component={Transaction} />
            <Route path='/learn' component={learn} />
            <Route path='/ListFilm' component={ListFilm} />
            <Route path='/AddFilm' component={AddFilm} />
            <Route path='/Upgrade' component={Upgrade} />
            <Route path='/Profile' component={Profile} />
            <Route path='/Detail' component={DetailPlayer} />
            <Route path='/TVShows' component={TVShows} />
            <Route path='/Movies' component={Movies} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
