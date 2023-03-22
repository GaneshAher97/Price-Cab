import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const ButtonCom = ({
  title,
  onPress,
  buttonColor,
  titleColor,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...buttonStyle,
        backgroundColor: buttonColor || "",
      }}
      onPress={onPress}
    >
      <Text
        style={{ ...styles.title, ...textStyle, color: titleColor || "#fff" }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
 
export default ButtonCom;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  
});


// <LinearGradient
// colors={["#FFC002", "#F7F0B5", "#FFAB00"]}
// style={{ borderRadius: 15 }}
// >
// <ButtonCom
//   title="SIGN IN"
//   titleColor="#000000"
//   buttonStyle={{
//     width: 350,
//     alignSelf: "center",
//     height: 45,
//     borderRadius: 15,
//     marginTop: -1,
//   }}
//   textStyle={{ fontSize: 20, textDecorationLine: "underline" }}
//   onPress={() => console.log("I am the first button")}
// />
// </LinearGradient>


//------------------------------------------------------watch this for exanmple
{/* <ButtonCom
buttonColor="#FFC002"
titleColor="#fff"
title="hellooijgh8yug"
buttonStyle={{
  width: "60%",
  alignSelf: "center",
  borderRadius: 15,
}}
textStyle={{ fontSize: 20, textDecorationLine: "underline" }}
onPress={() => console.log("I am the third button")}
/> */}