import {
  View, Text, Image, TouchableOpacity,
} from "react-native";
import { Ionicons, AntDesign } from '@expo/vector-icons';

import { color } from "react-native-reanimated";
import Colors from "../configs/colors";

import { TextInput } from "react-native-paper";

// import { useNavigation } from "@react-navigation/native";

// Registration Certificate 

const Settings = () => {
  // const navigation=useNavigation()
  return (
    <View>

      <View>

        <Image source={require("../assets/register.png")}
          style={{
            width: 282,
            height: 184,

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
              top: 180,
              left: 19,
              fontWeight: '700',
              fontSize: 25,

              lineHeight: 29,
              textAlign: 'center',




            }}> Registration Certificate </Text>

        </View>



      </View>













      <View style={{

        width: 322,
        height: 44,

        top: 240,
        left: 0,
        // borderColor:'#7D7D7D',
        // borderWidth:1.5,
        borderRadius: 5,


      }}>
        <TextInput
          label={"Vehicle Number Plate"}
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


      </View>
      <View style={{
        width: 322,
        height: 44,
        top: 270,


        //  borderColor:'#7D7D7D',
        //  borderWidth:1.5,
        borderRadius: 5
      }}>
        <TextInput
          label={"Vehicle Photo With  Number Plate"}
          mode="outlined"
          activeOutlineColor={Colors.inputlabel}



          style={{
            height: 60,
            left: 18,
            fontSize: 15,
            bottom: 13,
            paddingLeft: 20,
            fontFamily: 'Nunito',


            color: '#303030',
            borderColor: '#7D7D7D',

          }}
        />

        <View style={{ bottom: 65, marginLeft: 25, width: '95%', height: 45, backgroundColor: '#E8E8E8', borderRadius: 5, }} >
          <Ionicons style={{ alignItems: 'center', textAlign: 'center', top: 10, right: 8 }} name="ios-add" size={24} color="#AAAAAA" />

        </View>





      </View>








      <View
        style={{

          width: 322,
          height: 75,
          top: 305,
          left: 20,
          borderColor: '#7D7D7D',
          borderWidth: 1.5,
          borderRadius: 5,


        }}
      >
        <Text style={{

          left: 30,
          fontSize: 15,
          bottom: 13,
          width: 190,
          backgroundColor: '#F9F1F1',
          // backgroundColor:'white',
          color: '#303030',







        }}>
          Registration Certificate(RC)</Text>


        <View style={{ width: 138, height: 56, left: 6, bottom: 10, backgroundColor: '#E8E8E8', borderRadius: 5, }} >
          <Ionicons style={{ paddingLeft: 55, paddingTop: 15 }} name="ios-add" size={24} color="#AAAAAA" />

        </View>

        <View style={{ width: 136, height: 58, left: 176, bottom: 68, backgroundColor: '#E8E8E8', borderRadius: 5, }} >
          <Ionicons style={{ paddingLeft: 56, paddingTop: 15, }} name="ios-add" size={24} color="#AAAAAA" />

        </View>


      </View>
      {/* fourth */}


      <View
        style={{

          width: 322,
          height: 75,
          top: 325,
          left: 20,
          borderColor: '#7D7D7D',
          borderWidth: 1.5,
          borderRadius: 5,


        }}
      >
        <Text style={{

          left: 30,
          fontSize: 15,
          bottom: 13,
          width: 210,
          backgroundColor: '#F9F1F1',
          // backgroundColor:'white',
          color: '#303030',







        }}>
          Permit(Commercial Certificate)</Text>


        <View style={{ width: 138, height: 56, left: 6, bottom: 10, backgroundColor: '#E8E8E8', borderRadius: 5, }} >
          <Ionicons style={{ paddingLeft: 55, paddingTop: 15 }} name="ios-add" size={24} color="#AAAAAA" />

        </View>

        <View style={{ width: 136, height: 58, left: 176, bottom: 68, backgroundColor: '#E8E8E8', borderRadius: 5, }} >
          <Ionicons style={{ paddingLeft: 56, paddingTop: 15, }} name="ios-add" size={24} color="#AAAAAA" />

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
          label={"Vehicle Incuranse Photo"}
          mode="outlined"
          activeOutlineColor={Colors.inputlabel}



          style={{
            height: 60,
            left: 18,
            fontSize: 15,
            bottom: 13,
            paddingLeft: 20,
            fontFamily: 'Nunito',


            color: '#303030',
            borderColor: '#7D7D7D',

          }}
        />

       
        <View style={{ bottom: 65, marginLeft: 25, width: '95%', height: 45, backgroundColor: '#E8E8E8', borderRadius: 5, }} >
          <Ionicons style={{ alignItems: 'center', textAlign: 'center', top: 10 }} name="ios-add" size={24} color="#AAAAAA" />

        </View>

      </View>




        

      <View
      style={{ position: 'absolute', width: 330, height: 45, left: 15, top: 676, backgroundColor: '#F6FA00', borderRadius: 5 }}>
        <Text style={{ fontWeight: '700', lineHeight: 25, width: 318, height: 38, fontSize: 15, textAlign: 'center', alignItems: 'center', top: 10, color: "black" }}>

          Save

        </Text>
       </View>




    </View>
  );

}



export default Settings;