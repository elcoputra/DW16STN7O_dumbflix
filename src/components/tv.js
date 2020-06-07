import React, { Component } from "react";
import { Grid, Card, CardActionArea, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import DataTv from "../data/dataTv.json";
import { Link } from "react-router-dom";

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
  Div: {
    padding: "16px",
  },
  Link: {
    textDecoration: "none",
    color: "transparent",
  },
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
              {DataTv.slice(this.props.init, this.props.end).map(
                (detailData) => {
                  return (
                    <div className={classes.Div}>
                      <Grid item xs>
                        <Card className={classes.Card}>
                          <CardActionArea className={classes.CardActionArea}>
                            <Link
                              className={classes.Link}
                              to={{
                                pathname: `/Detail/${detailData.title}`,
                                state: {
                                  id:detailData.id,
                                  linkTrailer: detailData.linkTrailer,
                                  thumbnail: detailData.thumbnail,
                                  title: detailData.title,
                                  year: detailData.year,
                                  type: detailData.type,
                                  description: detailData.description,
                                  linkFilm: detailData.linkFilm,
                                  thumbnailTrailer:detailData.thumbnailTrailer,
                                  episode: detailData.episode,
                                  linkEpisode : detailData.episode[1],
                                  isAdmin:true,
                                  isTvShow:true,
                                },
                              }}
                            >
                              <img
                                src={detailData.thumbnail}
                                alt="asdawda"
                                className={classes.Img}
                              />
                              <Typography className={classes.TypographyTitle}>
                                {detailData.title}
                              </Typography>
                              <Typography className={classes.TypographyYear}>
                                {detailData.year}
                              </Typography>
                            </Link>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    </div>
                  );
                }
              )}
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
