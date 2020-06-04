import React, { Component } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import DataTv from "../data/dataTv.json";

const styles = (theme) => ({
  title: {
    color: "white",
    fontSize: "24px",
  },
  gridBase: {
      
    paddingTop: "30px",
    paddingRight: "50px",
    paddingBottom: "30px",
    paddingLeft: "50px",
  },
  gridCard: {
      
    paddingTop: "30px",
    paddingRight: "30px",
    paddingLeft: "30px",
  },
  card: {
    maxWidth: "200px",
    backgroundColor: "black",
    color: "black",
  },
//   CardMedia: {
//     width: "100%",
//     maxWidth: "200px",
//     minWidth: "200px",
//     height: "100%",
//     maxHeight: "300px",
//     minHeight: "300px",
//   },
  Img: {
    maxWidth: "200px",
    minWidth: "200px",
    maxHeight: "300px",
    minHeight: "300px",
    objectFit: "cover",
  objectPosition: "center",
  
  },
  CardActionArea: {
    maxWidth: "200px",
    backgroundColor: "#000000",
    color: "#000000",
  },
  TypographyTitle: {
    maxWidth: "200px",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#000000",
    marginTop: "4px",
  },
  TypographyYear: {
    maxWidth: "200px",
    color: "#929292",
    backgroundColor: "#000000",
    fontSize: "14px",
    marginTop: "4px",
  },
  Div:{
      padding:"16px"
  }
});
class tv extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid
          className={classes.gridBase}
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs>
            <b className={classes.title}>TV Series</b>
          </Grid>
          <Grid item xs>
            <Grid
              className={classes.gridCard}
              spacing={4}
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >








{DataTv.map((detailData) => {

return <div className={classes.Div}><Grid item xs>
                <Card className={classes.Card}>
                  <CardActionArea className={classes.CardActionArea}>
                    {/* <CardMedia
                      className={classes.CardMedia}
                      component="img"
                      alt="Your Name"
                      image={require("../img/header/YourName.jpg")}
                    /> */}
                    <img src={detailData.thumbnail} alt="asdawda" className={classes.Img}/>
                    <Typography className={classes.TypographyTitle}>
                    {detailData.title}
                    </Typography>
                    <Typography className={classes.TypographyYear}>
                      {detailData.title}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
              </div>
})}









              {/* <Grid item xs>
                <Card className={classes.Card}>
                  <CardActionArea className={classes.CardActionArea}>
                    <CardMedia
                      className={classes.CardMedia}
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={require("../img/header/YourName.jpg")}
                      title="Your Name"
                    />
                    <Typography className={classes.TypographyTitle}>
                      Your Name
                    </Typography>
                    <Typography className={classes.TypographyYear}>
                      2016
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(tv);

// TUT memakai map
// {DataTv.map((detailData, index) => {
//     return<h1>{detailData.title}</h1>
// })}
