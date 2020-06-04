import React, { Component } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Link,
  Button,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import LOGO from "../img/LOGO.png";

const styles = (theme) => ({
  marginAutoItem: {},
  AppBar: {
    background: "#1F1F1F",
    height: "70px",
  },
  Toolbar: {
    height: "70px",
  },
  stylingGird: {
    alignItems: "center",
  },
  img: {
    Align: "center",
  },
  Typography: {
    align: "right",
  },
  Button: {
    height: "30px",
    width: "100px",
    margin:"10px"
  },
  Box: {
    margin: "10px",
  },
});

class nav extends Component {
  render() {
    const { classes } = this.props;
    // className={classes.AppBar}
    return (
      <>
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
              <Button variant="contained" className={classes.Button}>
                Register
              </Button>

              <Button
                variant="contained"
                color="secondary"
                className={classes.Button}
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
