import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import ReactPlayer from "react-player";

const styles = (theme) => ({
  Box1: {
    background: "#1f1f1f",
    marginTop: "70px",
    height: "536px",
    color: "white",
  },
  GridSecond: {
    paddingTop: "60px",
    paddingLeft: "100px",
    paddingRight: "100px",
  },
  GridCoverFilm: {},
  GridDesc: {},
  GridFilm: {},
  imgCoverFilm: {
    borderRadius: "5px",
    maxWidth: "200px",
    minWidth: "200px",
    maxHeight: "300px",
    minHeight: "300px",
    objectFit: "cover",
    objectPosition: "center",
  },
  TextInfo: {
    color: "white",
    fontSize: "18px",
  },
  PlayerBorder: {
    borderRadius: "115px",
  },
  Title: {
    fontSize: "48px",
    color: "white",
  },
  Description: {
    fontSize: "18px",
    color: "white",
    textAlign: "justify",
  },
  yearAndType:{
      color:"#929292",
      fontSize:"18px"
  },
  BorderedBox: {
    paddingTop: "1px",
    paddingBottom: "1px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
});

class detailPlayer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Box className={classes.Box1}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <ReactPlayer
              height={"536px"}
              width={"954.44px"}
              url="https://www.dailymotion.com/video/x53vcu5"
              playing
            />
          </Grid>
        </Box>
        <Grid
          spacing={3}
          className={classes.GridSecond}
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs>
            <img
              className={classes.imgCoverFilm}
              src="https://i.imgur.com/pGTKlTo.jpg"
              alt="Your Name"
            />
          </Grid>
          <Grid item xs={5}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs>
                <b className={classes.Title}>Your Name</b>
              </Grid>
              <Grid item xs>
                <Grid
                className={classes.yearAndType}
                  container
                  spacing="3"
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item xs>
                    2019
                  </Grid>
                  <Grid item xs>
                    <Box
                      border={1}
                      borderRadius={4}
                      className={classes.BorderedBox}
                    >
                      Movies
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs className={classes.Description}>
                <p>
                  “Once in a while when I wake up, I find myself crying. The
                  dream I must have had I can never recall. But the sensation
                  that I’ve lost something lingers for a long time after I wake
                  up. I’m always searching for something, for someone. This
                  feeling has possessed me I think from that day when the stars
                  came falling. It was almost as if a scene from a dream.
                  Nothing more, nothing less than a beautiful view.”
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="flex-start"
            >
              <Grid item xs>
                <ReactPlayer
                  height={"272px"}
                  width={"494px"}
                  url="https://www.dailymotion.com/video/x2fv6nr"
                  playing
                  controls={true}
                  light={true}
                />
              </Grid>
              <Grid item xs>
                <p className={classes.TextInfo}>Your Name : Movie</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(detailPlayer);
