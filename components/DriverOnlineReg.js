import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { setStatusBarBackgroundColor } from "expo-status-bar";


const DriverOnlineReg =() =>{
  return(
    <View style={Styles.container}>
      <View style={Styles.basic}>
        <Ionicons name="md-checkmark-circle-outline" size={24} color="black" />
        <Text>Basic Info</Text>
      </View>

      <View style={Styles.license}>
        <Ionicons name="md-checkmark-circle-outline" size={24} color="black" />
      <Text>Driving License</Text>
      </View>

      <View style={Styles.selfie}>
      <Ionicons name="md-checkmark-circle-outline" size={24} color="black" />
        <Text>Selfie with ID</Text>
      </View>

      <View  style={Styles.vehicle}>  
        <Ionicons name="md-checkmark-circle-outline" size={24} color="black" />
      <Text>Vehicle Info</Text>
      </View>

      <View style={Styles.registration}>  
        <Ionicons name="md-checkmark-circle-outline" size={24} color="black" />
      <Text>Registration Certificate(RC)</Text>
      </View>

      <View style={Styles.referral}> 
        <Ionicons name="md-checkmark-circle-outline" size={24} color="black" />
      <Text>Referral code</Text> 
      </View>

   

       

      <View style={Styles.submitbtn}>
        <Text style={{ fontWeight: '700', lineHeight: 25, width: 318, height: 38, fontSize: 15, textAlign: 'center', alignItems: 'center', top: 10, color: "black" }}>

          Submit

        </Text>

        </View>



    </View>
  )
}
export default DriverOnlineReg ;
const Styles =StyleSheet.create({
  container:{
   
    width:'100%',
    margin:2,
   
  },
  basic:{
    position:'absolute',
    width:340,
    height:42.95,
    left:10,
    top:89,
    borderWidth:1,
    borderColor:'#E3E3E3',
    borderRadius:0,



  },
  license:{
    position:'absolute',
    width:340,
    height:42.95,
    left:10,
    top:130.51,
    borderWidth:1,
    borderColor:'#E3E3E3',
    borderRadius:0,

  },
  selfie:{
    position:'absolute',
    width:340,
    height:42.95,
    left:10,
    top:172.03,
    borderWidth:1,
    borderColor:'#E3E3E3',
    borderRadius:0,



  },
  vehicle:{
    position:'absolute',
    width:340,
    height:42.95,
    left:10,
    top:213.54,
    borderWidth:1,
    borderColor:'#E3E3E3',
    borderRadius:0,

  },
  registration:{
    position:'absolute',
    width:340,
    height:42.95,
    left:10,
    top:255.5,
    borderWidth:1,
    borderColor:'#E3E3E3',
    borderRadius:0,

  },
  referral:{
    position:'absolute',
    width:340,
    height:42.95,
    left:10,
    top:297.5,
    borderWidth:1,
    borderColor:'#E3E3E3',
    borderRadius:0,

  },
  submitbtn:{
    position: 'absolute',
width: 320,
height: 40,
left: 20,
top: 578,
BackgroundColor: '#A2A2A2',
borderRadius: 5,

  }


})