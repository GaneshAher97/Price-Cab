import { createStackNavigator } from "@react-navigation/stack";
import DriverVehicleAdd from "../../components/DriverVehicleAdd";
import DriverVedit from "../../components/DriverVedit";
import DriverRulesTermService from "../../components/DriverRulesTermService";

import AboutUs from "../../screens/AboutUs";
import CustomerBiding from "../../screens/CustomerBiding";
import DriverApper from "../../screens/DriverAppear/DriverAppear";
import Home from "../../screens/Home";
import DrawerNavigator from "../drawer-navigator/DrawerNavigator";

import DriverOnlineReg from "../../components/DriverOnlineReg";



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
      <Stack.Screen name="DriverVehicleAdd" component={DriverVehicleAdd} />
      <Stack.Screen name="DriverVedit" component={DriverVedit} />
      <Stack.Screen name="DriverRulesTermService" component={DriverRulesTermService} />

      <Stack.Screen name="DriverOnlineReg" component={DriverOnlineReg} />








    </Stack.Navigator>
  )

}

export default StackNavigation;
