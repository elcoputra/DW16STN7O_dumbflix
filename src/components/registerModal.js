import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Modal,
  Backdrop,
  Fade,
  Box,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { closeModalRegister } from '../redux/actions/modal_actions';
import { registerAction } from '../redux/actions/account_action';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class registerModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      prevEmail: '',
      open: false,
      data: {},
      user: { isAdmin: false, gender: 'Male' },
    };
  }

  componentDidMount() {}

  handleOpenRegister = () => {
    this.setState({ open: true });
  };

  handleCloseRegister = () => {
    this.setState({ open: false });
  };

  handleChangeInput = (event) => {
    const { user } = this.state;
    this.setState({
      user: { ...user, [event.target.name]: event.target.value },
    });
  };

  handleSubmitRegister = async (event) => {
    this.props.registerAction(this.state.user);
    this.setState({
      user: { isAdmin: false, gender: 'Male' },
    });
  };

  render() {
    if (this.props.email !== this.state.prevEmail) {
      this.setState({
        prevEmail: this.props.email,
        user: { ...this.state.user, email: this.props.email },
      });
    }

    const { classes } = this.props;
    const { error, isLogin } = this.props.userReducer;
    const { userState, loading } = this.props.authReducer;

    const errorHandling = error && error.data ? error.data.error : null;
    const errorMessageHandling = error && error.data ? error.data.message : null;
    const isSubscribeState = userState ? userState.subscribe : false;
    const isLoginState = userState ? userState.isLogin : false;

    if (!loading && isLoginState && !isSubscribeState) return <Redirect to='/Upgrade' />;
    return (
      <div>
        {console.log(this.props.modalRegister)}
        <Modal
          className={classes.modal}
          open={this.props.modalRegister}
          onClose={this.props.closeModalRegister}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.props.modalRegister}>
            <Box className={classes.Box}>
              <b className={classes.Title}>Register</b>
              <div className={classes.errorResponse}>
                {errorHandling}
                {errorMessageHandling}
              </div>
              <Grid className={classes.GridInput} container direction='column' justify='center' alignItems='center'>
                <Grid item xs={12}>
                  <TextField
                    id='standard-name'
                    label='Email'
                    name='email'
                    type='email'
                    value={this.state.user.email ? this.state.user.email : ''}
                    onChange={this.handleChangeInput}
                    className={classes.textField}
                    margin='normal'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id='standard-name'
                    label='Password'
                    name='password'
                    type='password'
                    value={this.state.user.password ? this.state.user.password : ''}
                    onChange={this.handleChangeInput}
                    className={classes.textField}
                    margin='normal'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id='standard-name'
                    label='Full Name'
                    name='fullName'
                    type='string'
                    value={this.state.user.fullName ? this.state.user.fullName : ''}
                    onChange={this.handleChangeInput}
                    className={classes.textField}
                    margin='normal'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* <FormControl variant='outlined' className={classes.formControl}>
                    <InputLabel id='demo-simple-select-outlined-label'>Gender</InputLabel>
                    <Select
                      labelId='gender'
                      id='gender'
                      name='gender'
                      value={this.state.user.gender}
                      onChange={this.handleChangeInput}
                      className={classes.select}
                      MenuProps={{ classes: { paper: classes.dropdownStyle } }}
                    >
                      <MenuItem value='Male'>Male</MenuItem>
                      <MenuItem value='Female'>Female</MenuItem>
                    </Select>
                  </FormControl> */}

                  <TextField
                    select
                    label='Select'
                    className={classes.textField}
                    value={this.state.user.gender}
                    name='gender'
                    onChange={this.handleChangeInput}
                    helperText='Please select your gender'
                    variant='outlined'
                  >
                    <MenuItem value='Male'>Male</MenuItem>
                    <MenuItem value='Female'>Female</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id='standard-name'
                    label='Phone'
                    name='phone'
                    value={this.state.user.phone ? this.state.user.phone : ''}
                    onChange={this.handleChangeInput}
                    className={classes.textField}
                    margin='normal'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id='standard-name'
                    label='Address'
                    name='address'
                    value={this.state.user.address ? this.state.user.address : ''}
                    onChange={this.handleChangeInput}
                    className={classes.textField}
                    margin='normal'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant='contained' onClick={this.handleSubmitRegister} className={classes.ButtonRegister}>
                    Register
                  </Button>
                </Grid>
                <Grid item xs className={classes.GridClickHere}>
                  Already have an account ? Klik <b>Here</b>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  }
}
const styles = (theme) => ({
  // DROPDOWN
  formControl: {
    marginTop: 15,
    marginBottom: 10,
    width: 350,
    fontColor: 'white',
    color: 'white',
    backgroundColor: 'rgba(210, 210, 210, 0.25)',
    laberColor: 'white',
    borderRadius: 5,
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

  dropdownStyle: {
    backgroundColor: '#353535',
    fontColor: 'white',
    color: 'white',
    laberColor: 'white',
  },
  InputLabel: {
    color: 'white',
  },
  select: {
    '&:before': {
      borderColor: 'white',
      labelColor: 'white',
      fontColor: 'white',
      color: 'white',
    },
    '&:after': {
      borderColor: 'white',
      labelColor: 'white',
      fontColor: 'white',
      color: 'white',
    },
  },
  icon: {
    fontSize: 40,
    color: 'white',
  },
  inputProps: {
    color: 'white',
    '&:before': {
      borderColor: 'white',
      labelColor: 'white',
      fontColor: 'white',
      color: 'white',
    },
    '&:after': {
      borderColor: 'white',
      labelColor: 'white',
      fontColor: 'white',
      color: 'white',
    },
  },
  // DROPDOWN END
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
    height: '680px',
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
    marginTop: 10,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 350,
    borderRadius: 5,
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
  ButtonRegister: {
    height: '50px',
    width: '350px',
    fontSize: '18pxx',
    background: 'white',
    marginTop: '10px',
    color: 'red',
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: '#870303',
    },
  },
  GridClickHere: {
    marginTop: '25px',
  },
  errorResponse: {
    color: 'white',
  },
});
// buat subscribe / ngambil date dari reducer, nama modalloginreducer ada di root di combine reducer
const mapStateToProps = (state) => {
  return {
    modalRegister: state.modalRegisterReducer.registerModalOpen,
    userReducer: state.userReducer,
    authReducer: state.authReducer,
  };
};

export default compose(withStyles(styles), connect(mapStateToProps, { closeModalRegister, registerAction }))(registerModal);
