import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Colors from "../configs/colors";
import Header from "../components/Header";
import AppContext from "../context/AppContext";

const windowheight = Dimensions.get("screen").height;
const windowwidth = Dimensions.get("window").width;

const CustomerHelp = () => {
  return (
    <>
      <View style={styles.mastercontainer}>
        <View style={styles.headerContainer}>
          <View
            style={{ backgroundColor: Colors.primary, paddingVertical: 10 }}
          >
            <Header leftIconName="menu-outline" />
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>Contact Admin if you have any trouble</Text>
          <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/help.png")}
            style={{
              // position: "absolute",
              width: "100%",
              height: "75%"
              // bottom: -50,
            }}
          />
        </View>
        <View style={{  marginTop: "5%", justifyContent: "flex-end" }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.primary,
              paddingVertical: 10,
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              borderRadius: 4,
              // marginTop: "4%",
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold" }}>Call Admin Immediately</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </>
  );
};
export default CustomerHelp;

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 18,
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 20
    // height:"40%",
    //  width:"40%",
  },
  mastercontainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    // borderColor: "red",
    // borderWidth: 5,
  },
  container: {
    position: "relative",
    // height: "100%",
    width: "90%",
    // left: "5%",
    // top: "20%",
    // borderWidth: 0.5,
    borderRadius: 10,
  },
  headerContainer: {
    width: "100%",
  },
});
