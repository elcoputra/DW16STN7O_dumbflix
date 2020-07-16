import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, TextField, Grid, Button, MenuItem, TextareaAutosize } from '@material-ui/core';
import { AttachFile, Add } from '@material-ui/icons';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getCategories } from '../redux/actions/categories_action';
import { addDataMovie } from '../redux/actions/movie_action';

class addFilm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      uploadFilm: {},
      uploadEpisodes: [{ title: '', linkEpisode: '', thumbnailEpisode: '', movieId: 0 }],
      open: false,
    };
  }
  componentDidMount() {
    this.props.getCategories();
    // const { categories } = this.props.categoriesReducer;
    // this.setState({
    //   uploadFilm: {
    //     categoryId: categories[0].id,
    //   },
    // });
    // console.log(this.state.uploadFilm.categoryId);
  }

  handleChangeFilmInputGroup = (event) => {
    const { uploadFilm } = this.state;
    this.setState({
      uploadFilm: { ...uploadFilm, [event.target.name]: event.target.value },
    });
  };
  handleCloseModalAttatch = () => {
    this.setState({
      open: false,
    });
  };
  handleButtonAttatch = () => {
    this.setState({
      open: true,
    });
  };
  handleButtonConfirmAttatch = () => {
    console.log(this.state.upload);
    this.setState({
      open: false,
    });
  };

  // REUSABLE ADD EPISODE COMPONENT

  uiAddEpisode() {
    const { classes } = this.props;
    return this.state.uploadEpisodes.map((el, i) => (
      <div style={{ display: 'flex', width: 1146, alignItems: 'center', justifyContent: 'center' }} key={i}>
        <Grid container spacing={1} direction='column' justify='center' alignItems='center'>
          <Grid item>
            <Grid container style={{ width: 1146 }} direction='row' justify='space-between' alignItems='center'>
              <Grid item xs>
                <TextField
                  id='standard-name'
                  label='Title Episode'
                  name='title'
                  value={el.title || ''}
                  onChange={this.handleChange.bind(this, i)}
                  className={classes.textField}
                  variant='outlined'
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id='standard-name'
                  label='Link Thumbnail Episode'
                  name='thumbnailEpisode'
                  value={el.thumbnailEpisode || ''}
                  onChange={this.handleChange.bind(this, i)}
                  className={classes.textFieldInsertLinkThumbnailEpisode}
                  variant='outlined'
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <TextField
              id='standard-name'
              label='Link Episode'
              name='linkEpisode'
              value={el.linkEpisode || ''}
              onChange={this.handleChange.bind(this, i)}
              className={classes.textField2}
              variant='outlined'
            />
          </Grid>
        </Grid>
      </div>
    ));
  }

  handleChange(i, e) {
    const { name, value } = e.target;
    let uploadEpisodes = [...this.state.uploadEpisodes];
    uploadEpisodes[i] = { ...uploadEpisodes[i], [name]: value };
    this.setState({ uploadEpisodes });
  }
  addClick() {
    this.setState((prevState) => ({
      uploadEpisodes: [...prevState.uploadEpisodes, { title: '', linkEpisode: '', thumbnailEpisode: '', movieId: 0 }],
    }));
  }
  handleSubmit = () => {
    const { uploadFilm, uploadEpisodes } = this.state;
    this.props.addDataMovie(uploadFilm, uploadEpisodes);
  };

  // REUSABLE ADD EPISODE COMPONENT END

  render(props) {
    const { classes } = this.props;
    const { categories, loading } = this.props.categoriesReducer;
    return (
      <div className={classes.divRoot}>
        <Grid container spacing={1} direction='column' justify='center' alignItems='center'>
          <Grid item xs>
            <Grid container spacing={1} direction='row' justify='flex-start' alignItems='center'>
              <Grid item xs>
                <TextField
                  id='standard-name'
                  label='Title'
                  name='title'
                  value={this.state.uploadFilm.title}
                  onChange={this.handleChangeFilmInputGroup}
                  className={classes.textField}
                  variant='outlined'
                />
              </Grid>
              <Grid item xs>
                <Button variant='contained' onClick={this.handleButtonAttatch} className={classes.ButtonAttatch}>
                  <Grid container direction='row' justify='space-between' alignItems='center'>
                    <Grid item xs={9}>
                      <b className={classes.attatchText}>Attatch Thumbnail</b>
                    </Grid>
                    <Grid className={classes.attatchIcon} item xs>
                      <AttachFile className={classes.icon} />
                    </Grid>
                  </Grid>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <TextField
              id='standard-name'
              label='Year'
              name='year'
              value={this.state.uploadFilm.year}
              onChange={this.handleChangeFilmInputGroup}
              type='number'
              className={classes.textField2}
              variant='outlined'
            />
          </Grid>
          <Grid item xs>
            {loading ? (
              'Loading....'
            ) : (
              // <FormControl variant='outlined' className={classes.formControl}>
              //   <InputLabel className={classes.InputLabel} id='demo-simple-select-outlined-label'>
              //     Category
              //   </InputLabel>
              //   <Select
              //     labelId='demo-simple-select-outlined-label'
              //     id='demo-simple-select-outlined'
              //     name='categoryId'
              //     label='Category'
              //     value={this.state.uploadFilm.categoryId}
              //     onChange={this.handleChangeFilmInputGroup}
              //     className={classes.select}
              //     inputProps={{
              //       classes: {
              //         icon: classes.icon,
              //       },
              //     }}
              //     MenuProps={{ classes: { paper: classes.dropdownStyle } }}
              //   >
              //     {loading
              //       ? 'FETCHING...'
              //       : categories.map((detailCategory) => {
              //           return <MenuItem value={detailCategory.id}>{detailCategory.name}</MenuItem>;
              //         })}
              //   </Select>
              // </FormControl>

              <TextField
                select
                label='Select'
                name='categoryId'
                className={classes.formControl}
                value={loading ? 'Loading...' : this.state.uploadFilm.categoryId}
                onChange={this.handleChangeFilmInputGroup}
                helperText='Please select movie category'
                variant='outlined'
              >
                {categories.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          </Grid>
          <Grid item xs>
            {/* <TextareaAutosize
              className={classes.textField2}
              aria-label='minimum height'
              rowsMin={10}
              name='description'
              value={this.state.uploadFilm.description}
              onChange={this.handleChangeFilmInputGroup}
              placeholder='Description'
            /> */}

            <TextField
              multiline
              label='Description'
              name='description'
              value={this.state.uploadFilm.description}
              onChange={this.handleChangeFilmInputGroup}
              type='number'
              rows={4}
              className={classes.textFieldMultiline}
              variant='outlined'
            />
          </Grid>
          {/* TI SINI TEMPAT RUSABLE DI SIMPEN */}
          {this.uiAddEpisode()}
          <Grid item xs>
            <Button variant='contained' onClick={this.addClick.bind(this)} className={classes.ButtonAddForm}>
              <Add className={classes.iconAddForm} />
            </Button>
          </Grid>
          <Grid item xs>
            <Grid container>
              <Grid item xs={11}></Grid>
              <Grid item xs={1}>
                <Button variant='contained' onClick={this.handleSubmit} className={classes.ButtonSave}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* MODAL ADD ATTACHMENT STRING */}
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          className={classes.modal}
          open={this.state.open}
          onClose={this.handleCloseModalAttatch}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.open}>
            <div className={classes.paper}>
              {/* INPUT */}
              <b className={classes.fontModalTitle}>Input thumbnail</b>
              <br />
              <br />
              <TextField
                id='standard-name'
                label='Thumbnail Film'
                name='thumbnail'
                value={this.state.uploadFilm.thumbnail}
                onChange={this.handleChangeFilmInputGroup}
                className={classes.textField}
                variant='outlined'
              />
              <br />
              <TextField
                id='standard-name'
                label='Thumbnail Trailer'
                name='thumbnailTrailer'
                value={this.state.uploadFilm.thumbnailTrailer}
                onChange={this.handleChangeFilmInputGroup}
                className={classes.textField}
                variant='outlined'
              />
              <Grid item xs>
                <Button variant='contained' onClick={this.handleButtonConfirmAttatch} className={classes.Kirim}>
                  <div>Attatch</div>
                </Button>
              </Grid>
            </div>
          </Fade>
        </Modal>
        {/* MODAL ADD ATTACHMENT STRING END*/}
      </div>
    );
  }
}

const styles = (theme) => ({
  divRoot: {
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
    paddingTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Styling Dropdown
  formControl: {
    width: 1146,
    borderRadius: 5,
    backgroundColor: '#353535',
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
  // Not Used
  // dropdownStyle: {
  //   border: '2px solid white',
  //   borderRadius: '5%',
  //   backgroundColor: '#353535',
  //   fontColor: 'white',
  //   color: 'white',
  //   laberColor: 'white',
  // },
  // select: {
  //   '&:before': {
  //     borderColor: 'white',
  //     labelColor: 'white',
  //     fontColor: 'white',
  //   },
  //   '&:after': {
  //     borderColor: 'white',
  //     labelColor: 'white',
  //     fontColor: 'white',
  //   },
  // },
  // iconDropdown: {
  //   fill: 'white',
  // },
  // End Styling Dropdown

  // divGrid: {
  //   width: 1150,
  //   height: 2222,
  // },
  // selectEmpty: {
  //   marginTop: theme.spacing(2),
  //   color: 'white',
  //   fontColor: 'white',
  // },
  // divider: {
  //   height: 50,
  // },
  // divWarping: {
  //   backgroundColor: 'green',
  //   color: 'white',
  // },
  textField: {
    background: 'rgba(210, 210, 210, 0.25)',
    borderRadius: 5,
    width: 927,
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
  textFieldInsertLinkThumbnailEpisode: {
    background: 'rgba(210, 210, 210, 0.25)',
    borderRadius: 5,
    marginLeft: 8,
    width: 211,
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
  textField3: {
    background: 'rgba(210, 210, 210, 0.25)',
    width: 927,
    borderRadius: 5,
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
  textField2: {
    background: 'rgba(210, 210, 210, 0.25)',
    width: 1146,
    borderRadius: 5,
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
  textFieldMultiline: {
    background: 'rgba(210, 210, 210, 0.25)',
    width: 1146,
    borderRadius: 5,
    marginBottom: 10,
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
  cssLabel: {
    color: '#B1B1B1',
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `red !important`,
      color: `white !important`,
    },
  },

  cssFocused: {
    color: 'white',
    textColor: 'white',
  },

  notchedOutline: {
    borderWidth: '2px',
    borderColor: 'white !important',
  },
  floatingLabelFocusStyle: {
    color: 'white',
  },
  ButtonAttatch: {
    textTransform: 'none',
    height: 55,
    width: 213,
    fontSize: '14px',
    background: 'rgba(210, 210, 210, 0.25)',
    color: '#B1B1B1',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 2,
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: '#E50914',
      color: 'white',
    },
  },
  ButtonAddForm: {
    textTransform: 'none',
    marginTop: 13,
    height: 30,
    width: 1146,
    fontSize: '14px',
    background: 'rgba(210, 210, 210, 0.25)',
    color: 'red',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 2,
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: '#E50914',
      color: 'white',
    },
  },
  ButtonSave: {
    textTransform: 'none',
    marginTop: 34,
    marginLeft: 208,
    height: 40,
    width: 200,
    fontSize: '14px',
    background: 'red',
    color: 'white',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 2,
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: '#rgba(210, 210, 210, 0.25)',
      color: 'red',
    },
  },
  attatchText: {},
  attatchIcon: {
    paddingLeft: 4,
    paddingTop: 11,
  },
  icon: {
    fontSize: 40,
  },
  iconAddForm: {
    fontSize: 40,
  },
  TextareaAutosize: {
    marginTop: 5,
    marginBottom: 30,
    width: 1145,
    color: 'white',
    borderRadius: 5,
    backgroundColor: '#353535',
  },
  InputLabel: {
    color: 'white',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#1f1f1f',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  fontModalTitle: {
    color: 'white',
    fontSize: 24,
  },
  Kirim: {
    textTransform: 'none',
    marginTop: 65,
    height: 40,
    width: 350,
    fontSize: '18px',
    background: '#E50914',
    color: 'white',
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: 'white',
      color: '#E50914',
    },
  },
  cheatMargin: {
    width: 218,
  },
});

const mapStateToProps = (state) => {
  return {
    categoriesReducer: state.categoriesReducer,
    addMovieReducer: state.addMovieReducer,
    episodeAddReducer: state.episodeAddReducer,
  };
};

export default compose(withStyles(styles), connect(mapStateToProps, { getCategories, addDataMovie }))(addFilm);
