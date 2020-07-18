import React, { Component } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { connect } from 'react-redux';

// account action
import { clearError, clearMessage } from '../redux/actions/account_action';
// upgrade action
import { clearMessageUpgrade, clearErrorUpgrade } from '../redux/actions/upgrade_action';
// movie action
import {
  clearMessageAddMovieAction,
  clearErrorAddMovieAction,
  clearMessageUpdateMovieAction,
  clearErrorUpdateMovieAction,
} from '../redux/actions/movie_action';

// episodes action
import { clearMessageAddEpisodeAction, clearErrorAddEpisodeAction } from '../redux/actions/episode_action';
class snackbar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  render() {
    const vertical = 'top';
    const horizontal = 'center';
    const { error, errorBool, message, messageBool } = this.props.userReducer;
    const errorRegister =
      error && error.data && error.data.error
        ? error && error.data.error
        : error && error.data && error.data.message
        ? error.data.message
        : null;
    const messageRegister = message ? message : null;
    const { errorUpgradeBool, errorUpgrade, messageUpgrade, messageUpgradeBool } = this.props.upgradeReducer;
    const { errorAddMovie, messageAddMovie, errorBoolAddMovie, messageBoolAddMovie } = this.props.addMovieReducer;
    const { messageBoolEpisodes, messageEpisodes, errorBoolEpisodes, errorEpisodes } = this.props.episodeAddReducer;
    const {
      messageUpdateMovieBool,
      messageUpdateMovie,
      errorUpdateMovieBool,
      errorUpdateMovie,
    } = this.props.updateMovieReducer;
    return (
      <>
        {/* REGISTER SNACK*/}
        {/* ERROR */}
        <Snackbar
          open={errorBool}
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={6000}
          onClose={this.props.clearError}
        >
          <Alert onClose={this.props.clearError} severity='error'>
            {errorRegister}
          </Alert>
        </Snackbar>
        {/* SUCCESS */}
        <Snackbar
          open={messageBool}
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={6000}
          onClose={this.props.clearMessage}
        >
          <Alert onClose={this.props.clearMessage} severity='success'>
            {messageRegister}
          </Alert>
        </Snackbar>
        {/* REGISTER SNACK*/}

        {/* ////////////////////////////////////////////////////////////////// */}
        {/* UPGRADE SNACK*/}
        {/* SUCCESS */}
        <Snackbar
          open={messageUpgradeBool}
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={6000}
          onClose={this.props.clearMessageUpgrade}
        >
          <Alert onClose={this.props.clearMessageUpgrade} severity='success'>
            {messageUpgrade ? messageUpgrade : 'success'}
          </Alert>
        </Snackbar>
        {/* ERROR */}
        <Snackbar
          open={errorUpgradeBool}
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={6000}
          onClose={this.props.clearErrorUpgrade}
        >
          <Alert onClose={this.props.clearErrorUpgrade} severity='error'>
            {errorUpgrade ? errorUpgrade : messageUpgrade ? messageUpgrade : 'error'}
          </Alert>
        </Snackbar>
        {/* UPGRADE SNACK */}

        {/* ////////////////////////////////////////////////////////////////// */}
        {/* ADD MOVIE SNACK*/}
        {/* SUCCESS */}
        <Snackbar
          open={messageBoolAddMovie}
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={6000}
          onClose={this.props.clearMessageAddMovieAction}
        >
          <Alert onClose={this.props.clearMessageAddMovieAction} severity='success'>
            {messageAddMovie ? messageAddMovie : 'success'}
          </Alert>
        </Snackbar>
        {/* ERROR */}
        <Snackbar
          open={errorBoolAddMovie}
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={6000}
          onClose={this.props.clearErrorAddMovieAction}
        >
          <Alert onClose={this.props.clearErrorAddMovieAction} severity='error'>
            {errorAddMovie}
          </Alert>
        </Snackbar>
        {/* ADD MOVIE SNACK */}

        {/* ////////////////////////////////////////////////////////////////// */}
        {/* ADD EPISODE SNACK*/}
        {/* SUCCESS */}
        <Snackbar
          open={messageBoolEpisodes}
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={6000}
          onClose={this.props.clearMessageAddEpisodeAction}
        >
          <Alert onClose={this.props.clearMessageAddEpisodeAction} severity='success'>
            {messageEpisodes ? messageEpisodes : 'success'}
          </Alert>
        </Snackbar>
        {/* ERROR */}
        <Snackbar
          open={errorBoolEpisodes}
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={6000}
          onClose={this.props.clearErrorAddEpisodeAction}
        >
          <Alert onClose={this.props.clearErrorAddEpisodeAction} severity='error'>
            {errorEpisodes ? errorEpisodes : 'Error!'}
          </Alert>
        </Snackbar>
        {/* ADD EPISODE SNACK */}
        {/* ////////////////////////////////////////////////////////////////// */}
        {/* UPDATE MOVIE SNACK*/}
        {/* SUCCESS */}
        <Snackbar
          open={messageUpdateMovieBool}
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={6000}
          onClose={this.props.clearMessageUpdateMovieAction}
        >
          <Alert onClose={this.props.clearMessageUpdateMovieAction} severity='success'>
            {messageUpdateMovie ? messageUpdateMovie : 'success'}
          </Alert>
        </Snackbar>
        {/* ERROR */}
        <Snackbar
          open={errorUpdateMovieBool}
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={6000}
          onClose={this.props.clearErrorUpdateMovieAction}
        >
          <Alert onClose={this.props.clearErrorUpdateMovieAction} severity='error'>
            {errorUpdateMovie ? errorUpdateMovie : 'Error!'}
          </Alert>
        </Snackbar>
        {/* UPDATE MOVIE SNACK */}
      </>
    );
  }
}
// buat subscribe / ngambil date dari reducer, nama modalloginreducer ada di root di combine reducer
const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
    upgradeReducer: state.upgradeReducer,
    addMovieReducer: state.addMovieReducer,
    episodeAddReducer: state.episodeAddReducer,
    updateMovieReducer: state.updateMovieReducer,
  };
};

export default connect(mapStateToProps, {
  clearError,
  clearMessage,
  clearMessageUpgrade,
  clearErrorUpgrade,
  clearMessageAddMovieAction,
  clearErrorAddMovieAction,
  clearMessageAddEpisodeAction,
  clearErrorAddEpisodeAction,
  clearMessageUpdateMovieAction,
  clearErrorUpdateMovieAction,
})(snackbar);
