import React from "react";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Header from "../../components/Header";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const AppHeader = props => {
  const { classes } = props;
  const defaultLink = props => (<Link to="/" {...props} />);
  const aboutUs = props => (<Link to="/about" {...props} />);
  return <Header>
      <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        Demo
      </Typography>
      <Button color="inherit" component={defaultLink}>
        Home
      </Button>
      <Button color="inherit" component={aboutUs}>
        About us
      </Button>
    </Header>;
};

export default withStyles(styles)(AppHeader);
