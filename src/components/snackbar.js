import React, { Component } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { clearError, clearMessage } from '../redux/actions/account_action';
import { clearMessageUpgrade, clearErrorUpgrade } from '../redux/actions/upgrade_action';
import { connect } from 'react-redux';

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
      error.data && error.data.error ? error.data.error : error.data && error.data.message ? error.data.message : null;
    const messageRegister = message ? message : null;
    const { errorUpgradeBool, errorUpgrade, messageUpgrade, messageUpgradeBool } = this.props.upgradeReducer;
    return (
      <div>
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
      </div>
    );
  }
}
// buat subscribe / ngambil date dari reducer, nama modalloginreducer ada di root di combine reducer
const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
    upgradeReducer: state.upgradeReducer,
  };
};

export default connect(mapStateToProps, {
  clearError,
  clearMessage,
  clearMessageUpgrade,
  clearErrorUpgrade,
})(snackbar);
