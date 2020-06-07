// BUG Nex Play,
// Button Belum di rapihin

import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box, Grid, Button } from "@material-ui/core";
import ReactPlayer from "react-player";
import NextIcon from "../img/icon/Vector.png";

const styles = (theme) => ({
  Box1: {
    background: "#1f1f1f",
    marginTop: "70px",
    height: "536px",
    color: "white",
  },
  GridSecond: {
    marginTop:20,
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
  test: {
    background: "transparent",
  },
  ButtonAddEpisode: {
    textTransform: "none",
    marginTop: 15,
    marginLeft: 1186,
    height: 40,
    width: 200,
    fontSize: "14px",
    background: "red",
    color: "white",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#rgba(210, 210, 210, 0.25)",
      color: "red",
    },
  },
});

class detailPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEpisode: 1,
      linkEpisode: "",
      episode: {},
      id: "null",
      isMovie: false,
      linkTrailer: "null",
      thumbnail: "null",
      title: "null",
      year: "null",
      type: "null",
      description: "null",
      linkFilm: "null",
      thumbnailTrailer: "null",
      reCycleEpisode: "null",
      thumbnailFilm: "null",
      isAdmin: false,
      isTvShow: false,
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
      episode,
      linkEpisode,
      thumbnailFilm,
      isAdmin,
      isTvShow,
    } = this.props.location.state;
    this.setState((state, props) => {
      return {
        id: id,
        isMovie: isMovie,
        linkTrailer: linkTrailer,
        thumbnail: thumbnail,
        title: title,
        year: year,
        type: type,
        description: description,
        linkFilm: linkFilm,
        thumbnailTrailer: thumbnailTrailer,
        episode: episode,
        linkEpisode: linkEpisode,
        thumbnailFilm: thumbnailFilm,
        isAdmin: isAdmin,
        isTvShow: isTvShow,
      };
    });
  }

  episodeIncrease = () => {
    if (this.state.currentEpisode <= Object.keys(this.state.episode).length) {
      this.setState({
        currentEpisode: this.state.currentEpisode + 1,
      });
      this.setState({
        linkEpisode: this.state.episode[this.state.currentEpisode],
      });
    } else {
      this.setState({
        currentEpisode: 1,
      });
      this.setState({
        linkEpisode: this.state.episode[1],
      });
    }
  };
  episodeDecrease = () => {
    if (this.state.currentEpisode > 1 && Object.keys(this.state.episode).length) {
      this.setState({
        currentEpisode: this.state.currentEpisode - 1,
      });
      this.setState({
        linkEpisode: this.state.episode[this.state.currentEpisode],
      });
    }
  };

  // findID(DataSeries, target){
  //   var dataSeries = DataSeries.DataSeries;
  //   for (var i = 0; i< dataSeries.length; i++){
  //     if(dataSeries[i].id === target){
  //       return(dataSeries[i].product);
  //     }
  //   }
  // }

  render(props, data) {
    const { classes } = this.props;
    // var series = this.findID(DataSeries, this.state.id);
    console.log(this.state.isAdmin);
    console.log(this.state.isTvShow);
    return (
      <div>
        {/* {series} */}
        <Box className={classes.Box1}>
          <Grid container direction="column" justify="center" alignItems="center">
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
        {}

        {this.state.isTvShow && this.state.isAdmin ? (
          <div>
            <Button variant="contained" className={classes.ButtonAddEpisode}>
              Add Episode
            </Button>
          </div>
        ) : (
          <div></div>
        )}
        <Grid spacing={3} className={classes.GridSecond} container direction="row" justify="flex-start" alignItems="flex-start">
          <Grid item xs>
            <img className={classes.imgCoverFilm} src={this.state.thumbnail} alt={this.state.title} />
          </Grid>
          <Grid item xs={5}>
            <Grid container direction="column" justify="flex-start" alignItems="flex-start">
              <Grid item xs>
                <b className={classes.Title}>{this.state.title}</b>
              </Grid>
              <Grid item xs>
                <Grid className={classes.yearAndType} container spacing="3" direction="row" justify="flex-start" alignItems="center">
                  <Grid item xs>
                    {this.state.year}
                  </Grid>
                  <Grid item xs={14}>
                    <Box border={1} borderRadius={4} className={classes.BorderedBox}>
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
            <Grid container direction="column" justify="space-between" alignItems="flex-start">
              <Grid item xs>
                {this.state.isMovie ? (
                  <ReactPlayer
                    height={"272px"}
                    width={"494px"}
                    url={this.state.linkFilm}
                    playing
                    controls={true}
                    light={this.state.thumbnailFilm}
                  />
                ) : (
                  <ReactPlayer height={"272px"} width={"494px"} url={this.state.linkEpisode} playing controls={true} light />
                )}
              </Grid>
              <Grid item xs>
                {this.state.isMovie ? (
                  <p className={classes.TextInfo}>
                    {this.state.title} : {this.state.type}
                  </p>
                ) : (
                  <p className={classes.TextInfo}>
                    {this.state.title} : {this.state.type} - Episode {this.state.currentEpisode}{" "}
                    <Button className={classes.test} onClick={this.episodeIncrease}>
                      <img src={NextIcon} alt="" />
                    </Button>
                    {/* <Button className={classes.test} onClick={this.episodeIncrease}>NEXT</Button><Button className={classes.test} onClick={this.episodeDecrease}>PREV</Button> */}
                    {/* <Button
                    className={classes.test}
                    onClick={this.episodeIncrease}
                  >
                    <img src={NextIcon} alt="" />
                  </Button> */}
                    {/* {this.state.linkEpisode} */}
                  </p>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(detailPlayer);
