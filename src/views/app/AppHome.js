import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DidMountCheck from "../../components/DidMountCheck";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const AppHome = props => {
  const { classes } = props;

  return (
    <>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Welocme To Home Page
        </Typography>
        <Typography component="div">
          <DidMountCheck />
        </Typography>
      </Paper>
    </>
  );
};

AppHome.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppHome);
