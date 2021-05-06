import React from "react";
import {
  makeStyles,
  Typography,
  lighten,
  fade,
  Tab,
  Tabs,
  Box,
  Avatar,
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
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
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
    padding: "25px",
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
    fontSize: "1.8rem",
    color: `${theme.palette.darkGreen.main}`,
  },

  descriptionContainer: {
    width: "60vw",
    height: "50vh",
    marginLeft: "2rem",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
    overflowWrap: "break-word",
  },

  description: {
    fontSize: "1.2rem",
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
          <Fade in={value === index} timeout={850} key={index}>
            <TabPanel value={value} index={index} key={index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxHeight: "45vh",
                }}
              >
                {/* <Avatar alt={item.name} src={item.logo} variant="square" className={classes.icon} /> */}
                <Typography className={classes.position}>
                  <span style={{ fontSize: "2.5rem", color: "white" }}>
                    {item.position.substring(0, 2)}
                  </span>
                  {item.position.substring(2)}
                </Typography>

                <div className={classes.descriptionContainer}>
                  {item.description.map((text, index) => (
                    <Typography
                      key={index}
                      variant="subtitle1"
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
          </Fade>
        ))}
    </div>
  );
}
