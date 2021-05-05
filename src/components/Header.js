import React from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.customs.button,
    border: "2px solid",
  },
  appbar: {
    // background: `linear-gradient(to right bottom, ${theme.palette.background.blue}, 90%, rgba(255, 255, 255, .2))`,
    background: "none",
    padding: ".33rem 0 .33rem 0",
    margin: ".33rem 0 .5rem 0",
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
    "&:hover": {
      color: theme.palette.red.main,
      transition: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },

  coloredText: {
    color: fade(theme.palette.red.main, 1),
    fontSize: "1rem",
    // paddingRight: ".3rem",
  },
}));

const sections = ["experience", "projects"];
const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appbar} elevation={0} sticky="true">
        <Toolbar className={classes.toolbar}>
          <Button>
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
            style={{ padding: ".5rem 1rem .5rem 1rem", fontSize: ".8rem", fontFamily: "Roboto" }}
          >
              created and desgined by @Alex Hsieh 2021
          </Typography>
          {/* sections */}
          <div id="filler" style={{ flexGrow: 1 }} />
          {sections.map((section, index) => (
            <Button
              variant="text"
              className={classes.textButton}
              disableFocusRipple
              disableRipple
              key={index}
            >
              <Typography variant="subtitle2" style={{ padding: ".3rem" }}>
                <span className={classes.coloredText}>{`${section.substring(
                  0,
                  2
                )}`}</span>
                {section.substring(2)}
              </Typography>
            </Button>
          ))}

          <div id="filler" style={{ width: "1.5rem" }} />
          {/* */}
          <Button
            style={{ margin: "0 0 0 auto" }}
            variant="outlined"
            className={classes.button}
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
  );
};

export default Header;
