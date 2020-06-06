import React, { Component } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { AttachFile } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  divBase: {
    marginTop: 150,
  },
  premiumText: {
    fontWeight: 800,
    fontSize: 36,
    color: "white",
  },
  deskripsi: {
    marginTop: 40,
    fontSize: 18,
    color: "white",
  },
  dumbflix: {
    fontSize: 18,
    color: "red",
  },
  rekening: {
    fontSize: 18,
    color: "white",
  },
  textField: {
    background: "rgba(210, 210, 210, 0.25)",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 350,
    height: 50,
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
  ButtonAttatch: {
    textTransform: "none",
    marginTop: 10,
    height: 50,
    width: 350,
    fontSize: "18px",
    background: "white",
    color: "#E50914",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#E50914",
      color: "white",
    },
  },
  Kirim: {
    marginTop: 20,
    textTransform: "none",
    marginTop: 65,
    height: 40,
    width: 350,
    fontSize: "18px",
    background: "#E50914",
    color: "white",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "white",
      color: "#E50914",
    },
  },
  attatchText: {
    paddingRight: 16,
  },
  attatchIcon: {
    paddingLeft: 39,
    paddingTop: 11,
  },
  icon: {
    fontSize: 40,
  },
});
class upgradePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.divBase}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs>
            <div className={classes.premiumText}>Premium</div>
          </Grid>
          <Grid item xs>
            <div className={classes.deskripsi}>
              Bayar sekarang dan nikmati streaming film-film yang kekinian dari <b className={classes.dumbflix}>DUMBFLIX</b>
            </div>
          </Grid>
          <Grid item xs>
            <div>
              <b className={classes.dumbflix}>DUMBFLIX</b>
              <b className={classes.rekening}> : 0981312323</b>
            </div>
          </Grid>
          <Grid item xs>
            <TextField
              id="standard-name"
              label="Input Your Account Number"
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
                  <b className={classes.attatchText}>Attatch Proof Of Transfer</b>
                </Grid>
                <Grid className={classes.attatchIcon} item xs>
                  <AttachFile className={classes.icon} />
                </Grid>
              </Grid>
            </Button>
          </Grid>
          <Grid item xs>
            <Button variant="contained" className={classes.Kirim}>
              <div>Kirim</div>
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(upgradePage);
