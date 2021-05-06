import React from "react";
import VizSensor from "react-visibility-sensor";
import { makeStyles, Typography, lighten, fade, Fade } from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import experienceData from "../static/experience";
import VerticleTabs from "./VerticleTab";


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "110vh",
    backgroundColor: lighten(theme.palette.background.blue, 0.05),
    // backgroundPosition: "center 50%",
    //...theme.typography.fontFamily,
    display: "flex",
    flexDirection: "column",
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

  const [active, setActive] = React.useState(false);
  const theme = useTheme();
  const notSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <VizSensor
      onChange={(isVisible) => {
        // if (active && !isVisible) return
        setActive(isVisible);
      }}
      partialVisibility={true}
      offset={{
        bottom: `${window.innerHeight * 0.5}`,
        top: `${window.innerHeight * 0.4}`,
      }}
    >
      <div className={classes.root} ref={props?.forwardedRef}>
        {/* <Slide in={active} direction="right" timeout={{enter: 1500, exit: 1500}}> */}
        <div id="filler" style={{ flexGrow: 1 }} />
        <div>
          <Fade in={active} timeout={{ enter: 800, exit: 800 }}>
            <div className={classes.ExpContainer} style={{width: !notSmallScreen ? "95vw" : "80vw"}}>
              <span className={classes.spanCorner}></span>
              <Typography variant="h2" className={classes.title}>
                Experience
              </Typography>
              <ColoredLine style={{ width: "50%", marginLeft: "3rem" }} />
              <VerticleTabs data={experienceData} />
            </div>
          </Fade>
        </div>
        <div id="filler" style={{ flexGrow: 1 }} />
        {/* </Slide> */}
      </div>
    </VizSensor>
  );
}

export default React.forwardRef((props, ref) => (
  <Experience {...props} forwardedRef={ref} />
));
