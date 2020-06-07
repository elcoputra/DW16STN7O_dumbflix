import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade, Box, Grid, TextField, Button, Link } from "@material-ui/core";
import RegisterModal from "./registerModal";

const styles = (theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
  },
  Box: {
    backgroundColor: "black",
    opacity: "100%",
    width: "416px",
    height: "408px",
    borderRadius: "10px",

    paddingTop: "30px",
    paddingBottom: "30px",
    paddingLeft: "25px",
    paddingRight: "25px",
  },
  Title: {
    color: "#FFFFFF",
    fontSize: "36px",
  },
  GridInput: {
    color: "#B1B1B1",
  },
  textField: {
    background: "rgba(210, 210, 210, 0.25)",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 350,
  },

  cssLabel: {
    color: "#B1B1B1",
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `red !important`,
    },
  },

  cssFocused: {
    color: "white",
  },

  notchedOutline: {
    borderWidth: "2px",
    borderColor: "white !important",
  },
  ButtonLogin: {
    height: "50px",
    width: "350px",
    fontSize: "18pxx",
    background: "#E50914",
    marginTop: "10px",
    color: "white",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#870303",
    },
  },
  GridClickHere: {
    marginTop: "50px",
  },
  LinkCliclHere: {
    color: "red",
  },
});

class loginModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLogin: false,
      open: false,
    };
    this.handleOpenLogin = this.handleOpenLogin.bind(this);
    this.handleCloseLogin = this.handleCloseLogin.bind(this);
    this.openRegister = this.openRegister.bind(this);
  }
  componentDidMount() {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin === "false") {
      this.setState({
        isLogin: false,
      });
    }
    if (isLogin === "true") {
      this.setState({
        isLogin: true,
      });
    }
  }
  RegisterModalRef = ({ handleOpenRegister }) => {
    this.showModalRegister = handleOpenRegister;
  };
  handleOpenLogin() {
    this.setState({ open: true });
  }

  handleCloseLogin() {
    this.setState({ open: false });
  }
  openRegister() {
    this.handleCloseLogin();
    this.showModalRegister();
  }
  stateLogin = () => {
    localStorage.setItem("isLogin", true);
    this.getDataLocalStorage();
    this.handleCloseLogin()
  };
  getDataLocalStorage = () => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin === "true") {
      this.setState({
        isLogin: true,
      });
    }
    if (isLogin === "false") {
      this.setState({
        isLogin: false,
      });
    }
    this.props.sendDataIsLogin(true);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <RegisterModal ref={this.RegisterModalRef}></RegisterModal>
        <Modal
          className={classes.modal}
          open={this.state.open}
          onClose={this.handleCloseLogin}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}>
          <Fade in={this.state.open}>
            <Box className={classes.Box}>
              <b className={classes.Title}>Login</b>
              <Grid className={classes.GridInput} container direction="column" justify="center" alignItems="center">
                <Grid item xs={12}>
                  <TextField
                    id="standard-name"
                    label="Email"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
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
                      inputMode: "numeric",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-name"
                    label="Password"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
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
                      inputMode: "numeric",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button onClick={this.stateLogin} variant="contained" className={classes.ButtonLogin}>
                    Login
                  </Button>
                </Grid>
                <Grid item xs className={classes.GridClickHere}>
                  Don't have an account ? Klik
                  <Link className={classes.LinkCliclHere} href="#" onClick={this.openRegister}>
                    <b> Here</b>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(loginModal);
