import {
  View, Text, Image, StyleSheet, TouchableOpacity,
} from "react-native";
import { Ionicons, AntDesign } from '@expo/vector-icons';

import { color } from "react-native-reanimated";

import { TextInput } from "react-native-paper";
import Colors from "../configs/colors"

// Selfie with Id

const Faq = (props) => {

  return (
    <View>

      <View>

        <Image source={require("../assets/register.png")}
          style={{
            width: 282,
            height: 184,
            top: 46,
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
              top: 240,
              left: 19,
              fontWeight: '700',
              fontSize: 25,

              lineHeight: 29,
              textAlign: 'center',




            }}> Selfie with Id</Text>

        </View>



      </View>


      <View style={{
        width: 322,
        height: 44,
        top: 310,


        //  borderColor:'#7D7D7D',
        //  borderWidth:1.5,
        borderRadius: 5
      }}>
        <TextInput
          label={"Add Your Photo"}
          mode="outlined"

          activeOutlineColor={Colors.inputlabel}

          style={styles.aYp}





        />

        <View style={{ bottom: 65, marginLeft: 25, width: '95%', height: 45, backgroundColor: '#E8E8E8', borderRadius: 5, }} >
          <Ionicons style={{ alignItems: 'center', textAlign: 'center' }} name="ios-add" size={24} color="#AAAAAA" />
          <Text style={{ color: '#AAAAAA', textAlign: 'center', }}>Upload Image</Text>
        </View>

      </View>










      <View style={{

        width: 322,
        height: 44,
        top: 345,
        left: 0,
        // borderColor:'#7D7D7D',
        // borderWidth:1.5,
        borderRadius: 5,


      }}>
        <TextInput
          label={"Addhar Card Number"}
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








      <View
        style={{

          width: 322,
          height: 75,
          top: 365,
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
          width: 90,
          backgroundColor: '#F9F1F1',
          // backgroundColor:'white',
          color: '#303030',







        }}>
          License Pic</Text>


        <View style={{ width: 138, height: 56, left: 6, bottom: 10, backgroundColor: '#E8E8E8', borderRadius: 5, }} >
          <Ionicons style={{ paddingLeft: 50 }} name="ios-add" size={24} color="#AAAAAA" />
          <Text style={{ paddingLeft: 40, color: '#AAAAAA' }}> Front</Text>
        </View>

        <View style={{ width: 136, height: 58, left: 176, bottom: 68, backgroundColor: '#E8E8E8', borderRadius: 5, }} >
          <Ionicons style={{ paddingLeft: 60 }} name="ios-add" size={24} color="#AAAAAA" />
          <Text style={{ paddingLeft: 50, color: '#AAAAAA' }}> Back</Text>
        </View>


      </View>



      <View style={{
        width: 322,
        height: 44,
        top: 390,


        //  borderColor:'#7D7D7D',
        //  borderWidth:1.5,
        borderRadius: 5
      }}>
        <TextInput
          label={"Add Your Photo"}
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
          <Ionicons style={{ alignItems: 'center', textAlign: 'center' }} name="ios-add" size={24} color="#AAAAAA" />
          <Text style={{ color: '#AAAAAA', textAlign: 'center', }}>Upload Certificate</Text>
        </View>

      </View>






           <View
           style={{ position: 'absolute', width: 330, height: 45, left: 15, top: 660, backgroundColor: '#F6FA00', borderRadius: 5 }}>
        <Text style={{ fontWeight: '700', lineHeight: 25, width: 318, height: 38, fontSize: 15, textAlign: 'center', alignItems: 'center', top: 10, color: "black" }}>

          Save

        </Text>

        </View>





    </View>
  );

}



export default Faq;



const styles = StyleSheet.create({
  aYp: {
    height: 60,
    left: 18,
    fontSize: 15,
    bottom: 13,
    paddingLeft: 10,
    fontFamily: 'Nunito',


    color: '#303030',
    borderColor: '#7D7D7D',
  },

})
