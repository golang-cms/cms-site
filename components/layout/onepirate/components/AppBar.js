import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';

const styles = (theme) => ({
  root: {
    // color: theme.palette.common.white,
    color: "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
    color: "#FDE08D",
    backgroundColor: "#2a2a72",
    backgroundImage: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
  },
});

function AppBar(props) {
  return <MuiAppBar elevation={0} position="static" {...props} />;
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBar);