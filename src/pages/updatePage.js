import React, { Component } from 'react';
import { Grid, Typography, TextField, MenuItem, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { compose } from 'recompose';
import { connect } from 'react-redux';

import { getCategories } from '../redux/actions/categories_action';

class updatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      episode: {},
      currency: 'USD',
    };
  }

  handleChange = (event) => {
    this.setState({ currency: event.target.value });
  };

  componentDidMount = async () => {
    await this.props.getCategories();
    await this.setState({
      movie: this.props.detailMovieReducer.dataDetailMovie,
    });
    console.log(this.state.movie);
  };

  render() {
    const { classes } = this.props;
    const { dataEpisode } = this.props.episodeReducer;
    const { categories, loading } = this.props.categoriesReducer;
    return (
      <div style={{ display: 'flex', maxWidth: '100vw', minHeight: '100vh', paddingTop: 70 }}>
        <Grid container {...this.gridConf.gridColumnRoot} className={classes.gridRootStyle}>
          <Grid item>
            <Typography className={classes.titleUpdate}>Update</Typography>
          </Grid>
          <Grid item>
            <Grid container {...this.gridConf.gcridRowContent}>
              <Grid item md={4} xs={12}>
                <div className={classes.divContentLeft}>
                  <Grid container {...this.gridConf.GridColumnMovie}>
                    <Grid item>
                      <Typography className={classes.titleSubUpdate}>Movie</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        label='Title'
                        value={this.state.movie.title ? this.state.movie.title : ''}
                        variant='outlined'
                        className={classes.texfieldInputMovie}
                      />
                      <TextField
                        select
                        label='Select'
                        className={classes.texfieldInputMovie}
                        value={!loading && this.state.movie.categoryId ? this.state.movie.categoryId : 'Loading....'}
                        onChange={this.handleChange}
                        helperText='Please select movie category'
                        variant='outlined'
                      >
                        {categories.map((option) => (
                          <MenuItem key={option.id} value={option.id}>
                            {option.name}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        label='Year'
                        variant='outlined'
                        value={this.state.movie.year ? this.state.movie.year : ''}
                        className={classes.texfieldInputMovie}
                      />
                      <TextField
                        className={classes.texfieldInputMovie}
                        label='Description'
                        value={this.state.movie.description ? this.state.movie.description : ''}
                        multiline
                        rows={4}
                        variant='outlined'
                      />
                      <TextField
                        className={classes.texfieldInputMovie}
                        label='Link Thumbnail'
                        value={this.state.movie.thumbnailTrailer ? this.state.movie.thumbnailTrailer : ''}
                        multiline
                        rows={2}
                        variant='outlined'
                      />
                    </Grid>
                  </Grid>
                  <div className={classes.containerBtnUpdate}>
                    <Button className={classes.ButtonUpdateMovie}>Update Movie</Button>
                  </div>
                </div>
              </Grid>
              <Grid item md={8} xs={12}>
                <div className={classes.divContentRight}>
                  <Grid container {...this.gridConf.gridTitleSectionEpisode}>
                    <Grid item>
                      <Typography className={classes.titleSubUpdate}>Episodes</Typography>
                    </Grid>
                    <Grid item>
                      <Button className={classes.buttonAddEpisode}>Add Episode</Button>
                    </Grid>
                  </Grid>

                  <div className={classes.divCardContentRight}>
                    <Grid container {...this.gridConf.GridRowEpisode}>
                      {dataEpisode.map((data) => {
                        return (
                          <Grid item xl={1} lg={2} sm={3} xs={12}>
                            <div className={classes.divEpisode}>
                              <div
                                className={classes.imgContainerCard}
                                style={{
                                  backgroundImage: `url(${data.thumbnailEpisode})`,
                                }}
                              ></div>
                              <div className={classes.warperNameEpisode}>
                                <Grid container {...this.gridConf.gridRowNameAndYear}>
                                  <Grid item xs={9}>
                                    <Typography noWrap className={classes.nameEpisode}>
                                      {data.title}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={3}>
                                    <Typography className={classes.nameEpisode}>{data.title.year}</Typography>
                                  </Grid>
                                </Grid>
                              </div>
                            </div>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
  gridConf = {
    gridColumnRoot: {
      direction: 'column',
      justify: 'flex-start',
      alignItems: 'stretch',
    },
    gcridRowContent: {
      spacing: 4,
      direction: 'row',
      justify: 'flex-start',
      alignItems: 'stretch',
    },
    GridColumnMovie: {
      direction: 'column',
      justify: 'center',
      alignItems: 'stretch',
    },
    GridRowEpisode: {
      direction: 'row',
      spacing: 1,
      justify: 'flex-start',
      alignItems: 'flex-start',
      style: { marginTop: 10 },
    },
    gridRowNameAndYear: {
      direction: 'row',
      justify: 'space-between',
      alignItems: 'center',
    },
    gridTitleSectionEpisode: {
      direction: 'row',
      spacing: 1,
      justify: 'flex-start',
      alignItems: 'center',
    },
  };
}

const styles = (theme) => ({
  gridRootStyle: {
    marginLeft: 35,
    marginRight: 35,
  },
  titleUpdate: { color: '#D2D2D2', fontSize: 48, fontWeight: 'bold' },
  titleSubUpdate: { color: '#D2D2D2', fontSize: 24, width: '100%' },
  divContentLeft: {
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    height: 580,
    backgroundColor: '#1F1F1F',
  },
  divContentRight: {
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    height: 580,
    backgroundColor: '#1F1F1F',
  },
  divCardContentRight: {
    width: '100%',
    minHeight: '90%',
  },
  //   TEXFIELD
  texfieldInputMovie: {
    marginTop: 10,
    width: '100%',
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: '#4C4C4C',
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
  //   TEXFIELD END
  containerBtnUpdate: {
    width: '100%',
    paddingBottom: 10,
    height: 91,
    alignItems: 'end',
    justifyContent: 'center',
    display: 'flex',
  },
  ButtonUpdateMovie: {
    textTransform: 'none',
    marginTop: 15,
    height: 40,
    width: 200,
    fontSize: '14px',
    background: 'red',
    color: '#d2d2d2',
    '&:hover': {
      backgroundColor: '#be1f2a',
      color: '#d2d2d2',
    },
  },
  buttonAddEpisode: {
    textTransform: 'none',
    height: 25,
    width: 140,
    fontSize: '14px',
    background: 'red',
    color: '#d2d2d2',
    '&:hover': {
      backgroundColor: '#be1f2a',
      color: '#d2d2d2',
    },
  },
  divEpisode: { width: '100%', height: 200, backgroundColor: '#4c4c4c', borderRadius: 5 },
  imgContainerCard: {
    width: '100%',
    height: '85%',
    borderRadius: 5,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundColor: '#d2d2d2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  warperNameEpisode: {
    display: 'flex',
    height: '15%',
    width: '100%',
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameEpisode: { color: '#D2D2D2', fontSize: 14 },
  yearEpisode: { color: '#D2D2D2', fontSize: 14 },
});

const mapStateToProps = (state) => {
  return {
    categoriesReducer: state.categoriesReducer,
    detailMovieReducer: state.detailMovieReducer,
    episodeReducer: state.episodeReducer,
  };
};

export default compose(withStyles(styles), connect(mapStateToProps, { getCategories }))(updatePage);
