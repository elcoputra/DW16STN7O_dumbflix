import React, { Component } from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Box, Grid, TextField, Button } from '@material-ui/core';
import { AttachFile } from '@material-ui/icons';

// Redux
import { compose } from 'recompose';
import { connect } from 'react-redux';

// redux
import { closeModalUpdateEpisode } from '../redux/actions/modal_actions';
import { updateEpisodeAction, getDataEpisodes } from '../redux/actions/episode_action';

class updateEpisodeModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      id: 0,
      upload: {},
      prevIndex: {},
    };
  }

  // updateEpisodeAction

  componentDidMount = async () => {};

  handleInputChange = (event) => {
    const { upload } = this.state;
    this.setState({
      upload: { ...upload, [event.target.name]: event.target.value },
    });
  };

  handleButtonConfirmAttatch = () => {
    this.setState({
      open: false,
    });
  };
  handleButtonAttatch = () => {
    this.setState({
      open: true,
    });
  };
  handleCloseModalAttatch = () => {
    this.setState({
      open: false,
    });
  };

  handleButtonKirim = async () => {
    const { upload, id } = this.state;
    await this.props.updateEpisodeAction(id, upload);
    await this.props.getDataEpisodes(upload.movieId);
    this.props.closeModalUpdateEpisode();
  };

  render() {
    const { classes } = this.props;
    const { updateEpisodeModalOpen } = this.props.modalUpdateEpisodeReducer;

    const { dataEpisode } = this.props.episodeReducer;
    const { index } = this.props.modalUpdateEpisodeReducer;
    if (index !== this.state.prevIndex) {
      this.setState({
        prevIndex: index,
        id: dataEpisode[index].id,
        upload: {
          movieId: dataEpisode[index].movieId,
          title: dataEpisode[index].title,
          linkEpisode: dataEpisode[index].linkEpisode,
          thumbnailEpisode: dataEpisode[index].thumbnailEpisode,
        },
      });
    }

    return (
      <div>
        <Modal
          className={classes.modal}
          open={updateEpisodeModalOpen}
          onClose={this.props.closeModalUpdateEpisode}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={updateEpisodeModalOpen}>
            <Box className={classes.Box}>
              <b className={classes.Title}>Update Episode</b>
              <Grid className={classes.GridInput} container direction='column' justify='center' alignItems='center'>
                <Grid item xs={12}>
                  <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid item xs>
                      <TextField
                        id='standard-name'
                        label='Title Episode'
                        name='title'
                        value={this.state.upload.title}
                        onChange={this.handleInputChange}
                        className={classes.textField}
                        margin='normal'
                        variant='outlined'
                        InputLabelProps={{
                          classes: {
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                          },
                        }}
                        InputProps={{
                          classes: {
                            root: classes.cssOutlinedInput,
                            focused: classes.cssFocused,
                            notchedOutline: classes.notchedOutline,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs>
                      <Button variant='contained' onClick={this.handleButtonAttatch} className={classes.ButtonAttatch}>
                        <AttachFile className={classes.icon} />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id='standard-name'
                    label='Link Episode'
                    name='linkEpisode'
                    value={this.state.upload.linkEpisode}
                    onChange={this.handleInputChange}
                    className={classes.textFieldLinkFilm}
                    margin='normal'
                    variant='outlined'
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant='contained' onClick={this.handleButtonKirim} className={classes.ButtonAdd}>
                    Update
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Modal>
        {/* MODAL ATTATCH THUMBNAIL EPISODE */}
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          className={classes.modal2}
          open={this.state.open}
          onClose={this.handleCloseModalAttatch}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.open}>
            <div className={classes.paper2}>
              {/* INPUT */}
              <b className={classes.fontModalTitle2}>Link Thumbnail Episode</b>
              <br />
              <br />
              <TextField
                id='standard-name'
                label='Thumbnail Link'
                name='thumbnailEpisode'
                value={this.state.upload.thumbnailEpisode}
                onChange={this.handleInputChange}
                className={classes.textField}
                margin='normal'
                variant='outlined'
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              <Grid item xs>
                <Button variant='contained' onClick={this.handleCloseModalAttatch} className={classes.Kirim}>
                  <div>Attatch</div>
                </Button>
              </Grid>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}

const styles = (theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  },
  modal2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box: {
    backgroundColor: '#353535',
    opacity: '100%',
    // height: "408px",
    borderRadius: '10px',

    paddingTop: '30px',
    paddingBottom: '30px',
    paddingLeft: '25px',
    paddingRight: '25px',
  },
  Title: {
    color: '#FFFFFF',
    fontSize: '36px',
  },
  GridInput: {
    color: '#B1B1B1',
  },
  textField: {
    background: 'rgba(210, 210, 210, 0.25)',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 350,
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
  textFieldLinkFilm: {
    background: 'rgba(210, 210, 210, 0.25)',
    marginLeft: 5,
    width: 425,
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
    },
  },

  cssFocused: {
    color: 'white',
  },

  notchedOutline: {
    borderWidth: '2px',
    borderColor: 'white !important',
  },
  ButtonAdd: {
    height: '50px',
    width: '150px',
    marginLeft: 200,
    fontSize: '18pxx',
    background: '#E50914',
    marginTop: '10px',
    color: 'white',
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: '#870303',
    },
  },
  GridClickHere: {
    marginTop: '50px',
  },
  LinkCliclHere: {
    color: 'red',
  },
  ButtonAttatch: {
    textTransform: 'none',
    fontSize: 15,
    marginTop: 5,
    height: 53,
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
  paper2: {
    backgroundColor: '#1f1f1f',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  fontModalTitle2: {
    color: 'white',
    fontSize: 24,
  },
});

const mapStateToProps = (state) => {
  return {
    modalUpdateEpisodeReducer: state.modalUpdateEpisodeReducer,
    episodeReducer: state.episodeReducer,
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { closeModalUpdateEpisode, updateEpisodeAction, getDataEpisodes }),
)(updateEpisodeModal);

//     "movieId": 2,
//     "title": "test add episode1",
//     "linkEpisode": "https://www49.uptostream.com/25124oo4fc8/720/0/video.mp4",
//     "thumbnailEpisode":""
