import { createStackNavigator } from "@react-navigation/stack";

import MobileVerification from "../../screens/Auth/MobileVerification";
import OtpVerification from "../../screens/Auth/OtpVerification";
import ForgotPass from "../../screens/Auth/ForgotPass";
import Signup from "../../screens/Auth/Signup";
import Registration from '../../screens/Auth/Registration';
import StackNavigation from "./StackNavigation";
import { overlay } from "react-native-paper";
import Vehicle from "../../screens/Vehicle";
// import Selfie from "../../screens/Selfie"


const Stack = createStackNavigator();

const LoginStack = () => {

  return (
    <Stack.Navigator initialRouteName={"MobileVerification"}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="MobileVerification"
        component={MobileVerification}
      />
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="OtpVerification"
        component={OtpVerification}
      />
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="ForgotPass"
        component={ForgotPass}
      />
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="Home"
        component={StackNavigation}
      />
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="Registration"
        component={Registration}
      />
     <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="Vehicle"
        component={Vehicle}
      />

       {/* <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="Selfie"
        component={Selfie}
      /> */}
      

      
      
      
    </Stack.Navigator>
  );

};

export default LoginStack;
