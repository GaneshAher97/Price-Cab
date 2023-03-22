import React from "react";
import { View, Text, StyleSheet, Image, FlatList,Dimensions } from "react-native";
import {

    Modal,
    Pressable,

} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import Header from "../../components/Header";
import ButtonCom from "./ButtonCom";
import * as Progress from 'react-native-progress';
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const DriverAppearCart = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
        <View style={styles.mainContainer}>
            <Header leftIconName="menu-outline" />
            
            <FlatList
                data={props.data}
                renderItem={({ item }) => (
                    <View style={{ marginLeft: 8, marginRight:8,}}>
                        <Progress.Bar progress={0.5} width={409}  borderColor="transparent" color ="#65fefc" height={9} style={{position:"absolute",top:13,left:0, zIndex:99,borderBottomEndRadius:0,borderBottomStartRadius:0,backgroundColor:"transparent"}} />
                        <View
                            style={[
                                styles.innerList,
                                styles.boxWithShadow,
                                { marginHorizontal: 1,marginVertical:15,paddingBottom:10,paddingTop:10,position:"relative"}
                            ]}
                        >
                            <View style={{width:"23%",alignItems:"center",}}>
                            <Image style={styles.image} source={item.image}/>
                            </View>
                            <View style={{width:"75%", paddingLeft:6}} >
                                    <View style={styles.titleSection}>
                                        <Text numberOfLines={1} style={styles.titleName}>
                                            {item.title}
                                        </Text>
                                        <Text style={styles.priceText}>₹{item.price}</Text>
                                    </View>
        
                                <View style={styles.titleSection}>
                                    <Text style={styles.titleName}>{item.Vehicle}</Text>
                                    <Text style={styles.time}>{item.time}</Text>
                                </View>
                                <View style={styles.titleSection}>
                                    <Text style={styles.titleName}>{item.Model}</Text>
                                </View>

                                <View style={styles.titleSection}>
                                <Text style={styles.titleName}>{item.Rating}</Text>
                                    <View style={styles.Icon}>
                                        <Ionicons name="star-sharp" size={16} color="orange" />
                                        <Ionicons name="star-sharp" size={16} color="orange" />
                                        <Ionicons name="star-sharp" size={16} color="orange" />
                                        <Ionicons name="star-sharp" size={16} color="orange" />
                                        <Ionicons name="star-outline" size={16} color="orange" />
                                        <Text style={{fontWeight:"bold"}}>(4.5)</Text>
                                    </View>
                                </View>
                                <View style={{ width:"100%",flexDirection:"row",justifyContent:"center",paddingVerticle:10, marginTop:"5%"}}>
                                    <ButtonCom
                                        buttonColor="#FF0000"
                                        titleColor="#fff"
                                        title="Cancel"
                                        buttonStyle={{
                                            width: "48%",
                                            borderRadius: 3,
                                            marginTop: "-2%",
                                            paddingVertical:4,
                                            marginRight:8

                                        }}
                                        textStyle={{ fontSize: 16 }}
                                        onPress={() => console.log("I am the third button")}
                                    />
                                    <ButtonCom
                                        buttonColor="#00CD6B"
                                        titleColor="#fff"
                                        title="Accept"
                                        buttonStyle={{
                                            width: "48%",
                                            borderRadius: 3,
                                            marginTop: "-2%",
                                            paddingVertical:4,
                                        }}
                                        textStyle={{ fontSize: 16,}}
                                        onPress={() => console.log("I am 2nd button")}
                                    />
                                </View>
                            </View>

                        </View>

                    </View>

                )}
                keyExtractor={(item) => item.id}
            />
</View>
       
        </>
    );
};
const styles = StyleSheet.create({

    mainContainer:{
          width:windowWidth,
          height:windowHeight,
          fontFamily:"Nunito"
    },
    boxWithShadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    innerList: {
        alignItems:"center",
        flexDirection: "row",
        backgroundColor: "white",
        width:"100%",
        shadowColor: "1px",
        borderRadius: 10,
    },
    image: {
        width: 70,
        height: 70,
        alignItems:"center",
        borderRadius:50,
    },
    titleSection: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    titleName: {
        fontWeight: "800",
        fontSize: 12,
        color: "black", 
        fontFamily:"Nunito"
    },
    Icon: {
        width:"50%",
        flexDirection: "row",
        marginRight:85,
        justifyContent:"space-between"
    },
    bottomSection: {
        width: 265,
    },
    priceText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "black",
        fontFamily:"Nunito"

    },
    time:{
        fontSize: 11,
        color: "black",
    },
    
});
export default DriverAppearCart;
