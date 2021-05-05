import React from "react";
import {
  makeStyles,
  Typography,
  lighten,
  fade,
  Box,
  Button,
} from "@material-ui/core";

import experienceData from "../static/experience";
import VerticleTabs from "./VerticleTab";

import Particles from "react-particles-js";
import particlesConfig from "../config/particlesConfig";

import ProjectDescription from "./ProjectDescription";

import projectData from "../static/projectData"

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

  checkMoreButton: {
    color: "white",
    fontSize: "1.5rem",
    borderRadius: "10px",
    padding: "30px",
    border: `3px dashed ${theme.palette.darkGreen.main}`,
    "&:hover" : {
      backgroundColor: `${lighten(theme.palette.red.main, .7)}`,
      border: "none"
    }
  }
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
          <Particles height="100vh" width="90vw" params={particlesConfig} />
        </div>
        <div className={classes.ExpContainer}>
          <span className={classes.spanCorner}></span>
          <Typography variant="h2" className={classes.title} align="right">
            Projects
          </Typography>
          <ColoredLine style={{ width: "50%", marginRight: "3rem" }} />
          <div className={classes.projectContainer}>
            {projectData.map((item, index) => (
              <ProjectDescription direction={index % 2 === 0 ? "left" : "right"} {...item}/>
            ))}
          </div>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <Button className={classes.checkMoreButton}
              onClick={() => window.open("https://github.com/ahsieh53632")}
            >
              {`Check out my github for more :)`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef((props, ref) => (
  <Projects {...props} forwardedRef={ref} />
));
