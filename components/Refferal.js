import {
    View, Text, Image,
    TouchableOpacity,
  } from "react-native";
  import { Ionicons, AntDesign } from '@expo/vector-icons';
  
  import { color } from "react-native-reanimated";
  
  import { TextInput } from "react-native-paper";
  import Colors from "../configs/colors";
  import { useNavigation } from "@react-navigation/native";
  
  //  Referral
  
  const Refferal = () => {
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
                top: 300,
                left: 19,
                fontWeight: '700',
                fontSize: 25,
  
                lineHeight: 29,
                textAlign: 'center',
  
  
  
  
              }}> Referral</Text>
  
          </View>
  
  
  
        </View>
  
  
        <View style={{
          width: 322,
          height: 44,
          top: 380,
  
  
          //  borderColor:'#7D7D7D',
          //  borderWidth:1.5,
          borderRadius: 5
        }}>
          <TextInput
            label={"Referral Code"}
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
  
  
  
        <TouchableOpacity onPress={()=>{navigation.navigate("DriverRulesTermPrivacyPolicy")}}
        style={{ position: 'absolute', width: 330, height: 45, left: 15, top: 450, backgroundColor: '#F6FA00', borderRadius: 5 }}>
          <Text style={{ fontWeight: '700', lineHeight: 25, width: 318, height: 38, fontSize: 15, textAlign: 'center', alignItems: 'center', top: 10, color: "black" }}>
  
            Submit
  
          </Text>
          </TouchableOpacity>
  
  
        <TouchableOpacity onPress={()=>{navigation.navigate("DriverRulesTermLicense")}}
         style={{ position: 'absolute', width: 330, height: 45, left: 15, top: 520, backgroundColor: '#E0E0E0', borderRadius: 5 }}>
          <Text style={{ fontWeight: '700', lineHeight: 25, width: 318, height: 38, fontSize: 15, textAlign: 'center', alignItems: 'center', top: 10, color: "black" }}>
  
            Skip
  
          </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{navigation.navigate("DriverRefferalEarnEB")}}
         style={{ position: 'absolute', width: 330, height: 45, left: 15, top: 620, backgroundColor: '#E0E0E0', borderRadius: 5 }}>
          <Text style={{ fontWeight: '700', lineHeight: 25, width: 318, height: 38, fontSize: 15, textAlign: 'center', alignItems: 'center', top: 10, color: "black" }}>
  
            Skip
  
          </Text>
          </TouchableOpacity>
  
  
  
  
  
      </View>
    );
  
  }
  
  
  
  export default Refferal;