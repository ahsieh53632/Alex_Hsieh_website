import React from "react";
import {
  makeStyles,
  Typography,
  Card,
  lighten,
  fade,
  Box,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rootRight: {
    width: "35vw",
    height: "25vw",
    maxWidth: "60vw",
    // background: `url(${process.env.PUBLIC_URL + "/img/jmf.png"})`,
    background: `url(${process.env.PUBLIC_URL + "/img/jmf.png"})`,
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    margin: "50px",
  },

  rootLeft: {
    minHeight: "300px",
    maxHeight: "300px",
    maxWidth: "60vw",
    background: `url(${process.env.PUBLIC_URL + "/img/jmf.png"})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    margin: "50px",
  },

  root: {
    width: "35vw",
    height: "25vw",
    maxWidth: "60vw",
    background: `url(${process.env.PUBLIC_URL + "/img/jmf.png"})`,
    // backgroundImage: `linear-gradient(to bottom right, ${fade(
    //   theme.palette.secondary.main,
    //   0.7
    // )}, 10%, ${fade(theme.palette.darkGreen.main, 0.5)}), url(${
    //   process.env.PUBLIC_URL + "/img/jmf.png"
    // })`,
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    margin: "50px",

    "&:hover": {
      backgroundImage: `url(${process.env.PUBLIC_URL + "/img/jmf.png"})`,
      transition: "opacity 500ms ease-out",
    },
  },

  HeaderText: {
    color: "white",
    fontFamily: "Amatic SC",
    top: "30%",
    position: "absolute",
  },

  cover: {
    backgroundColor: `${fade("#379683", 0.7)}`,
    width: "35vw",
    height: "25vw",
    transition: "opacity 500ms ease-in-out",
    
    "&:hover": {
        opacity: 0,
    }
  },

  title: {
    color: `${theme.palette.darkGreen.main}`,
    padding: "30px 3rem 0px 50px",
  },

  descriptionBar: {},
}));

function ProjectDescription(props) {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {props.direction !== "left" && <div style={{ flexGrow: 1 }} />}
      <Card className={classes.root} elevation={24}>
        <CardContent style={{ margin: 0, padding: 0 }}>
          <div className={classes.cover} />
        </CardContent>
      </Card>

      <div></div>
      {/* <Card className={classes.rootLeft} ref={props?.forwardedRef}>
        TESTEST
      </Card>
      <Card className={classes.rootRight} ref={props?.forwardedRef}>
        TESTEST
      </Card> */}
    </div>
  );
}

export default React.forwardRef((props, ref) => (
  <ProjectDescription {...props} forwardedRef={ref} />
));
