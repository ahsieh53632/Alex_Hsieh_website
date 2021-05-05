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

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    paddingTop: "5%",
    backgroundColor: lighten(theme.palette.background.blue, 0.05),
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
    height: "75vh",
    width: "80vw",
    border: "3px solid tranparent",
    margin: "0 auto",
    backgroundColor: `${fade(theme.palette.text.main, 0.3)}`,
    borderTopRightRadius: "15px",
    borderBottomLeftRadius: "15px",
    "&::after": {
      display: "block",
      content: '""',
      width: "100px",
      height: "100px",
      position: "absolute",
      top: "-5px",
      left: "-5px",
      borderTop: "5px solid white",
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
      bottom: "-5px",
      right: "-5px",
      borderBottom: "3px solid white",
      borderRight: "3px solid white",
    },
  },

  title: {
    color: `${theme.palette.secondary.main}`,
    padding: "30px 0px 0px 50px",
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

function Experience(props) {
  const classes = useStyles();

  return (
    <>
      <div style={{ position: "absolute" }}>
        <Particles height="90vh" width="90vw" params={particlesConfig} />
      </div>
      <div className={classes.root} ref={props?.forwardedRef}>
        <div className={classes.ExpContainer}>
          <span className={classes.spanCorner}></span>
          <Typography variant="h2" className={classes.title}>
            Experience
          </Typography>
          <ColoredLine style={{ width: "50%", marginLeft: "3rem" }} />
          <VerticleTabs data={experienceData} />
        </div>
      </div>
    </>
  );
}

export default React.forwardRef((props, ref) => (
  <Experience {...props} forwardedRef={ref} />
));
