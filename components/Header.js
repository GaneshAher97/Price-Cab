import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Colors from "../configs/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = (props) => {
  const navigation = useNavigation();

  const gotoBack = () => navigation.goBack();

  const profile = () => navigation.navigate("ProfileDetails");

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.white}
        animated={true}
      />
      <View style={styles.header}>  
        {props.leftIconName ? (
          <TouchableOpacity
            style={styles.leftIconContainer}
            onPress={() => navigation.toggleDrawer()}
          >
            <Ionicons
              name={props.leftIconName}
              size={28}
              color={Colors.black}
              
              style={styles.leftIcon}
            />
          </TouchableOpacity>
        ) : null}

        {props.title ? (
          <View style={styles.headerLeft }>
            <Text style={styles.headerLeftTitle}>{props.title}</Text>
            {props.subTitle ? (
              <Text style={styles.headerLeftSubTitle}>{props.subTitle}</Text>
            ) : null}
          </View>
        ) : null}
        {props.rightIconName ? (
          <View
            style={{
              width: "90%",
               alignItems: "center",
              flexDirection: "row",
              justifyContent: "flex-end",
              padding:4,
             
             
            }}
          >
            {/* fontWeight:'bold' */}
            <TouchableOpacity  
            style={{  
              flexDirection: 'row',
               padding: 5, 
               backgroundColor: '#eee',
                borderRadius: 90,
                 width: '35%',
                 paddingLeft:10
                 }} activeOpacity={1}> 
              <Ionicons
              
                name={props.rightIconName}
                size={26}
               flex={1}

                color={Colors.danger}
                
              />
              <Text style={{alignSelf: 'center',fontSize:18,margin:3,paddingLeft:1}}>Offline</Text>
              {/* style={styles.homeTexT} */}
             
             

            </TouchableOpacity>
          </View>
        ) : null}
      </View>
      
    </>
  );
};
export default Header;

const styles = StyleSheet.create({
  Ionicons:{
     display:"flex"
  },
  
  header: {
    height: 60,
    alignItems: "center",
    paddingHorizontal: 8,
    flexDirection: "row",
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor:'yellow',
    margin:5
  },
 
  headerLeft: {
    // borderWidth: 1,
    width: "65%",
    paddingLeft: 10,
    alignItems: "center",
  },
  headerLeftTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.black,
  },
  headerLeftSubTitle: {
    // color: Colors.medium,
    fontSize: 15,
  },
  leftIconContainer: {
    width: "10%",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
  },
  leftIcon: {

  }
});
