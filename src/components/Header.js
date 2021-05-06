import React from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Button,
  Slide,
  fade,
  Fade,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.customs.button,
    border: "2px solid",
  },
  appbar: {
    background: `${fade(theme.palette.background.blue, 0.6)}`,
    padding: ".33rem 0 .33rem 0",
    margin: "0 0 .5rem 0",
  },

  toolbar: {
    width: "90%",
    margin: "0 auto",
    fontFamily: "Nunito",
  },

  title: {
    border: "solid",
    borderRadius: "5%",
    padding: ".3rem",
  },

  icon: {
    color: "#ffff",
    fontSize: "2rem",
  },

  textButton: {
    color: "white",
    fontSize: "1.5rem",
    "&:hover": {
      color: theme.palette.red.main,
      transition: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },

  coloredText: {
    color: fade(theme.palette.red.main, 1),
    fontSize: "1.25rem",
    // paddingRight: ".3rem",
  },

  alert: {
    transition: "all 500ms ease",
    zIndex: 50,
    margin: "5px 10px 0 10px",
    position: "fixed",
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props) => {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const theme = useTheme();
  const notSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const [showWarning, setShowWarning] = React.useState(true);

  return (
    <div>
      {!notSmallScreen && (
        <div
          style={{
            top: !trigger ? "75px" : "0px",
            opacity: showWarning ? "100%" : "0%",
          }}
          className={classes.alert}
        >
          <Alert severity="warning">
            <div style={{ display: "flex", flexDirection: "row" }}>
              Please view this page on your computer for better experience
              <Button onClick={() => setShowWarning(false)}>x</Button>
            </div>
          </Alert>
        </div>
      )}
      <ElevationScroll {...props}>
        <Slide appear={false} direction="down" in={!trigger}>
          <div>
            <AppBar className={classes.appbar} elevation={1} sticky="true">
              <Toolbar className={classes.toolbar}>
                <Button
                  onClick={() =>
                    props.scrollDownFunc && props.scrollDownFunc(props.mainRef)
                  }
                >
                  <Typography
                    variant="body2"
                    className={classes.title}
                    color="secondary"
                    style={{ padding: ".5rem 1rem .5rem 1rem" }}
                  >
                    Alex Hsieh
                  </Typography>
                </Button>
                <Typography
                  variant="body2"
                  color="secondary"
                  style={{
                    padding: ".5rem 1rem .5rem 1rem",
                    fontFamily: "Roboto",
                  }}
                >
                  created and desgined by @Alex Hsieh 2021
                </Typography>
                {/* sections */}
                <div id="filler" style={{ flexGrow: 1 }} />
                {notSmallScreen &&
                  props?.sections.map(({ label, ref }, index) => (
                    <Button
                      className={classes.textButton}
                      disableFocusRipple
                      disableRipple
                      key={index}
                      onClick={() =>
                        props.scrollDownFunc && props.scrollDownFunc(ref)
                      }
                    >
                      <Typography variant="body1" style={{ padding: ".3rem" }}>
                        <span
                          className={classes.coloredText}
                        >{`${label.substring(0, 2)}`}</span>
                        {label.substring(2)}
                      </Typography>
                    </Button>
                  ))}
                <div id="filler" style={{ width: "1.5rem" }} />
                {/* */}
                <Button
                  style={{ margin: "0 0 0 auto" }}
                  variant="outlined"
                  className={classes.button}
                  href={"mailto: alex53632@outlook.com"}
                >
                  <Typography
                    variant="subtitle2"
                    className={classes.title}
                    style={{ border: "none" }}
                  >
                    Contact Me!
                  </Typography>
                </Button>
              </Toolbar>
            </AppBar>
          </div>
        </Slide>
      </ElevationScroll>
    </div>
  );
};

export default Header;
