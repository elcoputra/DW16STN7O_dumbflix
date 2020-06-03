import React, { Component } from "react";
import { AppBar, Box, Toolbar, Link, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import LOGO from "../img/LOGO.png";

const styles = {
  marginAutoItem: {},
  AppBar: {
    background: "#1F1F1F",
    height: "70px",
  },
  Toolbar: {
    minHeight: "70px",
  },
  buttonCustom: {
    Color: "white",
  },
};

class nav extends Component {
  render() {
    return (
      <Box component="nav">
        <AppBar className={this.props.classes.AppBar}>
          <Toolbar className={this.props.classes.Toolbar}>
            <Grid container spacing={3}>
              <Grid
                item
                xs
                direction="row"
                justify="center"
                alignItems="center"
                className={this.props.classes.marginAutoItem}
              >
                <Button className={this.props.classes.buttonCustom}>
                  Default
                </Button>
              </Grid>
              <Grid item xs className={this.props.classes.marginAutoItem}>
                <img src={LOGO} alt="LOGO" />
              </Grid>
              <Grid
                item
                xs
                className={this.props.classes.marginAutoItem}
              ></Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
export default withStyles(styles)(nav);
