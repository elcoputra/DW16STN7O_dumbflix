import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, TextField, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ListMovie from '../components/movie';
import ListTv from '../components/tv';

const styles = (theme) => ({
  divider: {
    height: 100,
  },
  title: {
    fontSize: 36,
    color: 'white',
  },
  dropDown: {
    backgroundColor: 'green',
  },
  formControl: {
    marginTop: 15,
    width: 123,
    fontColor: 'white',
    color: 'white',
    backgroundColor: 'rgba(210, 210, 210, 0.25)',
    laberColor: 'white',
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
  dropdownStyle: {
    border: '2px solid white',
    borderRadius: '5%',
    backgroundColor: '#353535',
    fontColor: 'white',
    color: 'white',
    laberColor: 'white',
  },
  select: {
    '&:before': {
      borderColor: 'white',
      labelColor: 'white',
      fontColor: 'white',
    },
    '&:after': {
      borderColor: 'white',
      labelColor: 'white',
      fontColor: 'white',
    },
  },
  iconDropdown: {
    fill: 'white',
  },
  ButtonAddFilm: {
    textTransform: 'none',
    marginTop: 34,
    marginLeft: 500,
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
  warperTitle: {
    marginLeft: 50,
    marginRight: 50,
  },
  Link: {
    textDecoration: 'none',
    color: 'transparent',
  },
});

class listFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { filmCategory: 1 },
    };
  }

  handleChange = (event) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [event.target.name]: event.target.value },
    });
    console.log(data);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.divider} />
        <div className={classes.warperTitle}>
          <Grid container direction='row' justify='space-between' alignItems='center'>
            <Grid item xs={2}>
              <b className={classes.title}>List Film</b>
            </Grid>
            <Grid item xs>
              {/* <FormControl variant='filled' className={classes.formControl}>
                <InputLabel className={classes.InputLabel} htmlFor='filled-age-native-simple'>
                  Category
                </InputLabel>
                <Select
                  native
                  value={this.state.data.filmCategory}
                  name='filmCategory'
                  onChange={this.handleChange.bind(this)}
                  className={classes.select}
                  inputProps={{
                    classes: {
                      icon: classes.icon,
                    },
                  }}
                >
                  <option value={1}>TV Series</option>
                  <option value={2}>Movies</option>
                </Select>
              </FormControl> */}

              <TextField
                select
                label='Select'
                className={classes.formControl}
                value={this.state.data.filmCategory}
                name='filmCategory'
                onChange={this.handleChange.bind(this)}
                variant='outlined'
              >
                <MenuItem value={1}>TV Series</MenuItem>
                <MenuItem value={2}>Movies</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs>
              <Link className={classes.Link} to='/add-movie'>
                <Button variant='contained' className={classes.ButtonAddFilm}>
                  Add Film
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
        {this.state.data.filmCategory === 1 ? <ListTv /> : <ListMovie />}
      </div>
    );
  }
}
export default withStyles(styles)(listFilm);
