import {
    View, Text, Image,TouchableOpacity,
  
  } from "react-native";
  import { Ionicons, AntDesign } from '@expo/vector-icons';
  
  import { color } from "react-native-reanimated";
  
  import { TextInput } from "react-native-paper";
  import Colors from "../configs/colors";
  
  import { useNavigation } from "@react-navigation/native";
  
  
  // Driving License
  
  const DrivingLicense = () => {
    const navigation=useNavigation()
    return (
      <View>
  
        <View>
  
          <Image source={require("../assets/register.png")}
            style={{
              width: 282,
              height: 184,
              top: 96,
              left: 49,
              position: "absolute",
              // borderWidth:1,
              // borderColor:'red'
            }} />
  
  
          <View
          >
            <Text
  
              style={{
                // borderWidth:1,
                // borderColor:'blue',
                position: 'absolute',
                width: 320,
                height: 28,
                top: 280,
                left: 19,
                fontWeight: '700',
                fontSize: 25,
  
                lineHeight: 29,
                textAlign: 'center',
  
  
  
  
              }}> Driving License</Text>
  
          </View>
  
  
  
        </View>
  
  
        <View style={{
          width: 322,
          height: 44,
          top: 350,
  
  
          //  borderColor:'#7D7D7D',
          //  borderWidth:1.5,
          borderRadius: 5
        }}>
          <TextInput
            label={"License Number"}
            mode="outlined"
            activeOutlineColor={Colors.inputlabel}
  
  
  
            style={{
              left: 18,
              fontSize: 15,
              bottom: 13,
              paddingLeft: 10,
              fontFamily: 'Nunito',
  
  
              color: '#303030',
              borderColor: '#7D7D7D',
  
            }}
          />
        </View>
  
  
        <View style={{
  
          width: 322,
          height: 44,
          top: 380,
          left: 0,
          // borderColor:'#7D7D7D',
          // borderWidth:1.5,
          borderRadius: 5,
  
  
        }}>
          <TextInput
            label={"Date of Expiration"}
            mode="outlined"
            activeOutlineColor={Colors.inputlabel}
  
  
            style={{
              left: 18,
              fontSize: 15,
              bottom: 13,
              paddingLeft: 10,
              color: '#303030',
              borderColor: '#7D7D7D',
              fontFamily: 'Nunito',
  
            }}
          />
          <AntDesign name="calendar" size={24} color="black"
            style={{ position: "absolute", right: 0, top: 10, color: "#AAAAAA" }} />
  
  
        </View>
  
  
  
  
  
  
  
  
        <View
          style={{
  
            width: 322,
            height: 70,
            top: 407,
            left: 20,
            borderColor: '#7D7D7D',
            borderWidth: 1.5,
            borderRadius: 5,
  
  
          }}
        >
          <Text style={{
  
            left: 20,
            fontSize: 15,
            bottom: 13,
            width: 90,
            backgroundColor: '#F9F1F1',
            // backgroundColor:'white',
            color: '#303030',
  
  
  
  
  
  
  
          }}>
            License Pic</Text>
  
  
          <View style={{ width: 138, height: 50, marginLeft: 6, bottom: 11, backgroundColor: '#E8E8E8', borderRadius: 5, }} >
            <Ionicons style={{ paddingLeft: 55, marginLeft: 0 }} name="ios-add" size={24} color="#AAAAAA" />
            <Text style={{ paddingLeft: 45, marginLeft: 0, color: '#AAAAAA' }}> Front</Text>
          </View>
  
          <View style={{ width: 136, height: 50, left: 176, bottom: 60, backgroundColor: '#E8E8E8', borderRadius: 5, }} >
  
            <Ionicons style={{ alignItems: 'center', textAlign: 'center' }} name="ios-add" size={24} color="#AAAAAA" />
  
            <Text style={{ textAlign: 'center', color: '#AAAAAA' }}> Back</Text>
          </View>
  
  
        </View>
       
  
        <TouchableOpacity onPress={()=>{navigation.navigate("DriverOnlineReg")}} 
        style={{ position: 'absolute', width: 330, height: 45, left: 15, top: 600, backgroundColor: '#F6FA00', borderRadius: 5 }}>
          <Text style={{ fontWeight: '700', lineHeight: 25, width: 318, height: 38, fontSize: 15, textAlign: 'center', alignItems: 'center', top: 10, color: "black" }}>
  
            Save
  
          </Text>
  
          </TouchableOpacity>
  
  
  
  
      </View>
    );
  
  }
  
  
  
  export default DrivingLicense;