import React from "react";
import VizSensor from "react-visibility-sensor";
import {
  makeStyles,
  Typography,
  lighten,
  Button,
  Fade,
  Slide,
} from "@material-ui/core";

import Particles from "react-particles-js";
import particlesConfig from "../config/particlesConfig";

import ProjectDescription from "./ProjectDescription";

import projectData from "../static/projectData";

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
    borderRadius: "10px",
    padding: "30px",
    margin: "15px",
    border: `3px dashed ${theme.palette.darkGreen.main}`,
    "&:hover": {
      backgroundColor: `${lighten(theme.palette.red.main, 0.7)}`,
      border: "none",
    },
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

  const [active, setActive] = React.useState(false);
  return (
    <div style={{ height: "unset" }}>
      <VizSensor
        onChange={(isVisible) => {
          setActive(isVisible);
        }}
        partialVisibility={true}
        offset={{
          bottom: `${window.innerHeight * 0.4}`,
          top: `${window.innerHeight * 0.4}`,
        }}
      >
        <div className={classes.root} ref={props?.forwardedRef}>
          <Slide in={active} direction="up" timeout={2000}>
            <div>
              <Fade in={active} timeout={1500}>
                <div className={classes.ExpContainer}>
                  <span className={classes.spanCorner}></span>
                  <Typography
                    variant="h2"
                    className={classes.title}
                    align="right"
                  >
                    Projects
                  </Typography>
                  <ColoredLine style={{ width: "50%", marginRight: "3rem" }} />
                  <div className={classes.projectContainer}>
                    {projectData.map((item, index) => (
                      <ProjectDescription
                        key={index}
                        direction={index % 2 === 0 ? "left" : "right"}
                        {...item}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      className={classes.checkMoreButton}
                      onClick={() =>
                        window.open("https://github.com/ahsieh53632")
                      }
                    >
                      <Typography variant="h5">{`Check out my github for more :)`}</Typography>
                    </Button>
                  </div>
                </div>
              </Fade>
            </div>
          </Slide>
        </div>
      </VizSensor>
    </div>
  );
}

export default React.forwardRef((props, ref) => (
  <Projects {...props} forwardedRef={ref} />
));
