import React, { Component } from 'react';

import { API } from '../config/axiosConfig';

import { withStyles } from '@material-ui/core/styles';
import { Grid, IconButton, Card, CardActionArea, Link, Typography } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

class searchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {},
      target: '',
    };
  }

  handleChangeText = async (event) => {
    this.setState({ target: event.target.value });
  };
  handleConfirmSearch = async (event) => {
    try {
      if (event.key === 'Enter') {
        this.setState({ loading: true });
        const response = await API.get('movies/search/' + this.state.target);
        this.setState({ data: response.data.data, loading: false });
        return console.log(this.state.data);
      }
    } catch (error) {}
  };

  handleButtonSearch = async () => {
    try {
      this.setState({ loading: true });
      const response = await API.get('movies/search/' + this.state.target);
      this.setState({ data: response.data.data, loading: false });
      return console.log(this.state.data);
    } catch (error) {}
  };

  render() {
    const { classes } = this.props;
    const { data, loading } = this.state;
    return (
      <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', paddingTop: 100 }}>
        <Grid spacing={4} container direction='column' justify='center' alignItems='center' style={{ width: '100%' }}>
          <Grid item xl style={{ width: '40%' }}>
            <div className={classes.warperSearchbar}>
              <div className={classes.searchRoot}>
                <Grid container direction='row' justify='flex-start' alignItems='flex-start'>
                  <Grid item className={classes.rowItemSearchInput}>
                    <input
                      value={this.state.inputSearch}
                      onKeyPress={(target) => this.handleConfirmSearch(target)}
                      onChange={(event) => this.handleChangeText(event)}
                      placeholder='Search...'
                      className={classes.searchBox}
                    />
                  </Grid>
                  <Grid item className={classes.rowItemSearchIcon}>
                    <IconButton aria-label='search' onClick={this.handleButtonSearch} className={classes.searchBtn}>
                      <SearchOutlined />
                    </IconButton>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item xl style={{ width: '90%' }}>
            {loading && data ? (
              'No Data'
            ) : (
              <Grid spacing={6} container direction='row' justify='flex-start' alignItems='flex-start'>
                {data.map((detailData) => {
                  return (
                    <Grid item xl={2} lg={2} sm={2} xs={12}>
                      <Card className={classes.CardActionArea}>
                        <CardActionArea className={classes.CardActionArea}>
                          {/* <Link className={classes.Link} to={'/Detail'}> */}
                          <Link
                            className={classes.Link}
                            onClick={() => {
                              this.props.getDetailMovie(detailData.id);
                              this.props.getDataEpisodes(detailData.id);
                            }}
                            to={{
                              // pathname: `/Detail/${detailData.id}/${detailData.title}`,
                              pathname: `/detail`,
                            }}
                          >
                            <img src={detailData.thumbnail} alt={detailData.title} className={classes.Img} />
                            <Typography className={classes.TypographyTitle}>{detailData.title}</Typography>
                            <Typography className={classes.TypographyYear}>{detailData.year}</Typography>
                          </Link>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}
const styles = (theme) => ({
  warperSearchbar: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchRoot: { display: 'flex', height: '50%', width: '100%', backgroundColor: 'white', borderRadius: 5 },
  rowItemSearchInput: { display: 'flex', width: '80%', height: '100%' },
  rowItemSearchIcon: {
    display: 'flex',
    width: '20%',
    height: '100%',
    backgroundColor: 'red',
    borderRadius: '0px 5px 5px 0px',
  },
  searchBox: {
    outline: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    color: 'black',
    border: 0,
    borderRadius: '5px 0px 0px 5px',
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchBtn: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '0px 5px 5px 0px',
  },
  containerCard: { display: 'flex', width: '100%', alignItems: 'center', justfyContent: 'center' },
  card: {
    width: '200px',
    backgroundColor: 'red',
    color: 'black',
  },
  Img: {
    width: '100%',
    maxHeight: '300px',
    minHeight: '300px',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  CardActionArea: {
    width: '100%',
    backgroundColor: '#000000',
    color: '#000000',
  },
  Link: {
    textDecoration: 'none',
    color: 'transparent',
  },
  TypographyTitle: {
    maxWidth: '200px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#000000',
    marginTop: '4px',
  },
  TypographyYear: {
    maxWidth: '200px',
    color: '#929292',
    backgroundColor: '#000000',
    fontSize: '14px',
    marginTop: '4px',
  },
});
export default withStyles(styles)(searchPage);
