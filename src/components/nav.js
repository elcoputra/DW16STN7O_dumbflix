import React, { Component } from "react";
import { AppBar, Box, Toolbar, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import LOGO from "../img/LOGO.png";
import LoginModal from "./loginModal";
import RegisterModal from "./registerModal";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  marginAutoItem: {},
  AppBar: {
    background: "#1F1F1F",
    height: "70px",
  },
  Toolbar: {
    height: "70px",
  },
  ButtonLogin: {
    height: "30px",
    width: "100px",
    margin: "10px",
    background: "#E50914",
    color: "white",
  },
  ButtonRegister: {
    color: "#E50914",
    height: "30px",
    width: "100px",
    margin: "10px",
  },
  Box: {
    margin: "10px",
  },
  Link: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
  },
});

class nav extends Component {
  loginModalRef = ({ handleOpenLogin }) => {
    this.showModalLogin = handleOpenLogin;
  };
  RegisterModalRef = ({ handleOpenRegister }) => {
    this.showModalRegister = handleOpenRegister;
  };

  onLoginClick = () => {
    this.showModalLogin();
  };
  onRegisterClick = () => {
    this.showModalRegister();
  };

  render() {
    const { classes } = this.props;
    // className={classes.AppBar}
    return (
      <>
        <LoginModal ref={this.loginModalRef}></LoginModal>
        <RegisterModal ref={this.RegisterModalRef}></RegisterModal>
        <AppBar className={classes.AppBar}>
          <Toolbar className={classes.Toolbar}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Box className={classes.Box}>
                <Link className={classes.Link} to="/">
                  Home
                </Link>
              </Box>
              <Box className={classes.Box}>
                <Link className={classes.Link} to="/TVShows">
                  TV Shows
                </Link>
              </Box>
              <Box className={classes.Box}>
                <Link className={classes.Link} to="/Movies">
                  Movies
                </Link>
              </Box>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <img src={LOGO} alt="Brand" />
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Button
                onClick={this.onRegisterClick}
                variant="contained"
                className={classes.ButtonRegister}
              >
                Register
              </Button>

              <Button
                onClick={this.onLoginClick}
                variant="contained"
                color="secondary"
                className={classes.ButtonLogin}
              >
                Login
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
export default withStyles(styles)(nav);
