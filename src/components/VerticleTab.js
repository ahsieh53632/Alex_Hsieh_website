import React from "react";
import {
  makeStyles,
  Typography,
  Tab,
  Tabs,
  Box,
  Icon,
  Fade,
} from "@material-ui/core";

import { ReactComponent as ArrowRight } from "../icons/right.svg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{overFlow: "auto", flexGrow: 1, opacity: value !== index ? 0 : 1}}
    >
      {value === index && (
        <div style={{paddingTop: "12px", paddingLeft: "12px"}}>
          <div>{children}</div>
        </div>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    key: `tab-${index}`,
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    color: "white",
    display: "flex",
    height: "60vh",
    borderRadius: "15px",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.text.main}`,
    minWidth: "88px",
  },

  icon: {
    width: "70px",
    height: "70px",
    marginLeft: "15px",
    objectFit: "cover",
    borderRadius: "15px",
    border: "2px solid white",
  },

  position: {
    paddingLeft: "25px",
    color: `${theme.palette.darkGreen.main}`,
  },

  descriptionContainer: {
    width: "60vw",
    height: "50vh",
    paddingLeft: "2rem",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
    overflowWrap: "break-word",
  },

  description: {
    letterSpacing: ".2rem",
    textAlign: "left",
  },

  arrowRight: {
    fill: "white",
    width: "50px",
    height: "50px",
    padding: "10px",
    paddingTop: "2rem",
    paddingBottom: "0",
  },
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        className={classes.tabs}
      >
        {props.data &&
          props.data.map((item, index) => (
            <Tab
              label={item?.name || null}
              {...a11yProps(index)}
              disableRipple
            />
          ))}
      </Tabs>
      
      {props.data &&
        props.data.map((item, index) => (
          <Fade in={value === index} timeout={850} key={index} unmountOnExit>
            <div>
            <TabPanel value={value} index={index} key={index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* <Avatar alt={item.name} src={item.logo} variant="square" className={classes.icon} /> */}
                <Typography variant="h3" className={classes.position}>
                  <span>
                    <Typography variant="h2" style={{color: "white", display: "inline"}}>
                    {item.position.substring(0, 2)}
                    </Typography>
                  </span>
                  {item.position.substring(2)}
                </Typography>

                <div className={classes.descriptionContainer}>
                  {item.description.map((text, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      className={classes.description}
                    >
                      <Icon>
                        <ArrowRight className={classes.arrowRight} />
                      </Icon>
                      {text}
                    </Typography>
                  ))}
                </div>
              </div>
            </TabPanel>
            </div>
          </Fade>
        ))}
    </div>
  );
}
