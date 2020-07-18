import React, { Component } from 'react';
import { Button, Typography, Grid, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import BackgroundImageHeader from '../img/hero-image.png';
import Logo from '../img/LOGO.png';
import videoHeader from '../img/dance.webm';

import { openModalRegister, openModalLogin } from '../redux/actions/modal_actions';

import { compose } from 'recompose';
import { connect } from 'react-redux';

import LoginModal from '../components/loginModal';
import RegisterModal from '../components/registerModal';

class heroPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      email: event.target.value,
    });

    console.log(this.state.email);
  };

  render() {
    const { classes } = this.props;
    const gridConf = this.gridConf;
    return (
      <>
        <LoginModal />
        <RegisterModal email={this.state.email} />
        {/* Hero Header */}
        <div className={classes.heroHeader}>
          <div className={classes.heroMask}>
            <video autoPlay muted loop className={classes.video}>
              <source src={videoHeader} type='video/webm' />
            </video>
            <div className={classes.header}>
              <Grid item xs>
                <img alt='logo' src={Logo} />
              </Grid>
              <Grid item xs className={classes.gridBtnLogin}>
                <Button onClick={() => this.props.openModalLogin()} className={classes.btnLogin} variant='contained'>
                  Login
                </Button>
              </Grid>
            </div>
            <Grid {...gridConf.gridColumnRootInsideHero} className={classes.gridHero}>
              <Grid item className={classes.warperJargon1}>
                <Typography variant='h2' className={classes.jargon}>
                  Watch all movies, With your crush
                </Typography>
              </Grid>
              <Grid item className={classes.warperJargon2}>
                <Typography variant='h5' className={classes.jargon2}>
                  Get everyone watching together, or invite your crush too, but don't forget to subscribe first!
                </Typography>
              </Grid>
              <Grid {...gridConf.rowInput} className={classes.warperInput}>
                <Grid item xs={9}>
                  <TextField
                    className={classes.texfieldInput}
                    label='Email address'
                    name='email'
                    variant='outlined'
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid
                  item
                  style={{
                    display: 'flex',
                    height: '100%',
                    backgroundColor: '#E50914',
                    borderRadius: '0px 10px 10px 0px',
                  }}
                  xs={3}
                >
                  <Button onClick={() => this.props.openModalRegister()} className={classes.btnSubscribe}>
                    Sign UP
                  </Button>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant='h6' className={classes.jargon3}>
                  Ready to watch? Enter your email to create your membership.
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.wave}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsBx='https://boxy-svg.com'
            viewBox='0 0 700 50'
            width='100%'
            height='100%'
          >
            <path
              style={{ fill: '#171717', fillOpacity: '1' }}
              d='M 0 32.997 L 23.335 34.836 C 46.668 36.607 93.335 40.387 140.001 43.996 C 186.668 47.605 233.334 51.387 280.001 49.496 C 326.667 47.605 373.334 40.387 420.001 39.408 C 466.667 38.497 513.334 43.996 560 44.907 C 606.667 45.887 653.333 42.106 676.667 40.336 L 700 38.497 L 700 0 L 676.667 0 C 653.333 0 606.667 0 560 0 C 513.334 0 466.667 0 420.001 0 C 373.334 0 326.667 0 280.001 0 C 233.334 0 186.668 0 140.001 0 C 93.335 0 46.668 0 23.335 0 L 0 0 Z'
            ></path>
          </svg>
        </div>
        <div className={classes.content}>
          <Grid {...gridConf.rowContent} className={classes.rowContent}>
            <Grid {...gridConf.rowContent2} className={classes.rowContent2} lg={4} xs={12}>
              <Grid item lg={1} xs={1}>
                <div className={classes.pilar} />
              </Grid>
              <Grid item lg={11} xs={11}>
                <Grid {...gridConf.columnPerAbout}>
                  <Grid item>
                    <Typography className={classes.typoTitle}>Watch On Browser Desktop</Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.typoExplain}>
                      Watch your favorite shows from a desktop browser, the display is bigger and more satisfying.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid {...gridConf.rowContent2} className={classes.rowContent2} lg={4} xs={12}>
              <Grid item lg={1} xs={1}>
                <div className={classes.pilar} />
              </Grid>
              <Grid item lg={11} xs={11}>
                <Grid {...gridConf.columnPerAbout}>
                  <Grid item>
                    <Typography className={classes.typoTitle}>Watch On Mobile</Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.typoExplain}>
                      Don't you have a desktop? a laptop? Macbook? take it easy ! You must have an Android or iPhone?
                      download the Dumbflix app in your favorite store!
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid {...gridConf.rowContent2} className={classes.rowContent2} lg={4} xs={12}>
              <Grid item lg={1} xs={1}>
                <div className={classes.pilar} />
              </Grid>
              <Grid item lg={11} xs={11}>
                <Grid {...gridConf.columnPerAbout}>
                  <Grid item>
                    <Typography className={classes.typoTitle}>Get Refund When Not Satisfied</Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.typoExplain}>
                      Are you not happy with our service? You can't find the movie you or the crush you like? You may
                      ask for a refund.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className={classes.wave}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 50' width='100%' height='100%'>
            <path
              style={{ fill: '#171717', fillOpacity: '1' }}
              d='M 0 0 L 23.31 5.196 C 46.617 10.198 93.231 20.881 139.847 31.079 C 186.462 41.275 233.847 39.802 280.461 34.461 C 327.079 29.121 373.693 8.727 420.309 5.957 C 466.923 3.385 513.539 18.925 560.156 21.496 C 606.771 24.266 653.385 13.583 676.693 8.579 L 700 3.385 L 700 50 L 676.693 50 C 653.385 50 606.771 50 560.156 50 C 513.539 50 466.923 50 420.309 50 C 373.693 50 327.079 50 280.461 50 C 233.847 50 187.232 50 140.617 50 C 94.001 50 47.387 50 24.08 50 L 0.77 50 L 0 0 Z'
            ></path>
          </svg>
        </div>
        {/* <div className={classes.content}>
          <div className={classes.dividerTop}></div>
        </div> */}
      </>
    );
  }
  gridConf = {
    gridColumnRootInsideHero: {
      spacing: 2,
      container: true,
      direction: 'column',
      justify: 'center',
      alignItems: 'center',
    },
    rowInput: {
      container: true,
      direction: 'row',
      justify: 'center',
      alignItems: 'center',
    },
    rowHeader: {
      container: true,
      direction: 'row',
      justify: 'space-between',
      alignItems: 'center',
    },
    rowContent: {
      spacing: 2,
      container: true,
      direction: 'row',
      justify: 'space-between',
      alignItems: 'center',
    },
    rowContent2: {
      spacing: 2,
      container: true,
      direction: 'row',
      justify: 'flex-start',
      alignItems: 'flex-start',
    },
    columnPerAbout: {
      spacing: 2,
      container: true,
      direction: 'column',
      justify: 'flex-start',
      alignItems: 'flex-start',
    },
  };
}
const styles = (theme) => ({
  heroHeader: {
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    position: 'absolute',
    height: 65,
    width: '90%',
    top: 0,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroMask: {
    overflow: 'hidden',
    position: 'relative',
    background: 'radial-gradient(circle, rgba(0,0,0,0.4587768212753851) 46%, rgba(255,255,255,0) 100%)',
    backgroundColor: 'radial-gradient(circle, rgba(0,0,0,0.7388888660933124) 29%, rgba(0,0,0,0.6268440481661415) 82%)',
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
  gridHero: {
    zIndex: 1,
    width: '50%',
  },
  warperJargon1: {
    width: '75%',
  },
  jargon: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  jargon2: {
    color: 'white',
    textAlign: 'center',
  },
  jargon3: {
    color: 'white',
    textAlign: 'center',
  },
  warperInput: {
    display: 'flex',
    marginTop: '5%',
    width: '100%',
    height: 70,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //   TEXFIELD
  texfieldInput: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: 'white',
    '& .MuiFormHelperText-root': {
      color: '#575757',
    },

    '& .MuiOutlinedInput-root': {
      color: 'black',
      '& fieldset': {
        borderColor: 'transparent',
        borderWidth: 0,
      },
      '&:hover fieldset': {
        borderColor: 'transparent',
        borderWidth: 0,
      },
      '&.Mui-focused fieldset': {
        color: '#575757',
        borderColor: 'transparent',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#575757',
      '&.Mui-focused': {
        color: '#575757',
      },
    },
    '& .MuiSelect-icon': {
      color: '#B7B7B7',
      fontSize: 40,
      top: 10,
    },
  },
  btnSubscribe: {
    border: '0px 5px 0px 5px',
    fontSize: 24,
    color: 'white',
    height: '100%',
    width: '100%',
  },
  gridBtnLogin: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  btnLogin: {
    width: 100,
    background: '#E50914',
    color: 'white',
  },
  //   TEXFIELD END
  wave: { display: 'flex', position: 'relative' },
  content: { display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50vh' },
  dividerTop: { width: '100%', backgroundColor: '#171717', height: 10 },
  rowContent: { display: 'flex', width: '90%', height: '100%' },
  rowContent2: { marginBottom: 5 },
  pilar: { width: 10, height: 230, backgroundColor: 'red' },
  typoTitle: { color: 'white', fontSize: 38, fontWeight: 'bold' },
  typoExplain: { color: 'white', fontSize: 18 },
});
export default compose(withStyles(styles), connect(null, { openModalRegister, openModalLogin }))(heroPage);
