import React, { Component } from "react";
import { AppBar, Box, Toolbar, Link, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import LOGO from "../img/LOGO.png";
import LoginModal from './loginModal'

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
});

class nav extends Component {
  loginModalRef = ({handleOpen}) => {
    this.showModal = handleOpen;
 }
 
 onLoginClick = () => {
   this.showModal();
 }

  render() {
    const { classes } = this.props;
    // className={classes.AppBar}
    return (
      <>
      <LoginModal ref={this.loginModalRef} ></LoginModal>
        <AppBar className={classes.AppBar}>
          <Toolbar className={classes.Toolbar}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Box className={classes.Box}>Home</Box>
              <Box className={classes.Box}>TV Shows</Box>
              <Box className={classes.Box}>Movies</Box>
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
              <Button variant="contained" className={classes.ButtonRegister}>
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
