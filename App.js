import 'react-native-gesture-handler';
import React from "react";
import GlobalState from "./context/GlobalState";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navigation from "./components/Navigation";
import AppContext from "./context/AppContext";
import CustomerHelp from "./screens/CustomerHelp";
import { NavigationContainer } from "@react-navigation/native";
import DriverApper from "./screens/DriverAppear/DriverAppear";
import CusSafety from "./screens/CusSafety";
import { View } from "react-native";
import { Provider } from 'react-native-paper';

export default class App extends React.Component {

  render() {
    return (
      <Provider>
        <GlobalState>

          <Navigation />

        </GlobalState>
      </Provider>

    );
  }

}
