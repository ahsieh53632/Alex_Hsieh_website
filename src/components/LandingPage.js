import React from "react";
import {
  makeStyles,
  Typography,
  fade,
  IconButton,
  Button,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { ReactComponent as GithubIcon } from "../icons/github.svg";
import { ReactComponent as LinkedInIcon } from "../icons/linkedin.svg";
import { ReactComponent as ScrollDownIcon } from "../icons/scrollDown.svg";

const useStyles = makeStyles((theme) => ({
  textHolder: (props) =>
    props.textHolderStyle || {
      display: "flex",
      flexDirection: "column",
      paddingTop: "2rem",
      flexBasis: "70%",
      flexShrink: 0,
      marginLeft: "5%"
    },

  smallText: {
    color: theme.palette.secondary.main,
    fontFamily: "Caveat",
    fontSize: "2rem",
  },

  title: {
    color: "white",
    fontFamily: "Amatic SC",
    letterSpacing: ".5rem",
    // fontSize: "10rem",
    // top: "30%",
    // position: "absolute",
  },

  subTitle: {
    color: "#8892b0",
    fontFamily: "Caveat",
    letterSpacing: ".1rem",
  },

  img: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "cover",
    right: "10%",
    top: "-15%",
    position: "relative",
    borderRadius: "50px",
    boxShadow: `50px 50px ${fade(theme.palette.text.main, 0.3)}`,
    border: `dashed white 3px`,
    "&:hover": {
      transition: "all 500ms",
      border: "none",
      boxShadow: "none",
    },
  },

  iconDrawer: {
    width: "80%",
    marginLeft: "0rem",
    display: "flex",
    flexDirection: "row",
  },

  iconButton: {
    fill: "white",
    padding: "15px",
  },

  icon: {
    fill: "white",
    width: "35px",
    height: "35px",
    animation: `$upDown 10s ${theme.transitions.easing.easeInOut} infinite`,
    "&:hover": {
      transition: "all 500ms ease",
      fill: `${theme.palette.red.main}`,
    },
  },

  nextPageIcon: {
    fill: "white",
    width: "35px",
    height: "35px",
    animation: `$upDown20 2s ${theme.transitions.easing.easeInOut} infinite`,
    "&:hover": {
      transition: "all 500ms ease",
      fill: `${theme.palette.red.main}`,
    },
  },

  resumeButton: {
    ...theme.customs.button,
    margin: "15px",
    height: "35px",
    border: "2px solid",
    color: "white",
    animation: `$upDown 10s ${theme.transitions.easing.easeInOut} infinite`,
    "&:hover": {
      color: theme.palette.red.main,
      transition: "all 500ms ease",
    },
  },

  container: {
    minHeight: "100vh",
    margin: "0 auto",
    paddingLeft: "1.6rem",
  },

  "@keyframes upDown": {
    "0%, 100%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-5px)",
    },
  },

  "@keyframes upDown20": {
    "0%, 100%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-20px)",
    },
  },
}));

function LandingPage(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const notSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.container} ref={props.forwardedRef}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          top: props.marginTop || "25%",
          position: "absolute",
          flex: 1,
          width: "90%",
        }}
      >
        <div className={classes.textHolder}>
          <Typography variant="subtitle1" className={classes.smallText}>
            Hi, i am
          </Typography>
          <Typography variant="h1" className={classes.title}>
            ALEX HSIEH
          </Typography>
          <Typography variant="h3" className={classes.subTitle}>
            I am interested in full-stack development and Computer Vision
          </Typography>
          <Typography variant="h5" className={classes.subTitle}>
            Senior @ University of Maryland - College Park, Expected May 2021
          </Typography>
          <div className={classes.iconDrawer}>
            <IconButton
              className={classes.iconButton}
              onClick={() =>
                window.open("https://github.com/ahsieh53632?tab=repositories")
              }
            >
              <GithubIcon className={classes.icon} />
            </IconButton>
            <IconButton
              className={classes.iconButton}
              onClick={() =>
                window.open("https://www.linkedin.com/in/alexhsieh526/")
              }
            >
              <LinkedInIcon className={classes.icon} />
            </IconButton>
            <Button
              variant="outlined"
              className={classes.resumeButton}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1o64Ugjwgto8Hn4aa7Sv9MPpfzbVSkRBH/view?usp=sharing"
                )
              }
            >
              <Typography
                variant="subtitle2"
                style={{ border: "none", padding: ".3rem" }}
              >
                Resume
              </Typography>
            </Button>
          </div>
        </div>
        {notSmallScreen && (
          <div>
            <img
              src={`${process.env.PUBLIC_URL + "/img/me.jpg"}`}
              alt="my_pic"
              className={classes.img}
            />
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          position: "absolute",
          bottom: "2%",
          width: "90%",
        }}
      >
        <IconButton
          style={{ zIndex: 50 }}
          onClick={() => props.scrollDownFunc()}
        >
          <ScrollDownIcon
            className={classes.nextPageIcon}
            style={{
              border: ".2rem solid white",
              width: "50px",
              height: "50px",
              padding: "10px",
              borderRadius: "25px",
            }}
          />
        </IconButton>
      </div>
    </div>
  );
}

export default React.forwardRef((props, ref) => (
  <LandingPage {...props} forwardedRef={ref} />
));
