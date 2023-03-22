import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebaseConfig from "../../firebaseConfig";
import Colors from "../../configs/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";

const windowheight = Dimensions.get("screen").height;
const windowwidth = Dimensions.get("window").width;
export const isMobile = (no) => {
  let regx = /^\d{10}$/;
  return regx.test(no);
};

export default class ForgotPass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: null,
      name: null,
      email: null,
      verificationId: "",
    };

    this.recaptchaVerifier = React.createRef();
  }

  onChangePhone = (text) => {
    this.setState({
      phoneNumber: text,
    });
  };

  onChangeEmail = (text) => {
    this.setState({
      email: text,
    });
  };

  onChangeName = (text) => {
    this.setState({
      name: text,
    });
  };

  login = async () => {
    this.setState({ showLoader: true });
    if (isMobile(this.state.phoneNumber)) {
      // console.log(this.state.phoneNumber);
      this.setState({ showLoader: false });

      this.props.navigation.navigate("OtpVerification", {
        phn: this.state.phoneNumber,
      });
    } else {
      this.setState({ phoneNumberValidationFailed: true, showLoader: false });
      return false;
    }
  };

  sendVerification = () => {
    this.props.navigation.navigate("OtpVerification", {
      phn: this.state.phoneNumber,
    });
  };

  signin = () => {
    this.props.navigation.goBack();
  };

  render = () => {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView automaticallyAdjustKeyboardInsets={true}>
          {/* <FirebaseRecaptchaVerifierModal
          ref={this.recaptchaVerifier}
          firebaseConfig={firebaseConfig.app().options}
          attemptInvisibleVerification={false}
        /> */}

          <View>
            <Image
              source={require("../../assets/top.png")}
              style={{ width: windowwidth, height: 160 }}
            />
          </View>

          <View style={styles.section}>
            <View style={{ marginBottom: 10 }}>
              <Image
                resizeMode="contain"
                source={require("../../assets/pass.png")}
                style={{ width: "100%", height: 200 }}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                Lost Password
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 12,
                  marginBottom: 10,
                }}
              >
                Enter new password
              </Text>
            </View>

            <View style={{ marginTop: 10 }}>
              {/* <Text style={styles.buttonText}>Enter Mobile No. or Email Id</Text> */}
              <View style={styles.textInput}>
                <View style={{ width: "100%" }}>
                  <TextInput
                    label={"Enter New Password"}
                    mode="outlined"
                    outlineColor={Colors.inputlabel}
                    activeOutlineColor={Colors.inputlabel}
                    selectionColor={Colors.inputlabel}
                    value={this.state.phoneNumber}
                    onChangeText={this.onChangeName}
                    style={{ fontSize: 16, backgroundColor: "white" }}
                  />
                </View>
              </View>
            </View>

            <View style={{ marginTop: 0 }}>
              {/* <Text style={styles.buttonText}>Enter Mobile No. or Email Id</Text> */}
              <View style={styles.textInput}>
                <View style={{ width: "100%" }}>
                  <TextInput
                    label={"Confirm New Password"}
                    mode="outlined"
                    outlineColor={Colors.inputlabel}
                    activeOutlineColor={Colors.inputlabel}
                    selectionColor={Colors.inputlabel}
                    value={this.state.phoneNumber}
                    onChangeText={this.onChangeEmail}
                    style={{ fontSize: 16, backgroundColor: "white" }}
                  />
                </View>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
              onPress={this.sendVerification}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={[styles.buttonText, { color: "white" }]}>
                  Save
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={this.signin}>
              <View style={{ marginTop: 10, alignItems: "center" }}>
                <Text
                  style={{
                    color: Colors.black,
                    fontWeight: "bold",
                    fontSize: 14,
                    marginTop: 5,
                  }}
                >
                  I remember my old password
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ width: "100%", flexDirection: "row" }}>
            <View style={{ width: "30%" }}></View>
            <View style={{ width: "70%" }}>
              <Image
                source={require("../../assets/bottom.png")}
                style={{ width: "100%", height: 150 }}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  section: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  heading: {
    fontSize: 36,
    color: Colors.white,
    textAlign: "center",
  },
  inputContainer: {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    //paddingVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginVertical: 10,
    paddingVertical: 5,
    width: "100%",
  },
  flagImageStyle: {
    marginHorizontal: 5,
    height: 25,
    width: 25,
    //borderRadius: 25/2,
    resizeMode: "cover",
    alignItems: "center",
  },

  textInput: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    paddingTop: 5,
  },

  button: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: Colors.black,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.black,
    marginBottom: 5,
    marginLeft: 5,
    fontWeight: "bold",
  },
});
