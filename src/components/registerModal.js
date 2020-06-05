import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Modal,
  Backdrop,
  Fade,
  Box,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const styles = (theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
  },
  Box: {
    backgroundColor: "black",
    opacity: "100%",
    width: "416px",
    height: "680px",
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
  ButtonRegister: {
    height: "50px",
    width: "350px",
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
    marginTop: "25px",
  },
});

class registerModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
    };
    this.handleOpenRegister = this.handleOpenRegister.bind(this);
    this.handleCloseRegister = this.handleCloseRegister.bind(this);
  }
  handleOpenRegister() {
    this.setState({ open: true });
  }

  handleCloseRegister() {
    this.setState({ open: false });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Modal
          className={classes.modal}
          open={this.state.open}
          onClose={this.handleCloseRegister}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.open}>
            <Box className={classes.Box}>
              <b className={classes.Title}>Register</b>
              <Grid
                className={classes.GridInput}
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <TextField
                    id="standard-name"
                    label="Email"
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
                <Grid item xs={12}>
                  <TextField
                    id="standard-name"
                    label="Password"
                    type="password"
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
                      inputMode: "password",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-name"
                    label="Full Name"
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
                <Grid item xs={12}>
                  <TextField
                    id="standard-name"
                    label="Gender"
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
                <Grid item xs={12}>
                  <TextField
                    id="standard-name"
                    label="Phone"
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
                <Grid item xs={12}>
                  <TextField
                    id="standard-name"
                    label="Address"
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
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    className={classes.ButtonRegister}
                  >
                    Register
                  </Button>
                </Grid>
                <Grid item xs className={classes.GridClickHere}>
                  Already have an account ? Klik <b>Here</b>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(registerModal);
