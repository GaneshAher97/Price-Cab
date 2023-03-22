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
import { Ionicons, AntDesign } from '@expo/vector-icons';
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

export default class MobileVerification extends React.Component {
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
    this.props.navigation.navigate("Vehicle", {
      phn: this.state.phoneNumber,
    });
  };

  // sendVerification = () => {
  //   try {
  //     const phoneProvider = new firebaseConfig.auth.PhoneAuthProvider();
  //     phoneProvider
  //       .verifyPhoneNumber(
  //         "+91" + this.state.phoneNumber,
  //         this.recaptchaVerifier.current
  //       )
  //       .then((id) => this.setState({ verificationId: id }))
  //       .finally(() => {
  //         this.props.navigation.navigate("OtpVerification", {
  //           phn: this.state.phoneNumber,
  //           verificationId: this.state.verificationId,
  //         });
  //       });
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  signup = () => {
    this.props.navigation.navigate("Signup");
  };

  forgotPass = () => {
    this.props.navigation.navigate("ForgotPass");
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

          {/* <View>
            <Image
              source={require("../../assets/top.png")}
              style={{ width: windowwidth, height: 150 }}
            />
          </View> */}

          <View style={styles.section}>
            <View style={{ marginBottom: 10 }}>
              <Image
                source={require("../../assets/register.png")}
                style={{ width: "100%", height: 200 }}
              />
            </View>
            {/* <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                Welcome Back
              </Text>
            </View> */}
            <View style={{ alignItems: "center" }}>

              <Text
                style={{
                  fontSize: 26,
                  marginBottom: 4,
                  fontWeight: "500"
                }}
              > Basic Info </Text>


            </View>

            <View style={{ marginTop: 10 }}>

              {/* <Text style={styles.buttonText}>Enter Mobile No. or Email Id</Text> */}
              <View style={styles.textInput}>

                <View style={{ width: "100%", margin: 7 }}>

                  <TextInput
                    label={"Full Name "}
                    mode="outlined"

                    outlineColor={Colors.inputlabel}
                    activeOutlineColor={Colors.inputlabel}
                    selectionColor={Colors.inputlabel}

                    value={this.state.phoneNumber}
                    onChangeText={this.onChangePhone}

                    style={{ fontSize: 16, backgroundColor: "white" }}
                  />
                </View>



                {/* second */}

                <View style={{ width: "100%", margin: 10 }}>
                  <TextInput
                    label={"Mobile Number"}

                    mode="outlined"
                    outlineColor={Colors.inputlabel}
                    activeOutlineColor={Colors.inputlabel}
                    selectionColor={Colors.inputlabel}
                    value={this.state.phoneNumber}
                    onChangeText={this.onChangePhone}
                    style={{ fontSize: 16, backgroundColor: "white" }}
                  />
                </View>








                <View style={{ width: "100%", margin: 10 }}>
                  <TextInput
                    label={"Email Id"}

                    mode="outlined"
                    outlineColor={Colors.inputlabel}
                    activeOutlineColor={Colors.inputlabel}
                    selectionColor={Colors.inputlabel}
                    value={this.state.phoneNumber}
                    onChangeText={this.onChangePhone}
                    style={{ fontSize: 16, backgroundColor: "white" }}
                  />
                </View>


                <View style={{ width: "100%" }}>

                  <TextInput
                    label={"Date of Birth"}

                    mode="outlined"
                    outlineColor={Colors.inputlabel}
                    activeOutlineColor={Colors.inputlabel}
                    selectionColor={Colors.inputlabel}
                    value={this.state.phoneNumber}
                    onChangeText={this.onChangePhone}

                    style={{ fontSize: 16, backgroundColor: "white" }}


                  />
                  <AntDesign name="calendar" size={24} color="black"
                    style={styles.antyIcon}
                  />
                  {/* style={styles.antyIcon} */}



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

                  Save

                </Text>
              </View>
            </TouchableOpacity>



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
    fontFamily: "Nunito"
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
    backgroundColor: '#F6FA00',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    marginLeft: 5,
    fontWeight: "bold",


  },
  antyIcon: {
    position: "absolute",
    right: 10,
    top: 18,
    color: "#AAAAAA",

  }

});
