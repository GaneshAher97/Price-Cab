import { createStackNavigator } from "@react-navigation/stack";


import AboutUs from "../../screens/AboutUs";
import CustomerBiding from "../../screens/CustomerBiding";
import DriverApper from "../../screens/DriverAppear/DriverAppear";
import Home from "../../screens/Home";
import DrawerNavigator from "../drawer-navigator/DrawerNavigator";





const Stack = createStackNavigator();

const StackNavigation = () => {

  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomePage" component={DrawerNavigator} />

      <Stack.Screen name="CustomerBiding" component={CustomerBiding} />
      <Stack.Screen name="DriverApper" component={DriverApper} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
    
   
      
      
     
      
      
   
      







    </Stack.Navigator>
  )

}

export default StackNavigation;
