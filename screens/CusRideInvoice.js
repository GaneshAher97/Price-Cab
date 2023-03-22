import { View, Text, Image,Button,Alert,StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
// import Header from '../components/Header';
import { useNavigation } from "@react-navigation/native"
import Header from '../components/Header';
import colors from '../configs/colors';


const windoWidth = Dimensions.get("window").width
const windoHeight = Dimensions.get("window").height

const CusRideInvoice = () => {
  return (
    <View  style={style.master}>
      
      <View style={style.headerContainer}>
        <View style={{ backgroundColor: colors.primary, paddingVertical: 10 }}>
          <Header leftIconName="menu-outline" />
        </View>
      </View>

       <View  style={style.container}>
      <View style={style.ImageContainer}>
        <Image 
          source={require("../assets/heroImage.png")}
          style={style.heroImage}
        
        />
      </View>
      <View style={style.textContainer}>
        <View style={style.textPostion} >
          <Text style={style. titleText}>Driver Name:</Text>
          <Text style={style.title2Text}>Alex Brown</Text>
        </View>
        <View style={style.textPostion}>
          <Text style={style. titleText}>Driver Number:</Text>
          <Text style={style.title2Text}>FED7854714</Text>
        </View>
        <View style={style.textPostion}>
          <Text style={style. titleText}>Driver Rating</Text>
          <View style={style.icon}>
                         
                                 <Ionicons name="star-sharp" size={18} color="#ffa651" />
                                 <Ionicons name="star-sharp" size={18} color="#ffa651" />
                                 <Ionicons name="star-sharp" size={18} color="#ffa651" />
                                 <Ionicons name="star-sharp" size={18} color="#ffa651" />
                                 <Ionicons name="ios-star-outline" size={18} color="#ffa651" />
                                 <Text style={style.title2Text}>(4.5)</Text>
                                 </View>
        </View>
        <View style={style.textPostion}>
          <Text style={style.titleText}>Taxi Number</Text>
          <Text style={style.title2Text}>WB-89-72</Text>
        </View>
        <View style={style.textPostion}>
          <Text style={style.titleText}>Pickup Location</Text>
          <Text style={style.title2Text}>52nd West Marilyn Street</Text>
        </View>
        <View style={style.textPostion}>
          <Text style={style.titleText}>Drop Location</Text>
          <Text style={style.title2Text}>85th West Alison Graveyard</Text>
        </View>
        <View style={style.textPostion}>
          <Text style={style.titleText}>Journey Date</Text>
          <Text style={style.title2Text}>15-02-2023</Text>
        </View>
        <View style={style.textPostion}>
          <Text style={style.titleText}>Amount</Text>
          <Text style={style.priceText}>{'\u20B9'}500</Text>
        </View>
       
      </View>
      <View style={style.buttonPostion}>
        <View style={style.buttonOne}>
        <TouchableOpacity style={{backgroundColor:"#C1C1C1",paddingVertical:14,alignItems:"center",justifyContent:"center"}}>
          <Text style={{color:"#000000", fontWeight:"700", fontSize:13}}>Share</Text>
        </TouchableOpacity>
        </View>
        <View style={style.buttonTwo}>
       
        <TouchableOpacity style={{backgroundColor:"#000",paddingVertical:14,alignItems:"center",justifyContent:"center"}}>
          <Text style={{color:"#FFFFFF", fontWeight:"700", fontSize:13}}>Support</Text>
        </TouchableOpacity>
        </View>
       
        
      </View>
      <Image 
           source={require("../assets/paidImage.png")}
          // style={{width: 70, height: 50,alignItems:"center"}}
          style={style.paidImage}
        
        />
    </View>
    </View>
   
  )
}

const style = StyleSheet.create({
  master:{
    flex:1,
    justifyContent:"center",
    // width:windoWidth,
    // height:windoHeight,
    // alignItems:"center", 
    // fontFamily:"Nunito",
  },
  container:{
    position:"relative",
    alignItems:"center", 
    width:"95%",
    // height:"auto",
    justifyContent:"center",
    borderRadius:10,
    borderColor:"#DCDCDC",
    borderWidth:1,
    backgroundColor:"#F6F6F6",
    paddingBottom:"5%",
    shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,

  },
  ImageContainer:{
    position:"absolute",
    top:-55,
  },
  headerContainer: {
    width: "100%",
    position: "absolute",
    top: 0
  },
  heroImage:{
    width: 110, 
    height: 110,
    borderRadius:100,
    borderColor:"#DCDCDC",
    borderWidth:1,
  },
  textContainer:{
    width:"90%",
    height:"auto",
    marginBottom:"2%",
    marginTop:"15%",
  },
  textPostion:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical:6
  },
  titleText:{
    fontWeight:"500",
    fontSize:15,
  },
  title2Text:{
    fontSize: 15
  },
  priceText:{
    fontWeight:"700",
    fontSize:20,
  },
  icon:{
    flexDirection:"row"
  },
  buttonPostion:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"90%",
    marginBottom:"2%",
    marginTop:"1%"
  },
  buttonOne:{
    width:"48%",
    fontSize:13,
  },
  buttonTwo:{
    color:"#f194ff",
    width:"48%",
  },
  paidImage:{
    width:200,
    height:130,
    opacity:0.2,
    position:"absolute",
  }
})

export default CusRideInvoice