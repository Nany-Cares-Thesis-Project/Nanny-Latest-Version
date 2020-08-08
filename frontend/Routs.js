import React, { Component } from "react";

import { Router, Scene } from "react-native-router-flux";
import MyDrawer from "./components/Home.js";
import AllNany from "./components/Home.js";

import MapScreen from "./components/map.js";
import Confirm from "./components/Confirmation.js";

export default class NanyApp extends Component {
  render() {
    return (
      <Router>
        <Scene>
          <Scene key="MyDrawer" component={MyDrawer} title="" />
          <Scene key="MapScreen" component={MapScreen} title="Back" />
          <Scene key="Confirm" component={Confirm} title="Back" />
          <Scene key="AllNany" component={AllNany} title="" />
        </Scene>
      </Router>
    );
  }
}
