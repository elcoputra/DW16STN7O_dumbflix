import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import { Box, Grid, Button, Typography, IconButton } from '@material-ui/core';
import ReactPlayer from 'react-player';
import ModalAddEpisode from '../components/modalAddEpisode';
import { openModalAddEpisode } from '../redux/actions/modal_actions';
import { getDetailMovie, deleteMovieAction } from '../redux/actions/movie_action';

import { compose } from 'recompose';
import { connect } from 'react-redux';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

class detailPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberEpisode: 0,
      episodePlay: 0,
      readmore: false,
      isPlay: false,
      isAdmin: false,
      isTvShow: false,
    };
  }

  episodeIncrease = () => {
    const maxEpisode = this.props.episodeReducer.dataEpisode.length - 1;
    if (this.state.numberEpisode < maxEpisode) {
      this.setState({
        numberEpisode: this.state.numberEpisode + 1,
      });
    } else {
      this.setState({
        numberEpisode: 0,
      });
    }
  };
  episodeDecrease = () => {
    const maxEpisode = this.props.episodeReducer.dataEpisode.length - 1;
    if (this.state.numberEpisode > 0) {
      this.setState({
        numberEpisode: this.state.numberEpisode - 1,
      });
    } else {
      this.setState({
        numberEpisode: maxEpisode,
      });
    }
  };

  handleChoseEpisode = (target) => {
    this.setState({
      episodePlay: target,
      isPlay: true,
    });
  };
  render(props, data) {
    const { classes } = this.props;
    const { dataDetailMovie } = this.props.detailMovieReducer;
    const { dataEpisode, loadingEpisode } = this.props.episodeReducer;
    const { userState } = this.props.authReducer;
    const nameCategory = dataDetailMovie && dataDetailMovie.category ? dataDetailMovie.category.name : null;
    return (
      <div>
        <ModalAddEpisode />
        <Box className={classes.Box1}>
          <Grid container direction='column' justify='center' alignItems='center'>
            {loadingEpisode ? (
              'LOADING'
            ) : (
              <ReactPlayer
                height={'536px'}
                width={'1070.44px'}
                url={dataEpisode[this.state.episodePlay].linkEpisode}
                playing={this.state.isPlay}
                controls={true}
                light={dataEpisode[this.state.episodePlay].thumbnailEpisode}
              />
            )}
          </Grid>
        </Box>
        {}

        {userState.isAdmin ? (
          <div style={{ width: '93%' }}>
            <Grid container {...this.gridButtonAdmin}>
              <Grid item>
                <Button variant='contained' component={Link} to='/update' className={classes.ButtonUpdateMovie}>
                  Update Movie
                </Button>
              </Grid>
              <Grid item>
                <Button variant='contained' onClick={() => this.props.openModalAddEpisode()} className={classes.ButtonAddEpisode}>
                  Add Episode
                </Button>
              </Grid>
              <Grid item>
                <IconButton
                  onClick={() => this.props.deleteMovieAction(dataDetailMovie.id)}
                  className={classes.ButtonDelete}
                  component={Link}
                  to='/list-film'
                  aria-label='delete'
                >
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        ) : (
          <div></div>
        )}
        <Grid className={classes.GridSecond} container direction='row' justify='flex-start' alignItems='flex-start'>
          <Grid item xs>
            <img className={classes.imgCoverFilm} src={dataDetailMovie.thumbnail} alt={dataDetailMovie.title} />
          </Grid>
          <Grid item>
            <div className={classes.divTextEpisode}>
              <Grid container direction='column' justify='flex-start' alignItems='flex-start'>
                <Grid item xs>
                  <b className={classes.Title}>{dataDetailMovie.title}</b>
                </Grid>
                <Grid item>
                  <Grid
                    className={classes.yearAndType}
                    container
                    spacing='3'
                    direction='row'
                    justify='flex-start'
                    alignItems='center'
                  >
                    <Grid item xs>
                      {dataDetailMovie.year}
                    </Grid>
                    <Grid item xs={14}>
                      <Box border={1} borderRadius={4} className={classes.BorderedBox}>
                        {nameCategory}
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs className={classes.Description}>
                  <p className={classes.DescripionP}>{dataDetailMovie.description}</p>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item>
            {loadingEpisode ? (
              'Loading...'
            ) : (
              <Grid container direction='column' justify='space-between' alignItems='flex-start'>
                <Grid item xs>
                  {dataEpisode.length === 1 ? (
                    <div
                      style={{ backgroundImage: `url(${dataEpisode[this.state.numberEpisode].thumbnailEpisode})` }}
                      className={classes.divSlideEpisodeSingle}
                    >
                      <div className={classes.divSlideEpisodeSingleMask}>
                        <Typography variant='h5'>NOW PLAYING</Typography>
                      </div>
                    </div>
                  ) : dataEpisode.length > 1 ? (
                    <div
                      style={{ backgroundImage: `url(${dataEpisode[this.state.numberEpisode].thumbnailEpisode})` }}
                      className={classes.divSlideEpisode}
                    >
                      <div
                        className={
                          this.state.numberEpisode !== this.state.episodePlay
                            ? classes.divSlideEpisodeMaskClear
                            : classes.divSlideEpisodeMask
                        }
                      >
                        <Grid container {...this.gridInsideEpisodeChoser}>
                          <Grid item style={{ height: '100%' }}>
                            <Button onClick={this.episodeDecrease} className={classes.btnSelectEpisode}>
                              <ArrowBackIosOutlinedIcon style={{ fontSize: 24 }} />
                            </Button>
                          </Grid>
                          <Grid item style={{ height: '100%', width: 366 }}>
                            <Button
                              onClick={() => this.handleChoseEpisode(this.state.numberEpisode)}
                              className={classes.btnSelectEpisode}
                            >
                              {this.state.numberEpisode !== this.state.episodePlay ? (
                                <PlayCircleOutlineIcon style={{ fontSize: 120 }} />
                              ) : (
                                <Typography variant='h5'>NOW PLAYING</Typography>
                              )}
                            </Button>
                          </Grid>
                          <Grid item style={{ height: '100%' }}>
                            <Button onClick={this.episodeIncrease} className={classes.btnSelectEpisode}>
                              <ArrowForwardIosOutlinedIcon style={{ fontSize: 24 }} />
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  ) : null}
                </Grid>
                <Grid item xs>
                  <p className={classes.TextInfo}>{dataEpisode[this.state.numberEpisode].title}</p>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>

        {/* DIALOG */}
      </div>
    );
  }
  gridInsideEpisodeChoser = {
    direction: 'row',
    justify: 'flex-start',
    alignItems: 'flex-start',
  };
  gridButtonAdmin = {
    direction: 'row',
    spacing: 2,
    justify: 'flex-end',
    alignItems: 'center',
  };
}

const styles = (theme) => ({
  Box1: {
    background: '#1f1f1f',
    marginTop: '70px',
    height: '536px',
    color: 'white',
  },
  GridSecond: {
    marginTop: 20,
    paddingLeft: '100px',
    paddingRight: '100px',
  },
  imgCoverFilm: {
    borderRadius: '5px',
    maxWidth: '200px',
    minWidth: '200px',
    maxHeight: '300px',
    minHeight: '300px',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  TextInfo: {
    color: 'white',
    fontSize: '18px',
  },
  PlayerBorder: {
    borderRadius: '115px',
  },
  Title: {
    fontSize: '48px',
    color: 'white',
  },
  Description: {
    fontSize: '18px',
    color: 'white',
    textAlign: 'justify',
  },
  DescripionP: {
    height: 180,
    overflow: 'auto',
  },
  yearAndType: {
    color: '#929292',
    fontSize: '18px',
  },
  BorderedBox: {
    maxWidth: '100px',
    paddingTop: '1px',
    paddingBottom: '1px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  test: {
    background: 'transparent',
  },
  ButtonUpdateMovie: {
    textTransform: 'none',
    marginTop: 15,
    height: 40,
    width: 200,
    fontSize: '14px',
    background: '#rgba(210, 210, 210, 0.25)',
    color: 'red',
    '&:hover': {
      backgroundColor: 'rgb(109, 109, 109)',
      color: 'white',
    },
  },
  ButtonAddEpisode: {
    textTransform: 'none',
    marginTop: 15,
    height: 40,
    width: 200,
    fontSize: '14px',
    background: 'red',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgb(137, 0, 0)',
      color: 'white',
    },
  },
  ButtonDelete: {
    textTransform: 'none',
    marginTop: 15,
    fontSize: '14px',
    background: 'red',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgb(137, 0, 0)',
      color: 'white',
    },
  },
  DialogContentAddEpisodeStyle: {
    color: 'white',
    backgroundColor: '#1F1F1F',
    width: 1003,
  },
  ButtonAdd: {
    height: '50px',
    width: '350px',
    fontSize: '18pxx',
    background: '#E50914',
    marginTop: '10px',
    color: 'white',
    '&:hover': {
      backgroundColor: '#870303',
    },
  },
  // Styling kontent Modal
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
  },
  Title2: {
    color: '#FFFFFF',
    fontSize: '36px',
  },
  GridInput: {
    color: '#B1B1B1',
  },
  textField: {
    background: 'rgba(210, 210, 210, 0.25)',
    width: 350,
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
      backgroundColor: '#870303',
    },
  },
  GridClickHere: {
    marginTop: '50px',
  },
  LinkCliclHere: {
    color: 'red',
  },
  divSlideEpisode: {
    display: 'flex',
    backgroundColor: 'gray',
    width: 494,
    height: 272,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  divSlideEpisodeSingle: {
    display: 'flex',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    width: 494,
    height: 272,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  divSlideEpisodeSingleMask: {
    display: 'flex',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 494,
    height: 272,
  },
  divSlideEpisodeMask: {
    display: 'flex',
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  divSlideEpisodeMaskClear: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  divTextEpisode: { width: 632, paddingLeft: 45, paddingRight: 45 },
  btnSelectEpisode: {
    height: '100%',
    width: '100%',
    color: 'white',
    backgroundColor: 'transparent',
    '&:hover': {
      color: '#db202c',
    },
  },
});

const mapStateToProps = (state) => {
  return {
    detailMovieReducer: state.detailMovieReducer,
    episodeReducer: state.episodeReducer,
    authReducer: state.authReducer,
    deleteMovieReducer: state.deleteMovieReducer,
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { getDetailMovie, openModalAddEpisode, deleteMovieAction }),
)(detailPlayer);
