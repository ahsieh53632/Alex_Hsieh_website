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
} from "@material-ui/core";

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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
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
      border: "2px solid white"
  },

  position: {
      paddingLeft: "25px",
      color: `${theme.palette.darkGreen.main}`
      
  }

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
        aria-label="Vertical tabs example"
        className={classes.tabs}
        disableRipple
      >
        {props.data &&
          props.data.map((item, index) => (
            <Tab label={item?.name || null} {...a11yProps(index)} disableRipple/>
          ))}
      </Tabs>

      {props.data &&
        props.data.map((item, index) => (
          <TabPanel value={value} index={index}>
            <div></div>
            <div style={{display: "flex", alignItems: "center"}}>
                <Avatar alt={item.name} src={item.logo} variant="square" className={classes.icon} />
                <Typography variant="h5" className={classes.position}>{item.position}</Typography>
            </div>
          </TabPanel>
        ))}
    </div>
  );
}
