import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import colors from '../configs/colors';
import Header from '../components/Header';

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const CusSafety = () => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: colors.yellow, paddingVertical: 10 }}>
                <Header leftIconName="menu-outline" title="Book Ride" />
            </View>
            <View style={styles.TextContainer}>
                <Text>
                    For Your Safety Do Any Of The 
                      Following Action
                </Text>
            </View>
        </View>
    )
}

export default CusSafety;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        flex: 1,
        flexDirection: "column",
    },
    TextContainer:{
      width:"56%",
      marginTop:""   
    },
})