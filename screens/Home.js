import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Colors from "../configs/colors";
import Header from "../components/Header";

const windowheight = Dimensions.get("screen").height;
const windowwidth = Dimensions.get("window").width;

const Home = () => {
	

		return (
			<View style={{
      
        width: '100%',
        height: '100%',
     
        backgroundColor: '#0009',
     
      
        }}>
				<Header
        leftIconName= 'menu-outline'

        rightIconName='ellipse' />
        
        <ImageBackground source={{uri : 'https://s01.sgp1.cdn.digitaloceanspaces.com/article/ycshduasza-1538741311.jpeg'}} style={styles.image} >
          


     
          <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>


            <Text style={styles.homeTexT1}>
              
              You are offline
            </Text>

            <Text style={styles.homeTexT2}> 
              Toggle to come online and get you upcomming booking 
            </Text>
          </View>

        </ImageBackground>
       
     
			</View>
		);
	};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: windowheight,
   
  },

  image:{
    width: '100%',
    height: '96%',
    opacity: 0.2,

  },
  
  homeTexT1:{
  
   fontSize: 20,
   color:'white',
 
   padding: 10,
  
   opacity: 0.5,
 },
 homeTexT2:{
  color:'white',
   fontSize:12,
   opacity: 0.5,
 },
  
});

export default Home ;

