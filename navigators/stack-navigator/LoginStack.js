import { createStackNavigator } from "@react-navigation/stack";

import MobileVerification from "../../screens/Auth/MobileVerification";
import OtpVerification from "../../screens/Auth/OtpVerification";
import ForgotPass from "../../screens/Auth/ForgotPass";
import Signup from "../../screens/Auth/Signup";
import Registration from '../../screens/Auth/Registration';
import DrivingLicense from "../../components/DrivingLicense";
import SelfieWithId from "../../components/SelfieWithId";
import DriverVehicleAdd from "../../components/DriverVehicleAdd";
import DriverVedit from "../../components/DriverVedit";
import DriverRulesTermService from "../../components/DriverRulesTermService";
import VehicleInfo from "../../components/VehicleInfo";
import RegistrationCertificate from "../../components/RegistrationCertificate";
import Refferal from "../../components/Refferal";
import StackNavigation from "./StackNavigation";
import { overlay } from "react-native-paper";
import Vehicle from "../../screens/Vehicle";
import DriverOnlineReg from "../../components/DriverOnlineReg";
import DriverRulesTermLicense from "../../components/DriverRulesTermLicense";
import DriverRulesTermPrivacyPolicy from "../../components/DriverRulesTermPrivacyPolicy";
import DriverRefferalEarnEB from "../../components/DriverRefferalEarnEB";






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
        name="DriverOnlineReg"
        component={DriverOnlineReg}
      />
       <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="DrivingLicense"
        component={DrivingLicense}
      />
        <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="SelfieWithId"
        component={SelfieWithId}
      />
        <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="DriverVehicleAdd"
        component={DriverVehicleAdd}
      />
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="DriverVedit"
        component={DriverVedit}
      />

     <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="DriverRulesTermService"
        component={DriverRulesTermService}
      />
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="RegistrationCertificate"
        component={RegistrationCertificate}
      />
    
     

    <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="VehicleInfo"
        component={VehicleInfo}
      />
     
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="Refferal"
        component={Refferal}
      />

<Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="DriverRulesTermLicense"
        component={DriverRulesTermLicense}
      />

<Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="DriverRulesTermPrivacyPolicy"
        component={DriverRulesTermPrivacyPolicy}
      />
       <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="DriverRefferalEarnEB"
        component={DriverRefferalEarnEB}
      />
 
     <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
        name="Vehicle"
        component={Vehicle}
      />


      

      
      

      
      
      
    </Stack.Navigator>
  );

};

export default LoginStack;
