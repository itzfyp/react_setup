import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    textAlign: "right"
  },
  grid: {
    justifyContent: "center",
    margin: 'auto'
  },
  card: {
    width: "50%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class SignIn extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.grid} spacing={24}>
        <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar className={classes.avatar}>S</Avatar>}
            title="Sign In"
          />
          <CardContent>
            <form noValidate autoComplete="off">
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="standard-username-input"
                    label="User Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="standard-password-input"
                    label="Password"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12} className={classes.button}>
                  <Button variant="contained" color="primary">
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(SignIn);
