import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button, FormControl, InputLabel, Select } from "@material-ui/core";
import {Link} from 'react-router-dom'
import ListMovie from "../components/movie";
import ListTv from "../components/tv";

const styles = (theme) => ({
  divider: {
    height: 100,
  },
  title: {
    fontSize: 36,
    color: "white",
  },
  dropDown: {
    backgroundColor: "green",
  },
  formControl: {
    marginTop: 15,
    height: 50,
    width: 123,
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
  ButtonAddFilm: {
    textTransform: "none",
    marginTop: 34,
    marginLeft: 500,
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
  warperTitle: {
    marginLeft: 50,
    marginRight: 50,
  },
  Link: {
    textDecoration: "none",
    color: "transparent",
  },
});

class listFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmCategory: "",
    };
  }

  handleChange = (event) => {
    var dropdown = event.target.filmCategory;
    console.log(dropdown);
    this.setState({
      filmCategory: dropdown,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.divider} />
        <div className={classes.warperTitle}>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={2}>
              <b className={classes.title}>List Film</b>
            </Grid>
            <Grid item xs>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel className={classes.InputLabel} htmlFor="filled-age-native-simple">
                  Category
                </InputLabel>
                <Select
                  native
                  value={this.state.filmCategory}
                  onChange={this.handleChange.bind(this)}
                  className={classes.select}
                  inputProps={{
                    classes: {
                      icon: classes.icon,
                    },
                  }}>
                  <option aria-label="None" value="" />
                  <option value="Action">Action</option>
                  <option value="Drama">Drama</option>
                  <option value="Commedy">Commedy</option>
                  <option value="Romance">Romance</option>
                  <option value="Fight">Fight</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs>
              <Link className={classes.Link} to="/AddFilm">
                <Button variant="contained" className={classes.ButtonAddFilm}>
                  Add Film
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
        <ListMovie />
        <ListTv />
      </div>
    );
  }
}
export default withStyles(styles)(listFilm);
