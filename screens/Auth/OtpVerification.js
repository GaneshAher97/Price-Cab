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

export default class OtpVerification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: null,
      pass: null,
      verificationId: "",
    };

    this.recaptchaVerifier = React.createRef();
  }

  onChangePhone = (text) => {
    this.setState({
      phoneNumber: text,
    });
  };

  onChangePass = (text) => {
    this.setState({
      pass: text,
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
    this.props.navigation.navigate("Home", {
      phn: this.state.phoneNumber,
    });
  };

  render = () => {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView automaticallyAdjustKeyboardInsets={true}>
          <View>
            <Image
              source={require("../../assets/top.png")}
              style={{ width: windowwidth, height: 150 }}
            />
          </View>

          <View style={styles.section}>
            <View style={{ marginBottom: 10 }}>
              <Image
                source={require("../../assets/otp.png")}
                style={{ width: "100%", height: 200 }}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "700",
                  marginBottom: 10,
                }}
              >
                OTP Verification
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 10,
                  marginBottom: 10,
                  fontWeight: "500",
                }}
              >
                6 digit code has been sent to your number
              </Text>
            </View>

            <View style={{ marginTop: 10, height: 150 }}>
              <View style={styles.textInput}>
                <View style={{ width: "100%" }}>

                  <TextInput
                    label={"Enter 6 digit code"}
                    mode="outlined"
                    outlineColor={Colors.inputlabel}
                    activeOutlineColor={Colors.inputlabel}
                    selectionColor={Colors.inputlabel}
                    value={this.state.phoneNumber}
                    onChangeText={this.onChangePhone}
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
                <Text style={[styles.buttonText, { color: "black" }]}>

                  Submit

                </Text>
              </View>
            </TouchableOpacity>

            <View style={{ marginTop: 10, alignItems: "center", bottom: 80 }}>
              <Text
                style={{
                  color: Colors.black,
                  fontWeight: "500",
                  fontSize: 14,
                  marginTop: 5,
                }}
              >
                {/* I want to change my number */}
              </Text>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
            }}
          >
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
    fontFamily: "Nunito"
  },
  section: {
    padding: 20,
    // flex: 1,
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
    marginVertical: 0,
    paddingVertical: 0,
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
  },

  button: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: '#F6FA00',
    borderRadius: 5,
    marginHorizontal: 10,
    bottom: 80,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.black,
    marginBottom: 5,
    marginLeft: 5,
    fontWeight: "bold",

  },
});
