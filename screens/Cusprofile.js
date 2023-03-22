import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";
import moment from "moment/moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import Colors from "../configs/colors";
import { useState } from "react";
import Header from "../components/Header";

const Cusprofile = (props) => {
  const data = [
    { label: "Male", value: "1" },
    { label: "Female", value: "2" },
    { label: "Third Gender", value: "3" },
  ];
  const data1 = [
    { label: "Delhi", value: "1" },
    { label: "Mumbai", value: "2" },
    { label: "Kolkata", value: "3" },
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDate(date);
  };

  return (
    <View style={styles.mastercontainer}>
      <View style={styles.headerContainer}>
        <View style={{ backgroundColor: Colors.primary, paddingVertical: 10 }}>
          <Header leftIconName="menu-outline" />
        </View>
      </View>

      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/driver1.png")}
            style={{
              position: "absolute",
              bottom: -50,
            }}
          />
        </View>

        <View style={styles.inputField}>
          <TextInput
            placeholder="Alex Brown "
            type="type"
            style={[styles.input, { marginTop: 60, marginBottom: "5%" }]}
          />
          <FontAwesome
            style={styles.icon1}
            name="user-circle-o"
            size={19}
            color="grey"
          />
        </View>

        <View style={[styles.middilecontent, { marginBottom: "2%" }]}>
          <View>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 0.5,
                borderRadius: 6,
                padding: "5%",
                justifyContent: "flex-start",
                alignItems: "center",
                height: 40,
              }}
            >
              <Fontisto
                name="date"
                size={17}
                color="grey"
                style={{ marginRight: 5 }}
              />
              <TouchableOpacity
                onPress={() => {
                  showDatePicker();
                }}
              >
                <Text
                  style={[
                    props.styleProps,
                    props.isDarkMode ? styles.lightMode : "black",
                    { fontSize: 12 },
                  ]}
                >
                  {props.mode == "time"
                    ? moment(date).format("LT")
                    : moment(date).format("ddd, MMM Do YYYY")}
                </Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode={props.mode}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                // onChange={onChange}
                // onHide={onHide}
                isDarkModeEnabled={true}
              />
            </View>
          </View>
          <View style={{ width: "35%" }}>
            {/* {renderLabel()} */}
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={data}
              // search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Male"
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <FontAwesome5 name="transgender" size={18} color="grey" />
              )}
            />
          </View>
        </View>

        <View style={styles.inputField}>
          <TextInput
            placeholder="+123456789 "
            type="number"
            style={[styles.input, { marginBottom: "2%" }]}
          />
          <FontAwesome
            style={styles.icon}
            name="phone"
            size={22}
            color="grey"
          />
        </View>

        <View style={styles.inputField}>
          <TextInput
            placeholder="alexbrown2023@gmail.com "
            type="email"
            style={[styles.input, { marginBottom: "6%" }]}
          />
          <Ionicons style={styles.icon} name="mail" size={19} color="black" />
        </View>

        <View
          style={{
            width: "92%",
            marginHorizontal: "4%",
            marginBottom: "5%",
          }}
        >
          {/* {renderLabel()} */}
          <Dropdown
            style={[styles.dropdown1, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={data1}
            // search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Location"
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <Ionicons name="ios-location" size={18} color="grey" />
            )}
          />
        </View>

        <View style={{ marginHorizontal: "4%", marginBottom: "5%" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              paddingVertical: 10,
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              borderRadius: 4,
              // marginTop: "4%",
            }}
            onPress={() => alert("account created")}
          >
            <Text style={{ color: "white" }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.lastcontainer}>
        <Text
          style={{
            color: "black",
            textDecorationLine: "underline",
            fontSize: 15,
          }}
        >
          Log out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cusprofile;

const styles = StyleSheet.create({
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
    borderWidth: 0.5,
    borderRadius: 10,
  },
  headerContainer: {
    width: "100%",
  },
  inputField: {
    // marginBottom: "3%",
  },
  middilecontent: {
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 140,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    // padding: "5%",
    borderRadius: 8,
    paddingLeft: 28,
    fontSize: 14,
    // marginBottom: "5%",
  },

  dropdown: {
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  dropdown1: {
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: "3%",
  },
  // icon: {
  //   marginRight: 5,
  // },
  middilecontent: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "3%",
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 25,
  },
  icon: {
    position: "absolute",
    left: 17,
    top: 23,
  },
  icon1: {
    position: "absolute",
    left: 16,
    top: 70,
  },
  lastcontainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: "6%",
  },
});
