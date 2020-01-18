import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./lib/theme";
import App from "./App";
// import MomentUtils from "@date-io/moment";

// import LuxonUtils from "@date-io/luxon";
// import DateFnsUtils from "@date-io/date-fns";

// import { MuiPickersUtilsProvider } from "@material-ui/pickers";
// import DayjsUtils from "@date-io/dayjs";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,

  document.getElementById("root")
);
