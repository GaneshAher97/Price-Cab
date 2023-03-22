


import React, { useState, useEffect } from 'react';

import { Alert, StyleSheet, View, TouchableOpacity, Text, Image,} from 'react-native';
import { Button as PaperButton, Headline } from 'react-native-paper';
import { PaperSelect } from 'react-native-paper-select';
import { useNavigation } from "@react-navigation/native";

import { Ionicons, AntDesign } from '@expo/vector-icons';




// Vehicle Info 



export const VehicleInfo1 = (value) => {
  if (!value || value.length <= 0) {
    return 'Please select a value.';
  }

  return '';
};

export default function VehicleInfo() {

  const navigation = useNavigation()
  const [vehicle, setvehicle] = useState({
    value: '',
    list: [
      { _id: '1', value: 'A' },
      { _id: '2', value: 'B' },
      { _id: '3', value: 'OTHERS' },

    ],
    selectedList: [],
    error: '',
  });

  useEffect(() => {
    let isMounted = true;
    let _getData = async () => {
      if (isMounted) {
        setvehicle({
          ...vehicle,

          value1: 'Select your vehicle category',
          value2: 'Select your vehicle brand',
          value3: 'Select your vehicle model',
          value4: 'Select year',
          value5: 'Select your vehicle color',

          selectedList: [
            { _id: '3', value1: 'OTHERS' },

          ],
        });
      }
    };

    _getData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <View>

       <View>

       <Image source={require("../assets/register.png")}
          style={{
             width: 172,
            height: 105,
            top: 42,
            left: 95,
            position: "absolute",
            // borderWidth:1,
           // borderColor:'red'
        }} />



        <View>
          <Text

            style={{
              // borderWidth:1,
              // borderColor:'blue',
              position: 'absolute',
              width: 320,
              height: 28,
              top: 146,
              left: 19,
              fontWeight: '700',
              fontSize: 25,

              lineHeight: 29,
              textAlign: 'center',




            }}> Vehicle Info </Text>

        </View>



      </View>










      {/* First  */}
      <View style={styles.container}>


        <PaperSelect
          label="vehicle Category"
          value={vehicle.value1}
          onSelection={(value1) => {
            setvehicle({
              ...vehicle,
              value: value1.text,
              selectedList: value1.selectedList,
              error: '',
            });
          }}
          arrayList={[...vehicle.list]}
          selectedArrayList={[...vehicle.selectedList]}
          errorText={vehicle.error}
          multiEnable={false}
        />
        <View style={{ width: 25, height: 0, position: 'absolute', right: 0, top: 0, backgroundColor: '#E8E8E8', borderRadius: 5, }} >
          <AntDesign name="down" size={24} color="black"
            style={{ position: "absolute", right: 20, top: 20, color: "#AAAAAA" }}
          />

        </View>


      </View>
      {/* Second  */}
      <View style={styles.container}>

        <PaperSelect
          label="vehicle Brand "
          value={vehicle.value2}
          onSelection={(value2) => {
            setvehicle({
              ...vehicle,
              value: value2.text,
              selectedList: value2.selectedList,
              error: '',
            });
          }}
          arrayList={[...vehicle.list]}
          selectedArrayList={[...vehicle.selectedList]}
          errorText={vehicle.error}
          multiEnable={false}
        />
        <View style={{ width: 25, height: 0, position: 'absolute', right: 0, top: 0, backgroundColor: '#E8E8E8', borderRadius: 5, }} >
          <AntDesign name="down" size={24} color="black"
            style={{ position: "absolute", right: 20, top: 20, color: "#AAAAAA" }}
          />

        </View>


      </View>
      {/* third */}
      <View style={styles.container}>

        <PaperSelect
          label="vehicle Model"
          value={vehicle.value3}
          onSelection={(value3) => {
            setvehicle({
              ...vehicle,
              value: value3.text,
              selectedList: value3.selectedList,
              error: '',
            });
          }}
          arrayList={[...vehicle.list]}
          selectedArrayList={[...vehicle.selectedList]}
          errorText={vehicle.error}
          multiEnable={false}
        />
        <View style={{ width: 25, height: 0, position: 'absolute', right: 0, top: 0, backgroundColor: '#E8E8E8', borderRadius: 5, }} >
          <AntDesign name="down" size={24} color="black"
            style={{ position: "absolute", right: 20, top: 20, color: "#AAAAAA" }}
          />

        </View>

      </View>
      {/* fourth */}
      <View style={styles.container}>

        <PaperSelect
          label="vehicle Year"
          value={vehicle.value4}
          onSelection={(value4) => {
            setvehicle({
              ...vehicle,
              value: value4.text,

              selectedList: value4.selectedList,
              error: '',
            });
          }}
          arrayList={[...vehicle.list]}
          selectedArrayList={[...vehicle.selectedList]}
          errorText={vehicle.error}
          multiEnable={false}
        />
        <View style={{ width: 25, height: 0, position: 'absolute', right: 0, top: 0, backgroundColor: '#E8E8E8', borderRadius: 5, }} >
          <AntDesign name="down" size={24} color="black"
            style={{ position: "absolute", right: 20, top: 20, color: "#AAAAAA" }}
          />

        </View>

      </View>
      {/* fifth */}
      <View style={styles.container}>

        <PaperSelect
          label="vehicle Color"
          value={vehicle.value5}
          onSelection={(value5) => {
            setvehicle({
              ...vehicle,
              value: value5.text,
              selectedList: value5.selectedList,
              error: '',
            });
          }}
          arrayList={[...vehicle.list]}
          selectedArrayList={[...vehicle.selectedList]}
          errorText={vehicle.error}
          multiEnable={false}
        />
        <View style={{ width: 45, height: 0, backgroundColor: 'red', position: 'absolute', right: 0, top: 0, backgroundColor: '#E8E8E8', borderRadius: 5, }} >
          <AntDesign name="down" size={24} color="black"
            style={{ position: "absolute", right: 20, top: 20, color: "#AAAAAA" }}
          />

        </View>

      </View>

      <TouchableOpacity onPress={() => { navigation.navigate("DriverVehicleAdd") }}

        style={{ position: 'absolute', width: 330, height: 45, left: 15, top: 580, backgroundColor: '#F6FA00', borderRadius: 5 }}>
        <Text style={{
          fontWeight: '700', lineHeight: 25, width: 318, height: 38, fontSize: 15,
          textAlign: 'center', alignItems: 'center', top: 10, color: "black"
        }}>

          Save

        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
    top: 205,
    margin: 2,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },


  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    color: 'black',
  },
  label: {
    color: 'yellow'
  }
});
