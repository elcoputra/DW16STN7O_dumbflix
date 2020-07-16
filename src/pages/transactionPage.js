import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClearIcon from '@material-ui/icons/Clear';
import FilterListIcon from '@material-ui/icons/FilterList';
// import Moment from 'react-moment';
import Moment from 'moment';

import { getDataTransactionsAction, UpdateDataTransactionsAction } from '../redux/actions/transactions_action';
import { compose } from 'recompose';
import { connect } from 'react-redux';

class transactionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownMenuId: 0,
      dataId: 0,
      modalViewAttatch: false,
      filterMenu: false,
      linkImage: '',
      filterBy: '',
    };
  }

  componentDidMount = () => {
    this.props.getDataTransactionsAction();
  };

  openDropdown(dataID) {
    console.log(dataID);
    if (this.state.dropdownMenuId === 0) {
      this.setState({
        dropdownMenuId: dataID,
      });
    } else {
      this.setState({
        dropdownMenuId: 0,
      });
    }
    this.setState({
      dataID: dataID,
    });
  }

  handleButtonViewAttatchment = (link) => {
    this.setState({
      linkImage: link,
      modalViewAttatch: true,
    });
  };
  handleCloseButtonViewAttatchment = () => {
    this.setState({
      modalViewAttatch: false,
    });
  };
  handleMenuFilter = () => {
    if (this.state.filterMenu) {
      this.setState({
        filterMenu: false,
      });
    } else {
      this.setState({
        filterMenu: true,
      });
    }
  };

  handleBtnFilter = (filter) => {
    this.setState({
      filterBy: filter,
      filterMenu: false,
    });
  };

  render() {
    const filterNameAttatch = /([^/]+$)/g;
    const { classes } = this.props;
    const { dataTransactions } = this.props.transactionsReducer;
    // const filteredTransaction = dataTransactions.filter((data) => data.status.includes(this.state.filterBy));
    const filteredTransaction = dataTransactions.filter((data) => data.status.includes(this.state.filterBy));
    return (
      <div>
        {this.ModalAttatch()}
        <Grid container direction='column' justify='center' alignItems='center'>
          <div className={classes.divider}></div>
          <div className={classes.header}>
            <Grid container direction='row' justify='space-between' alignItems='center'>
              <Grid item>
                <Typography variant='h4' style={{ color: 'White' }}>
                  Transactions
                </Typography>
              </Grid>
              <Grid item>
                <IconButton onClick={this.handleMenuFilter} className={this.props.classes.ButtonFilter} aria-label='Close'>
                  <FilterListIcon />
                </IconButton>
              </Grid>
            </Grid>
            {/* <div className={classes.divMenuFilter}> */}
            {this.state.filterMenu ? (
              <Grid className={classes.divMenuFilter} container direction='column' justify='center' alignItems='center'>
                <Grid
                  item
                  style={{ backgroundColor: '#1f1f1f', color: 'white', width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                  Filter By
                </Grid>
                <Grid item style={{ width: '100%' }}>
                  <Button onClick={() => this.handleBtnFilter('')} className={classes.all}>
                    Show All
                  </Button>
                </Grid>
                <Grid item style={{ width: '100%' }}>
                  <Button onClick={() => this.handleBtnFilter('Pending')} className={classes.buttonPending}>
                    Pending
                  </Button>
                </Grid>
                <Grid item style={{ width: '100%' }}>
                  <Button onClick={() => this.handleBtnFilter('Approved')} className={classes.buttonApproved}>
                    Approved
                  </Button>
                </Grid>
                <Grid item style={{ width: '100%' }}>
                  <Button onClick={() => this.handleBtnFilter('Denied')} className={classes.buttonDenied}>
                    Denied
                  </Button>
                </Grid>
              </Grid>
            ) : null}
            {/* </div> */}
          </div>
          <TableContainer elevation={0} className={classes.table} component={Paper}>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell>No</StyledTableCell>
                  <StyledTableCell align='left'>Users</StyledTableCell>
                  <StyledTableCell align='left'>Bukti Transfer</StyledTableCell>
                  <StyledTableCell align='left'>Remaining Active</StyledTableCell>
                  <StyledTableCell align='left'>Status Users</StyledTableCell>
                  <StyledTableCell align='left'>Status Payment</StyledTableCell>
                  <StyledTableCell align='left'>Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredTransaction.reverse().map((row) => (
                  <StyledTableRow key={row.id}>
                    <TableCell className={classes.idCostumize} component='left' scope='row'>
                      {row.id}
                    </TableCell>
                    <TableCell className={classes.tableFontColorWhite} align='left'>
                      {row.user.fullName}
                    </TableCell>
                    <TableCell className={classes.tableFontColorWhite} align='left'>
                      <Button onClick={() => this.handleButtonViewAttatchment(row.attachment)} style={{ color: 'white' }}>
                        {row.attachment.match(filterNameAttatch)}
                      </Button>
                    </TableCell>
                    <TableCell className={classes.tableFontColorWhite} align='left'>
                      {/* {row.remaining} */}
                      {/* <Moment fromNow>{row.dueDate}</Moment> */}
                      {String(Moment(row.dueDate).diff(Date.now(), 'days'))} Days
                    </TableCell>
                    {row.user.subscribe === true ? (
                      <TableCell className={classes.tableFontColorGreen} align='left'>
                        {row.user.subscribe === true ? 'Active' : 'Not active'}
                      </TableCell>
                    ) : (
                      <TableCell className={classes.tableFontColorRed} align='left'>
                        {row.user.subscribe === false ? 'Not active' : 'Active'}
                      </TableCell>
                    )}
                    {row.status === 'Approved' ? (
                      <TableCell className={classes.tableFontColorGreen} align='left'>
                        {row.status}
                      </TableCell>
                    ) : row.status === 'Denied' ? (
                      <TableCell className={classes.tableFontColorRed} align='left'>
                        {row.status}
                      </TableCell>
                    ) : row.status === 'Pending' ? (
                      <TableCell className={classes.tableFontColorOrange} align='left'>
                        {row.status}
                      </TableCell>
                    ) : (
                      <TableCell className={classes.tableFontColorWhite} align='left'>
                        {row.status}
                      </TableCell>
                    )}
                    <TableCell className={classes.tableActionMenu} align='left'>
                      <Button onClick={() => this.openDropdown(row.id)} className={classes.ButtonAction}>
                        <ArrowDropDownIcon classname={classes.ButtonActionIcon} />
                      </Button>
                      {/* Dropdown */}
                      {this.state.dropdownMenuId === row.id ? (
                        <div id={row.id} className={classes.divBaseDropdown}>
                          <Grid container direction='column' justify='center' alignItems='center'>
                            <Button
                              onClick={() => {
                                this.openDropdown(row.id);
                                this.props.UpdateDataTransactionsAction(row.id, { status: 'Approved', userId: row.userId });
                              }}
                              className={classes.ButtonApproved}
                            >
                              Approved
                            </Button>
                            <Button
                              onClick={() => {
                                this.openDropdown(row.id);
                                this.props.UpdateDataTransactionsAction(row.id, { status: 'Denied', userId: row.userId });
                              }}
                              className={classes.ButtonCancel}
                            >
                              Cancel
                            </Button>
                          </Grid>
                        </div>
                      ) : null}

                      {/* dropdown end */}
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
            <div className={classes.dividerTableBottom}></div>
          </TableContainer>
        </Grid>
      </div>
    );
  }
  ModalAttatch() {
    return (
      <Modal
        aria-labelledby='spring-modal-title'
        aria-describedby='spring-modal-description'
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        open={this.state.modalViewAttatch}
        onClose={this.handleCloseButtonViewAttatchment}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={this.state.modalViewAttatch}>
          <div
            style={{
              position: 'relative',
              borderRadius: 10,
            }}
          >
            <img
              alt='attatchment'
              style={{ maxWidth: '85vw', maxHeight: '85vh', objectFit: 'scale-down', borderRadius: 10 }}
              src={this.state.linkImage}
            />
            <IconButton
              onClick={this.handleCloseButtonViewAttatchment}
              className={this.props.classes.ButtonCloseAttatchment}
              aria-label='Close'
            >
              <ClearIcon />
            </IconButton>
          </div>
        </Fade>
      </Modal>
    );
  }
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#1F1F1F',
    color: 'red',
  },
  body: {
    fontSize: 14,
    backgroundColor: '#1f1f1f',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: '#1f1f1f',
    color: 'white',
    '&:nth-of-type(odd)': {
      backgroundColor: '#2a2a2a',

      color: 'white',
    },
  },
}))(TableRow);
const styles = (theme) => ({
  table: {
    width: 1000,
    background: '#000000',
    borderRadius: 0,
  },
  divider: {
    height: 100,
  },
  dividerTableBottom: {
    height: 43,
    width: '100%',
    color: 'red',
  },
  tableFontColorWhite: {
    color: 'white',
  },
  tableFontColorGreen: {
    color: 'green',
  },
  tableFontColorRed: {
    color: 'red',
  },
  tableFontColorOrange: {
    color: '#F7941E',
  },
  idCostumize: {
    color: 'white',
    width: 1,
  },
  idCostumizeRed: {
    color: 'red',
    width: 1,
  },
  idCostumizeGreen: {
    color: 'red',
    width: 1,
  },
  ButtonAction: {
    color: '#1C9CD2',
  },
  ButtonActionIcon: {
    color: '#1C9CD2',
    fontSize: 100,
  },
  divBaseDropdown: {
    position: 'absolute',
    background: '#1F1F1F',
    borderRadius: 4,
    top: 48,
    right: 29,
    width: 89,
    height: 74,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
    zIndex: 3,
  },
  tableActionMenu: {
    position: 'relative',
  },
  divBaseRelative: {
    position: 'relative',
    zIndex: 1,
  },
  ButtonApproved: {
    color: '#0ACF83',
    fontWeight: 500,
  },
  ButtonCancel: {
    color: '#FF0000',
    fontWeight: 500,
  },
  ButtonCloseAttatchment: {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    right: 0,
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    borderRadius: 25,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.64)',
    color: 'white',
    zIndex: 3,
  },
  ButtonFilter: {
    width: 50,
    height: 50,
    borderRadius: 25,
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: 'white',
  },
  header: {
    position: 'relative',
    width: 1000,
    height: 90,
    backgroundColor: '#1F1F1F',
    borderRadius: '10px 10px 0px 0px',
    padding: 16,
  },
  divMenuFilter: {
    position: 'absolute',
    width: 130,
    height: 180,
    borderRadius: 10,
    border: '1px solid white',
    top: 55,
    right: 20,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  all: {
    color: 'white',
    width: '100%',
  },
  buttonPending: {
    color: '#F7941E',
    width: '100%',
  },
  buttonApproved: {
    color: 'green',
    width: '100%',
  },
  buttonDenied: {
    color: 'red',
    width: '100%',
  },
});

const mapStateToProps = (state) => {
  return {
    transactionsReducer: state.transactionsReducer,
    transactionByIdReducer: state.transactionByIdReducer,
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { getDataTransactionsAction, UpdateDataTransactionsAction }),
)(transactionPage);
