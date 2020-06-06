import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import ReactPlayer from "react-player";
import DataSeries from '../data/dataTv.json'

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
  yearAndType: {
    color: "#929292",
    fontSize: "18px",
  },
  BorderedBox: {
    maxWidth: "100px",
    paddingTop: "1px",
    paddingBottom: "1px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
});

class detailPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : "null",
      isMovie: false,
      linkTrailer: "null",
      thumbnail: "null",
      title: "null",
      year: "null",
      type: "null",
      description: "null",
      linkFilm: "null",
      thumbnailTrailer: "null",
    };
  }

  componentDidMount(props) {
    const {
      id,
      isMovie,
      linkTrailer,
      thumbnail,
      title,
      year,
      type,
      description,
      linkFilm,
      thumbnailTrailer,
    } = this.props.location.state;
    this.setState((state, props) => {
      return {
        id:id,
        isMovie:isMovie,
        linkTrailer: linkTrailer,
        thumbnail: thumbnail,
        title: title,
        year: year,
        type: type,
        description: description,
        linkFilm: linkFilm,
        thumbnailTrailer: thumbnailTrailer,
        
      };
    });
  }

  render(props) {
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
              url={this.state.linkTrailer}
              controls={true}
              light={this.state.thumbnailTrailer}
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
              src={this.state.thumbnail}
              alt={this.state.title}
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
                <b className={classes.Title}>{this.state.title}</b>
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
                    {this.state.year}
                  </Grid>
                  <Grid item xs={14}>
                    <Box
                      border={1}
                      borderRadius={4}
                      className={classes.BorderedBox}
                    >
                      {this.state.type}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs className={classes.Description}>
                <p>{this.state.description}</p>
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
                  url={this.state.linkFilm}
                  playing
                  controls={true}
                  light={true}
                />
              </Grid>
              <Grid item xs>
                <p className={classes.TextInfo}>
                  {this.state.title} : {this.state.type}
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(detailPlayer);
