import React from "react";
import {
  makeStyles,
  Typography,
  Card,
  lighten,
  fade,
  CardContent,
  Paper,
  Chip,
  Avatar,
  IconButton,
} from "@material-ui/core";

import { ReactComponent as ReactIcon } from "../icons/react.svg";
import { ReactComponent as TensorFlowIcon } from "../icons/tensorflow.svg";
import { ReactComponent as NodeIcon } from "../icons/node.svg";
import { ReactComponent as GithubIcon } from "../icons/github.svg";
import { ReactComponent as PyTorchIcon } from "../icons/pytorch.svg";
import { ReactComponent as PythonIcon } from "../icons/python.svg";
import { ReactComponent as AWSIcon } from "../icons/aws.svg";
import { ReactComponent as FlaskIcon } from "../icons/flask.svg";
import { ReactComponent as DemoIcon } from "../icons/demo.svg";
import bitcamp from "../icons/bitcamp.png";

const useStyles = makeStyles((theme) => ({
  root: ({ img, ...rest }) => ({
    width: "35vw",
    height: "25vw",
    maxWidth: "60vw",
    background: `url(${process.env.PUBLIC_URL + "/img/" + img})`,
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    margin: "50px",
    flexShrink: 0,
    "&:hover": {
      backgroundImage: `url(${process.env.PUBLIC_URL + "/img/" + img})`,
      transition: "opacity 500ms ease-out",
    },
  }),

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
    },
  },

  title: {
    color: `${theme.palette.darkGreen.main}`,
    padding: "30px 3rem 0px 50px",
  },

  descriptionBar: {},
}));

const textBlockStyles = makeStyles((theme) => ({
  projectName: {
    color: "white",
    fontSize: "3rem",
  },

  description: {
    fontSize: "1.5rem",
    wordSpacing: ".33rem",
    letterSpacing: ".33rem",
    paddingTop: "1.5rem",
    color: `${lighten(theme.palette.text.main, 0.5)}`,
  },

  chip: {
    color: lighten(theme.palette.text.main, 0.7),
    border: `2px solid ${lighten(theme.palette.text.main, 0.7)}`,
    margin: "5px 5px 5px 10px",
    padding: "15px",
  },

  chipContainer: ({align, ...rest}) => ({
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    flexWrap: "wrap",
    justifyContent: align !== "left" ? "flex-end" : "flex-start",
    listStyle: "none",
    transform: align !== "left" ? "translateX(10px)" : "translateX(-10px)",
    paddingTop: "15px",
    margin: 0,
    background: "transparent",
  }),

  icon: {
    fill: fade(theme.palette.text.main, 0.8),
    width: "25x",
    height: "25px",
  },

  award: {
    color: `${lighten(theme.palette.red.main, 0.7)}`,
    fontSize: "1.2rem",
  },

  textContainer: {
    margin: "50px 50px 0px 50px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },

  tryItOut: {
    minHeight: "100px",
    flexGrow: 0,
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    marginBottom: "10%",
  },

  descriptionBox: {
    overflowY: "scroll",
    flex: 1,
  },

  bottomIcons: {
    fill: "white",
    "&:hover": {
      transition: "all 300ms ease",
      fill: `${lighten(theme.palette.secondary.main, 0.3)}`,
    },
  },

  iconButton: ({align, ...rest}) => ({
    width: "60px",
    height: "60px",
    marginTop: "20px",
    transform: align !== "left" ? "translateX(12px)" : "translateX(-12px)",
    background: "#233554",
  }),

  avatar: {
    width: "50px",
    height: "50px",
    margin: "0 35px 0 35px",
  },
}));

const TextBlock = ({
  projectName,
  description,
  featureLanguage,
  github,
  award,
  awardLogo,
  align,
  demoLink,
  img,
  ...rest
}) => {
  const classes = textBlockStyles(({align, ...rest}));

  const logoMap = {
    React: <ReactIcon className={classes.icon} />,
    TensorFlow: <TensorFlowIcon className={classes.icon} />,
    Pytorch: <PyTorchIcon className={classes.icon} />,
    Node: <NodeIcon className={classes.icon} />,
    Python: <PythonIcon className={classes.icon} />,
    Flask: <FlaskIcon className={classes.icon} />,
    bitcamp: bitcamp,
  };

  return (
    <div className={classes.textContainer}>
      <div>
        <Typography className={classes.projectName} align={align}>
          {projectName}
        </Typography>
        {award && (
          <Typography className={classes.award} align={align}>
            {award}
          </Typography>
        )}
        <Paper className={classes.chipContainer} elevation={0}>
          {featureLanguage?.map((item, index) => (
            <Chip
              icon={logoMap?.[`${item}`]}
              label={item}
              className={classes.chip}
              variant="outlined"
            ></Chip>
          ))}
        </Paper>
      </div>
      <div className={classes.descriptionBox}>
        <Typography className={classes.description}>{description}</Typography>
      </div>
      <div
        className={classes.tryItOut}
        style={{ justifyContent: align === "left" ? "flex-start" : "flex-end" }}
      >
        {github && (
          <IconButton
            className={classes.iconButton}
            onClick={() => window.open(`${github}`)}
          >
            <GithubIcon className={classes.bottomIcons} />
          </IconButton>
        )}
        {demoLink && (
          <IconButton
            className={classes.iconButton}
            onClick={() => window.open(`${demoLink}`)}
            disableFocusRipple
            disableTouchRipple
          >
            <DemoIcon className={classes.bottomIcons} />
          </IconButton>
        )}
      </div>
    </div>
  );
};

function ProjectDescription(props) {
  const classes = useStyles(props);

  return (
    <div style={{ display: "flex", flexDirection: "row", maxHeight: "600px" }}>
      {props.direction !== "left" && (
        <div style={{ flexGrow: 1 }}>
          <TextBlock {...props} align="left" />
        </div>
      )}

      <Card className={classes.root} elevation={24}>
        <CardContent style={{ margin: 0, padding: 0 }}>
          <div className={classes.cover} />
        </CardContent>
      </Card>

      {props.direction === "left" && (
        <div style={{ flexGrow: 1 }}>
          <TextBlock {...props} align="right" />
        </div>
      )}
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
