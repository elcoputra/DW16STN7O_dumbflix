import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Trans from "../data/trans.json";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#1F1F1F",
    color: "red",
  },
  body: {
    fontSize: 14,
    backgroundColor: "#1f1f1f",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: "#1f1f1f",
    color: "white",
    "&:nth-of-type(odd)": {
      backgroundColor: "#2a2a2a",

      color: "white",
    },
  },
}))(TableRow);
const styles = (theme) => ({
  table: {
    width: 1000,
  },
  divider: {
    height: 100,
  },
  tableFontColorWhite: {
    color: "white",
  },
  tableFontColorGreen: {
    color: "green",
  },
  tableFontColorRed: {
    color: "red",
  },
  tableFontColorOrange: {
    color: "#F7941E",
  },
  idCostumize: {
    color: "white",
    width: 1,
  },
  idCostumizeRed: {
    color: "red",
    width: 1,
  },
  idCostumizeGreen: {
    color: "red",
    width: 1,
  },
  ButtonAction: {
    color: "#1C9CD2",
  },
  ButtonActionIcon: {
    color: "#1C9CD2",
    fontSize: 100,
  },
});

class transactionPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container direction="column" justify="center" alignItems="center">
          <div className={classes.divider}></div>
          <TableContainer className={classes.table} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>No</StyledTableCell>
                  <StyledTableCell align="left">Users</StyledTableCell>
                  <StyledTableCell align="left">Bukti Transfer</StyledTableCell>
                  <StyledTableCell align="left">Remaining Active</StyledTableCell>
                  <StyledTableCell align="left">Status Users</StyledTableCell>
                  <StyledTableCell align="left">Status Payment</StyledTableCell>
                  <StyledTableCell align="left">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Trans.map((row) => (
                  <StyledTableRow key={row.id}>
                    <TableCell className={classes.idCostumize} component="left" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell className={classes.tableFontColorWhite} align="left">
                      {row.users}
                    </TableCell>
                    <TableCell className={classes.tableFontColorWhite} align="left">
                      {row.transfer}
                    </TableCell>
                    <TableCell className={classes.tableFontColorWhite} align="left">
                      {row.remaining}
                    </TableCell>
                    {row.status === "Active" ? (
                      <TableCell className={classes.tableFontColorGreen} align="left">
                        {row.status}
                      </TableCell>
                    ) : (
                      <TableCell className={classes.tableFontColorRed} align="left">
                        {row.status}
                      </TableCell>
                    )}
                    {row.payment === "Approve" ? (
                      <TableCell className={classes.tableFontColorGreen} align="left">
                        {row.payment}
                      </TableCell>
                    ) : row.payment === "Cancel" ? (
                      <TableCell className={classes.tableFontColorRed} align="left">
                        {row.payment}
                      </TableCell>
                    ) : row.payment === "Pending" ? (
                      <TableCell className={classes.tableFontColorOrange} align="left">
                        {row.payment}
                      </TableCell>
                    ) : (
                      <TableCell className={classes.tableFontColorWhite} align="left">
                        {row.payment}
                      </TableCell>
                    )}
                    <TableCell className={classes.tableFontColorWhite} align="left">
                      <Button className={classes.ButtonAction}>
                        <ArrowDropDownIcon classname={classes.ButtonActionIcon} />
                      </Button>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(transactionPage);
