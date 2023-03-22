import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,


} from 'react-native';

import {
  useNavigation,
} from '@react-navigation/native';

import {
  AntDesign,
  FontAwesome5,
  Entypo,
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,


} from '@expo/vector-icons';

const NAV_LINK_DATA = [
  {
    id: '1',
    icon: <FontAwesome5 name="car-alt" size={24} color="black" />,
    text: 'My Vehicle',
    screen: 'Vehicle',
  },
  {
    id: '2',
    icon: <FontAwesome5 name="rupee-sign" size={24} color="black" />,
    text: 'My Transaction',
    screen: 'Faq',
  },
  {
    id: '3',
    icon: <MaterialCommunityIcons name="account-question" size={24} color="black" />,
    text: 'Support',
    screen: 'Faq',
  },
  {
    id: '4',
    icon: <Ionicons name="shield-checkmark" size={24} color="black" />,
    text: 'Safety',
    screen: 'Faq',
  },
  {
    id: '5',
    icon: <Ionicons name="print-outline" size={24} color="black" />,
    text: 'Refer & Earn',
    screen: 'Faq',
  },

  {
    id: '6',
    icon: <FontAwesome5 name="info-circle" size={24} color="black" />,
    text: 'About Us',
    screen: 'AboutUs',
  },

  {
    id: '7',
    icon: <AntDesign name="questioncircle" size={24} color="black" />,
    text: 'FAQ',
    screen: 'Faq',
  },
  {
    id: '8',
    icon: <FontAwesome name="star-half-empty" size={24} color="black" />,
    text: 'Rating',
    screen: 'RateOurApp',
  },
  {
    id: '9',
    icon: <Entypo name="text-document" size={24} color="black" />,
    text: 'Rules & Terms',
    screen: 'RateOurApp',
  },
  {
    id: '10',
    icon: <Ionicons name="settings-sharp" size={24} color="black" />,
    text: 'Settings',
    screen: 'Settings',
  },

  {
    id: '11',
    icon: <Ionicons name="ios-wallet" size={24} color="black" />,
    text: 'Wallet',
    screen: 'Help',
  },

  {
    id: '12',
    icon: <Ionicons name="notifications" size={24} color="black" />,
    text: 'Notification',
    screen: 'ShareApp',
  },


];

const NavLink = ({ icon, text, screen }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.parent}>
      <TouchableOpacity
        onPress={() => navigation.navigate(screen)}
        style={styles.navLinkItem}
      >

        <View style={styles.navLinkLogo}>{icon}</View>
        <Text style={styles.navLinkText}>{text}</Text>

      </TouchableOpacity>
    </View>
  );
};

const CustomDrawerContent = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/user.png')}
            resizeMode='contain'
            style={styles.logo}
          />
          <View style={styles.greeting}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.greetingText}>Hi</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.username}>Jonathan Duncan</Text>
            </TouchableWithoutFeedback>
          </View>

        </View>

        <FlatList
          data={NAV_LINK_DATA}
          renderItem={({ item }) => <NavLink icon={item.icon} text={item.text} screen={item.screen} />}
          keyExtractor={item => item.id}
          style={styles.navLinkList}
        />

      </View>

      <View style={{
        alignItems: "center",
        position: 'absolute',
        //  padding:50,
        width: 245.08,
        height: 50,
        left: 19,
        top: 680,

        backgroundColor: '#F6FA00',
        borderRadius: 5,
      }}>
        <Text style={[styles.buttonText,
        {

          color: "black",
          Font: 'Nunito',
          //  Weight:600,
          fontSize: 22,
          padding: 6,
          Align: 'center',



        }]}> <AntDesign name="logout" size={24} color="black" />

          Log Out


        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Nunito',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: '8%',
    //  backgroundColor: '#F6FA00',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  greeting: {
    justifyContent: 'space-between',

  },
  greetingText: {
    fontSize: 20,
    color: '#232323',

  },
  username: {
    fontSize: 20,

    color: '#000000',


  },
  parent: {
    height: 40,
    width: '100%',

  },
  navLinkList: {

    margin: 2,

    height: 20,
    width: 280,





  },
  navLinkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginVertical: '2%',
    borderColor: '#E8E8E8',
    borderWidth: 1,



  },
  navLinkLogo: {
    resizeMode: 'contain',
    height: 30,
    width: 25,

  },
  navLinkText: {
    marginHorizontal: '4%',
    fontSize: 18,
    color: '#000000',


  },
});

export default CustomDrawerContent;
