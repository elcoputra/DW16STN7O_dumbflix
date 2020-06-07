import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade, Box, Grid, TextField, Button } from "@material-ui/core";
import { AttachFile } from "@material-ui/icons";

const styles = (theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
  },
  Box: {
    backgroundColor: "#353535",
    opacity: "100%",
    // height: "408px",
    borderRadius: "10px",

    paddingTop: "30px",
    paddingBottom: "30px",
    paddingLeft: "25px",
    paddingRight: "25px",
  },
  Title: {
    color: "#FFFFFF",
    fontSize: "36px",
  },
  GridInput: {
    color: "#B1B1B1",
  },
  textField: {
    background: "rgba(210, 210, 210, 0.25)",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 350,
  },
  textFieldLinkFilm: {
    background: "rgba(210, 210, 210, 0.25)",
    marginLeft:5,
    width: 425,
  },

  cssLabel: {
    color: "#B1B1B1",
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `red !important`,
    },
  },

  cssFocused: {
    color: "white",
  },

  notchedOutline: {
    borderWidth: "2px",
    borderColor: "white !important",
  },
  ButtonAdd: {
    height: "50px",
    width: "150px",
    marginLeft:200,
    fontSize: "18pxx",
    background: "#E50914",
    marginTop: "10px",
    color: "white",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#870303",
    },
  },
  GridClickHere: {
    marginTop: "50px",
  },
  LinkCliclHere: {
    color: "red",
  },
  ButtonAttatch: {
    textTransform: "none",
    fontSize: 15,
    marginTop:5,
    height:53,
    background: "rgba(210, 210, 210, 0.25)",
    color: "#B1B1B1",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 2,
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#E50914",
      color: "white",
    },
  },
});

class modalAddEpisode extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
    };
    this.handleOpenAddEpisode = this.handleOpenAddEpisode.bind(this);
    this.handleCloseAddEpisode = this.handleCloseAddEpisode.bind(this);
  }

  handleOpenAddEpisode() {
    this.setState({ open: true });
  }

  handleCloseAddEpisode() {
    this.setState({ open: false });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Modal
          className={classes.modal}
          open={this.state.open}
          onClose={this.handleCloseAddEpisode}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}>
          <Fade in={this.state.open}>
            <Box className={classes.Box}>
              <b className={classes.Title}>Add Episode</b>
              <Grid className={classes.GridInput} container direction="column" justify="center" alignItems="center">
                <Grid item xs={12}>
                  <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs>
                    <TextField
                      id="standard-name"
                      label="Title Episode"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
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
                        inputMode: "numeric",
                      }}
                    />
                    </Grid>
                    <Grid item xs>
                    <Button variant="contained" className={classes.ButtonAttatch}>
                      <AttachFile className={classes.icon} />
                    </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-name"
                    label="Link Film"
                    className={classes.textFieldLinkFilm}
                    margin="normal"
                    variant="outlined"
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
                      inputMode: "numeric",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" className={classes.ButtonAdd}>
                    ADD
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(modalAddEpisode);
