import React from "react";
import { makeStyles, fade } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

import Particles from "react-particles-js";
import particlesConfig from "./config/particlesConfig";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.blue,
    // backgroundPosition: "center 50%",
    ...theme.typography.fontFamily,
  },

  Card: {
    background: `linear-gradient(to bottom right, ${fade(
      theme.palette.darkGreen.main,
      0.5
    )}, 60%, ${fade("#cad2c5", 0.5)})`,
    borderRadius: "15px",
    minWidth: "90vw",
    minHeight: "75vh",
    position: "absolute",
    right: "3rem",
    bottom: "7rem",
    marginLeft: "10rem",
  },

  HeaderText: {
    color: "white",
    fontFamily: "Amatic SC",
    top: "30%",
    position: "absolute",
  },
}));

function App() {
  const classes = useStyles();
  const expRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const mainRef = React.useRef(null);

  const scrollDown = (ref) => {
    let r = ref || expRef;
    r?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    {
      label: "experince",
      ref: expRef,
    },
    {
      label: "projects",
      ref: projectsRef,
    },
  ];

  return (
    <div className={classes.root}>
      <div style={{ position: "fixed", zIndex: 0 }}>
          <Particles height="100vh" width="100vw" params={particlesConfig} />
        </div>
      <CssBaseline />
      <Header
        sections={sections}
        scrollDownFunc={scrollDown}
        mainRef={mainRef}
      />
      <LandingPage scrollDownFunc={scrollDown} ref={mainRef} />
      <Experience ref={expRef} />
      <Projects ref={projectsRef} />
    </div>
  );
}

export default App;
