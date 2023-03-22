import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "../navigators/stack-navigator/StackNavigation";
import LoginStack from "../navigators/stack-navigator/LoginStack";

import AsyncStorage from "@react-native-async-storage/async-storage";
import AppContext from "../context/AppContext";

import { fetchAccount } from "../services/ApiServices";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
    };
  }
  static contextType = AppContext;

  componentDidMount() {
    AsyncStorage.getItem("phoneNumber")
      .then((phone) => {
        fetchAccount(phone)
          .then((result) => {
            if (result) {
              console.log("result is-->", result);

              this.setState({ isLoggedin: true }, () => {
                this.context.setUserData(result);
              });
            }
          })
          .catch((err) => console.log(err))
          .finally(() => { });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <NavigationContainer>
        {this.state.isLoggedin ? <StackNavigation /> : <LoginStack />}
      </NavigationContainer>
    );
  }
}
