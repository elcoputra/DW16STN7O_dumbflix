import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Box, Grid, TextField, Button, Link } from '@material-ui/core';
import RegisterModal from './registerModal';
import { closeModalLogin } from '../redux/actions/modal_actions';
import { loginAction } from '../redux/actions/account_action';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const styles = (theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  },
  Box: {
    backgroundColor: 'black',
    opacity: '100%',
    width: '416px',
    height: '408px',
    borderRadius: '10px',

    paddingTop: '30px',
    paddingBottom: '30px',
    paddingLeft: '25px',
    paddingRight: '25px',
  },
  Title: {
    color: '#FFFFFF',
    fontSize: '36px',
  },
  GridInput: {
    color: '#B1B1B1',
  },
  textField: {
    background: 'rgba(210, 210, 210, 0.25)',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    borderRadius: 5,
    width: 350,
    '& .MuiFormHelperText-root': {
      color: '#B7B7B7',
    },

    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& fieldset': {
        borderColor: '#d2d2d2',
        borderWidth: 2,
      },
      '&:hover fieldset': {
        borderColor: 'red',
        borderWidth: 2,
      },
      '&.Mui-focused fieldset': {
        color: 'red',
        borderColor: 'red',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#d2d2d2',
      '&.Mui-focused': {
        color: 'red',
      },
    },
    '& .MuiSelect-icon': {
      color: '#B7B7B7',
      fontSize: 40,
      top: 10,
    },
  },

  cssLabel: {
    color: '#B1B1B1',
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `red !important`,
    },
  },

  cssFocused: {
    color: 'white',
  },

  notchedOutline: {
    borderWidth: '2px',
    borderColor: 'white !important',
  },
  ButtonLogin: {
    height: '50px',
    width: '350px',
    fontSize: '18pxx',
    background: '#E50914',
    marginTop: '10px',
    color: 'white',
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: '#870303',
    },
  },
  GridClickHere: {
    marginTop: '50px',
  },
  LinkCliclHere: {
    color: 'red',
  },
  errorResponse: {
    color: 'white',
  },
});

class loginModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLogin: false,
      open: false,
      email: '',
      password: '',
      token: '',
      user: {},
    };
    // this.handleOpenLogin = this.handleOpenLogin.bind(this);
    // this.handleCloseLogin = this.handleCloseLogin.bind(this);
    // this.openRegister = this.openRegister.bind(this);
  }
  componentDidMount() {
    // const isLogin = localStorage.getItem('isLogin');
    // if (isLogin === 'false') {
    //   this.setState({
    //     isLogin: false,
    //   });
    // }
    // if (isLogin === 'true') {
    //   this.setState({
    //     isLogin: true,
    //   });
    // }
  }
  // RegisterModalRef = ({ handleOpenRegister }) => {
  //   this.showModalRegister = handleOpenRegister;
  // };
  // handleOpenLogin() {
  //   this.setState({ open: true });
  // }

  // handleCloseLogin() {
  //   this.setState({ open: false });
  // }
  // openRegister() {
  //   this.handleCloseLogin();
  //   this.showModalRegister();
  // }
  // stateLogin = () => {
  //   localStorage.setItem('isLogin', true);
  //   localStorage.setItem('isAdmin', false);
  //   this.getDataLocalStorage();
  //   this.handleCloseLogin();
  // };
  handleButtonLogin = () => {
    this.setState({
      user: {},
    });
    this.props.loginAction(this.state.user);
  };
  // getDataLocalStorage = () => {
  //   const isLogin = localStorage.getItem('isLogin');
  //   if (isLogin === 'true') {
  //     this.setState({
  //       isLogin: true,
  //     });
  //   }
  //   if (isLogin === 'false') {
  //     this.setState({
  //       isLogin: false,
  //     });
  //   }
  //   this.props.sendDataIsLogin(true);
  // };
  handleInputChange = (event) => {
    const { user } = this.state;
    this.setState({
      // user: { ...user, [event.target.name]: event.target.value },
      user: { ...user, [event.target.name]: event.target.value },
    });
  };

  render() {
    const { classes } = this.props;
    const { error } = this.props.userReducer;
    const { userState, loading } = this.props.authReducer;

    const errorHandling = error && error.data ? error.data.error : null;
    const errorMessageHandling = error && error.data ? error.data.message : null;
    const isSubscribeState = userState ? userState.subscribe : false;
    const isLoginState = userState ? userState.isLogin : false;

    if (!loading && isLoginState && !isSubscribeState) return <Redirect to='/Upgrade' />;

    return (
      <div>
        <RegisterModal ref={this.RegisterModalRef}></RegisterModal>
        <Modal
          className={classes.modal}
          open={this.props.modalLogin}
          onClose={this.props.closeModalLogin}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.props.modalLogin}>
            <Box className={classes.Box}>
              <form>
                <b className={classes.Title}>Login</b>
                <div className={classes.errorResponse}>
                  {errorHandling}
                  {errorMessageHandling}
                </div>
                <Grid className={classes.GridInput} container direction='column' justify='center' alignItems='center'>
                  <Grid item xs={12}>
                    <TextField
                      id='email-login'
                      label='Email'
                      type='email'
                      name='email'
                      value={this.state.user.email ? this.state.user.email : ''}
                      onChange={this.handleInputChange}
                      className={classes.textField}
                      margin='normal'
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id='password-login'
                      label='Password'
                      type='password'
                      name='password'
                      value={this.state.user.password ? this.state.user.password : ''}
                      onChange={this.handleInputChange}
                      className={classes.textField}
                      margin='normal'
                      variant='outlined'
                      InputLabelProps={{
                        classes: {
                          root: classes.cssLabel,
                          focused: classes.cssFocused,
                        },
                      }}
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          notchedOutline: classes.notchedOutline,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button onClick={this.handleButtonLogin} variant='contained' className={classes.ButtonLogin}>
                      Login
                    </Button>
                  </Grid>
                  <Grid item xs className={classes.GridClickHere}>
                    Don't have an account ? Klik
                    <Link className={classes.LinkCliclHere} href='#' onClick={this.openRegister}>
                      <b> Here</b>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    modalLogin: state.modalLoginReducer.loginModalOpen,
    userReducer: state.userReducer,
    authReducer: state.authReducer,
  };
};

export default compose(withStyles(styles), connect(mapStateToProps, { closeModalLogin, loginAction }))(loginModal);
