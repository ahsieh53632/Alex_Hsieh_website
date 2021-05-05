import React from "react";
import { makeStyles, Card, Typography, fade } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import logo from "./logo.svg";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage"
import Experience from "./components/Experience"
import Projects from "./components/Projects"


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.blue,
    // backgroundPosition: "center 50%",
    ...theme.typography.fontFamily,
  },

  container: {
    minHeight: "100vh",
    width: "90%",
    margin: "0 auto",
    paddingLeft: "1.6rem",
  },

  Card: {
    background: `linear-gradient(to bottom right, ${fade(theme.palette.darkGreen.main, .5)}, 60%, ${fade("#cad2c5", .5)})`,
    borderRadius: "15px",
    minWidth: "90vw",
    minHeight: "75vh",
    position: "absolute",
    right: "3rem",
    bottom: "7rem",
    marginLeft: "10rem"
  },

  HeaderText: {
    color: "white",
    fontFamily: "Amatic SC",
    top: "30%",
    position: "absolute"
  }
}));

const sections = ["experience", "projects"];


function App() {
  const classes = useStyles();
  const expRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const mainRef = React.useRef(null);

  const scrollDown = (ref) => {
    let r = ref || expRef
    r?.current?.scrollIntoView({behavior: 'smooth'});
  }

  const sections = ([
    {
      label: "experince",
      ref: expRef
    },
    {
      label: "projects",
      ref: projectsRef
    }
  ])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header sections={sections} scrollDownFunc={scrollDown} mainRef={mainRef}/>
      <div className={classes.container} ref={mainRef}>
        <LandingPage scrollDownFunc={scrollDown} ref={mainRef} />
      </div>
      <Experience  ref={expRef}/>
      <Projects ref={projectsRef} />
    </div>
  );
}

export default App;
