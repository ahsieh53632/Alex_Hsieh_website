import React from "react";
import {
  makeStyles,
  Typography,
  lighten,
  fade,
  Tab,
  Tabs,
  Box,
} from "@material-ui/core";

import experienceData from "../static/experience";
import VerticleTabs from "./VerticleTab";

import Particles from "react-particles-js";
import particlesConfig from "../config/particlesConfig";

import ProjectDescription from "./ProjectDescription";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    paddingTop: "10rem",
    paddingBottom: "10rem",
    backgroundColor: "#233554",
    // backgroundPosition: "center 50%",
    //...theme.typography.fontFamily,
  },

  HeaderText: {
    color: "white",
    fontFamily: "Amatic SC",
    top: "30%",
    position: "absolute",
  },

  ExpContainer: {
    position: "relative",
    minHeight: "75vh",
    width: "80vw",
    border: "3px solid tranparent",
    margin: "0 auto auto auto",
    paddingBottom: "50px",
    backgroundColor: `transparent`,
    borderTopRightRadius: "15px",
    borderBottomLeftRadius: "15px",
    "&::after": {
      display: "block",
      content: '""',
      width: "100px",
      height: "100px",
      position: "absolute",
      bottom: "-5px",
      left: "-5px",
      borderBottom: "5px solid white",
      borderLeft: "5px solid white",
    },
  },

  spanCorner: {
    "&::before": {
      display: "block",
      content: '""',
      width: "100px",
      height: "100px",
      position: "absolute",
      top: "-5px",
      right: "-5px",
      borderTop: "3px solid white",
      borderRight: "3px solid white",
    },
  },

  title: {
    color: `${theme.palette.darkGreen.main}`,
    padding: "30px 3rem 0px 50px",
  },

  projectContainer: {
    display: "flex",
    flexDirection: "column",
  },
}));

const ColoredLine = ({ color = "#8892b0", style }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      background: color,
      height: 1,
      opacity: 0.5,
      ...style,
    }}
  />
);

function Projects(props) {
  const classes = useStyles();

  return (
    <div style={{ height: "unset" }}>
      <div className={classes.root} ref={props?.forwardedRef}>
        <div style={{ position: "absolute" }}>
          <Particles height="100%" width="90vw" params={particlesConfig} />
        </div>
        <div className={classes.ExpContainer}>
          <span className={classes.spanCorner}></span>
          <Typography variant="h2" className={classes.title} align="right">
            Projects
          </Typography>
          <ColoredLine style={{ width: "50%", marginRight: "3rem" }} />
          <div className={classes.projectContainer}>
            <ProjectDescription direction={"left"} />
            <ProjectDescription  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef((props, ref) => (
  <Projects {...props} forwardedRef={ref} />
));