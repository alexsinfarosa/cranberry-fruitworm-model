import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import pink from "@material-ui/core/colors/pink";
import CssBaseline from "@material-ui/core/CssBaseline";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: pink[100],
      main: pink[500]
    },
    secondary: {
      main: teal[500]
    }
  }
});

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
