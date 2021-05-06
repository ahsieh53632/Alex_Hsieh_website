import { createMuiTheme } from "@material-ui/core/styles";
// import { lighten } from "@material-ui/core/styles/colorManipulator";

export default createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: "20px",
        },
        '*::-webkit-scrollbar-track': {
          backgroundColor: "inherit"
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#ccd6f6',
          borderRadius: "20px",
          border: "6px solid transparent",
          backgroundClip: "content-box",
        },
        '*::-webkit-scrollbar-corner': {
          backgroundColor: 'transparent'
        },
        "*::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#a8bbbf",
        }
      }
    },

    MuiTab: {
      root: {
        height: "100px",
      }
    }
  },

  palette: {
    primary: {
      main: "#05386B",
    },
    secondary: {
      main: "#5CDB95",
    },

    darkGreen: {
      main: "#379683"
    },

    red: {
      main: "#be1013"
    },

    text: {
      main: "#8892b0"
    },

    background: {
      cardBg: "rgb(59, 60, 67)",
      hintBar: "rgba(55, 60, 85)",
      blue: "#0a192f",
      page: "rgb(244,247,249)",
    },
  },
  table: {
    header: {
      // backgroundColor: 'red',
      // color: 'black',
    },
  },
  typography: {
    button: {
      textTransform: "none",
      height: 40,
    },
    fontFamily: ["Orbitron", "Roboto", "Hind", "Amatic SC", "Indie Flower", "Arial", "sans-serif"].join(","),
  },
  customs: {
    button: {
      height: 40,
      fontSize: ".5rem",
      color: "white",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "rgba(255, 25, 25, 0.5)",
      },
    },
  },
  div: {
    flexContainerHorizontal: {
      display: "flex",
      flexDirection: "row",
    },
    flexContainerVertical: {
      display: "flex",
      flexDirection: "column",
    },
    scrollableVertical: {
      overflowX: "hidden",
      overflowY: "auto",
    },
    ellipsisText: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    breakAllText: {
      whiteSpace: "pre-wrap",
      wordBreak: "break-all",
    },
    pageRoot: {
      flexGrow: 1,
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    },
  },
});
