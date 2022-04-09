import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { blue } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: blue[500],
    },
    secondary: {
      // Purple and green play nicely together.
      main: purple[100],
    },
    info: {
      // Purple and green play nicely together.
      main: blue[500],
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
      disabled: "#fff",
    },
    background: { default: "rgb(0, 30, 60)", paper: "rgb(10, 40, 70)" },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          border: "1px solid rgba(200,200,200, 0.5)",
        },
      },
    },
  },
});
