import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerContent from './CustomDrawerContent';

import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import RideHistory from '../../screens/RideHistory';
import Faq from '../../screens/Faq';
import Settings from '../../screens/Settings';
import Help from '../../screens/Help';
import RateOurApp from '../../screens/RateOurApp';
import ShareApp from '../../screens/ShareApp';
import Cusprofile from '../../screens/Cusprofile';
import CusRideInvoice from '../../screens/CusRideInvoice';
import CustomerHelp from '../../screens/CustomerHelp';
import AboutUs from '../../screens/AboutUs';
import Vehicle from '../../screens/Vehicle';
import Footer from '../../components/SaveButton';
// import Selfie from '../../screens/Selfie';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawerContent />}
      screenOptions={{
        headerShown: false
      }}
    >
      <Drawer.Screen name="HomeScreen" component={Home} />
      <Drawer.Screen name="Vehicle" component={Vehicle} />
      {/* <Drawer.Screen name="Selfie" component={Selfie} /> */}
      <Drawer.Screen name="RideHistory" component={CusRideInvoice} />
      <Drawer.Screen name="Faq" component={Faq} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="Help" component={CustomerHelp} />
      <Drawer.Screen name="RateOurApp" component={RateOurApp} />
      <Drawer.Screen name="ShareApp" component={ShareApp} />
      <Drawer.Screen name="Footer" component={Footer} />
    </Drawer.Navigator>
  );

};

export default DrawerNavigator;
