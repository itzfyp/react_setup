import React, { Component } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

import "../styles/App.scss";
import AppIndex from "../layouts/AppIndex.js";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: blue
  }
});

class AppRoot extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppIndex />
      </MuiThemeProvider>
    );
  }
}

export default AppRoot;
