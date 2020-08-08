import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  List,
  Typography,
  Box,
  makeStyles,
  ListItemIcon,
} from "@material-ui/core";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import VpnKeyIcon from '@material-ui/icons/VpnKey';


const useStyles = makeStyles({
  drawerSlider: {
    width: 250,
    background: "#511",
    height: "30rem",
  },
});

const Drawer = (props) => {
  var itemsList = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => 
        props.history.push("/Admin")
    },
    {
      text: "Add new admin",
      icon: <PersonAddIcon />,
      onClick: () => 
        props.history.push("/AddAdmin")
    },
    {
      text: "Login",
      icon: <VpnKeyIcon />,
      onClick: () => 
        props.history.push("/AdminLogin")
    },
    {
      text: "Logout",
      icon: <ExitToAppIcon />,
      onClick: () => {
        console.log(props);
        localStorage.removeItem("usertoken");
        console.log("Admin loged out");
        props.history.push("/");
      },
    },
  ];

  
  const [state, setState] = useState({
    right: false,
  });
  const toggle = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box onClick={toggle(slider, false)}>
      <List>
        {itemsList.map((index, key) => (
          <ListItem button key={key} onClick = {index.onClick}>
            <ListItemIcon>{index.icon}</ListItemIcon>
            <ListItemText primary={index.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar style={{ background: "#cc6699" }}>
          <Toolbar>
            <IconButton onClick={toggle("right", true)}>
              <MenuIcon style={{ color: "#ffffff" }} />
            </IconButton>
            <Typography variant="h5" align="center">
              {" Nanny Care "}
            </Typography>
            <MobileRightMenuSlider
              open={state.right}
              onClose={toggle("right", false)}
            >
              {sideList("right")}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default withRouter(Drawer);
