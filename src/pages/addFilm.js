import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Grid, Button, FormControl, InputLabel, Select, MenuItem, TextareaAutosize } from "@material-ui/core";
import { AttachFile, Add } from "@material-ui/icons";

const styles = (theme) => ({
  // Styling Dropdown
  root: {
    fontColor: "white",
    color: "white",
    labelColor: "white",
  },
  formControl: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 5,
    height: 50,
    width: 1150,
    border: "2px solid white",
    fontColor: "white",
    color: "white",
    backgroundColor: "rgba(210, 210, 210, 0.25)",
    laberColor: "white",
    borderRadius: 5,
  },
  dropdownStyle: {
    border: "2px solid white",
    borderRadius: "5%",
    backgroundColor: "#353535",
    fontColor: "white",
    color: "white",
    laberColor: "white",
  },
  select: {
    "&:before": {
      borderColor: "white",
      labelColor: "white",
      fontColor: "white",
    },
    "&:after": {
      borderColor: "white",
      labelColor: "white",
      fontColor: "white",
    },
  },
  iconDropdown: {
    fill: "white",
  },
  // End Styling Dropdown

  divGrid: {
    width: 1150,
    height: 2222,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    color: "white",
    fontColor: "white",
  },
  divider: {
    height: 50,
  },
  divWarping: {
    backgroundColor: "green",
    color: "white",
  },
  textField: {
    background: "rgba(210, 210, 210, 0.25)",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 927,
    height: 50,
  },
  textField3: {
    background: "rgba(210, 210, 210, 0.25)",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 927,
    height: 50,
  },
  textField2: {
    background: "rgba(210, 210, 210, 0.25)",
    width: 1150,
    height: 50,
    marginLeft: 10,
  },
  cssLabel: {
    color: "#B1B1B1",
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `red !important`,
      color: `white !important`,
    },
  },

  cssFocused: {
    color: "white",
    textColor: "white",
  },

  notchedOutline: {
    borderWidth: "2px",
    borderColor: "white !important",
  },
  floatingLabelFocusStyle: {
    color: "white",
  },
  ButtonAttatch: {
    textTransform: "none",
    marginTop: 13,
    height: 55,
    width: 213,
    fontSize: "14px",
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
  ButtonAddForm: {
    textTransform: "none",
    marginTop: 13,
    marginLeft: 9,
    height: 30,
    width: 1150,
    fontSize: "14px",
    background: "rgba(210, 210, 210, 0.25)",
    color: "red",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 2,
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#E50914",
      color: "white",
    },
  },
  ButtonSave: {
    textTransform: "none",
    marginTop: 34,
    marginLeft: 208,
    height: 40,
    width: 200,
    fontSize: "14px",
    background: "red",
    color: "white",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 2,
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#rgba(210, 210, 210, 0.25)",
      color: "red",
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
    marginLeft: 1,
    marginBottom: 30,
    width: 1145,
    color: "white",
    borderRadius: 5,
    backgroundColor: "#353535",
  },
  InputLabel:
  {
    color:"white"
  }
});

class addFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmCategory: "",
    };
  }

  handleChange = (event) => {
    var dropdown = event.target.filmCategory
    console.log(dropdown)
    this.setState({
      filmCategory: dropdown,
    });
  };

  render(props) {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.divider} />
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs>
            <div>Add Film</div>
          </Grid>
          <Grid item xs>
            <Grid container direction="row" justify="flex-start" alignItems="center">
              <Grid item xs>
                <TextField
                  id="standard-name"
                  label="Title"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                      FormHelperTextProps: classes.floatingLabelFocusStyle,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                      FormHelperTextProps: classes.floatingLabelFocusStyle,
                    },
                    inputMode: "numeric",
                  }}
                />
              </Grid>
              <Grid item xs>
                <Button variant="contained" className={classes.ButtonAttatch}>
                  <Grid container direction="row" justify="space-between" alignItems="center">
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
              id="standard-name"
              label="Year"
              className={classes.textField2}
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
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel className={classes.InputLabel} id="demo-simple-select-outlined-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.filmCategory}
                onChange={this.handleChange.bind(this)}
                label="Category"
                className={classes.select}
                inputProps={{
                  classes: {
                    icon: classes.icon,
                  },
                }}
                MenuProps={{ classes: { paper: classes.dropdownStyle } }}>
                <MenuItem value={this.state.filmCategory} key={this.state.filmCategory}>
                  {this.state.filmCategory}
                </MenuItem>
                <MenuItem value='Action'>Action</MenuItem>
                <MenuItem value="Drama">Drama</MenuItem>
                <MenuItem value="Commedy">Commedy</MenuItem>
                <MenuItem value="Romance">Romance</MenuItem>
                <MenuItem value="Fight">Fight</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs>
            <TextareaAutosize className={classes.TextareaAutosize} aria-label="minimum height" rowsMin={10} placeholder="Description" />
          </Grid>
          <Grid item xs>
            <Grid container direction="row" justify="flex-start" alignItems="center">
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
                  <Grid container direction="row" justify="space-between" alignItems="center">
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
              id="standard-name"
              label="Link Episode"
              className={classes.textField2}
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
            <Button variant="contained" className={classes.ButtonAddForm}>
              <Add className={classes.iconAddForm} />
            </Button>
          </Grid>
          <Grid item xs>
            <Grid container>
              <Grid item xs={11}></Grid>
              <Grid item xs={1}>
                <Button variant="contained" className={classes.ButtonSave}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(addFilm);
