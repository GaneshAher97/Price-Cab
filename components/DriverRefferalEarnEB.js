import React from "react";
import { View, Text, StyleSheet, Image,} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const DriverRefferalEarnEB = () => {

    return (
        <View style={Styles.Parent}>


            
            <View style={Styles.SubMain1}>

            <View

                style={Styles.ReferralDiv}>
                    <Text style={Styles.ReferralAndEarned}>Show Referral Code</Text>
                </View>

                <View style={Styles.EarnedDiv}>
                    <Text style={Styles.ReferralAndEarned}>Earned Bonus</Text>
                </View>

                <Text
                    style={{
                        width: 140, height: 30,
                        left: 100, top: 47, fontWeight: '600',
                        fontSize: 16, lineHeight: 30,
                        display: 'flex', alignItems: 'center',
                        textAlign: 'center', color: '#000000',
                        // backgroundColor:'red'
                    }}> Your Earned Bonus</Text>

            </View>
            <View >
                <View style={Styles.Sub1}>
                    <Image source={require("../assets/driver1.png")}
                        style={{ width: 40, height: 39, left: 10, top: 10, }}
                    />
                    <Text style={{
                        width: 100, height: 42,
                        left: 53, fontWeight: '500',
                        fontSize: 17, lineHeight: 16,
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        bottom: 25,
                    }}>
                        Alex Brown
                    </Text>

                    <Text style={{

                        width: 100, height: 42,
                        left: 43, fontWeight: '500',
                        fontSize: 12, lineHeight: 15,
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        bottom: 45
                    }}> 05-01-2023</Text>
                    <View style={Styles.RupPrice}>
                        <FontAwesome name="rupee" size={18} color="black" />
                        <Text style={Styles.Price}>300</Text>

                    </View>
                </View>

                {/* Second */}

                <View style={Styles.Sub2}>
                    <Image source={require("../assets/driver1.png")}
                        style={{ width: 40, height: 39, left: 10, top: 10, }}
                    />
                    <Text style={{
                        width: 100, height: 42,
                        left: 53, fontWeight: '500',
                        fontSize: 17, lineHeight: 16,
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        bottom: 25,
                    }}>
                        Alex Brown
                    </Text>

                    <Text style={{

                        width: 100, height: 42,
                        left: 43, fontWeight: '500',
                        fontSize: 12, lineHeight: 15,
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        bottom: 45
                    }}> 05-01-2023</Text>
                    <View style={Styles.RupPrice}>
                        <FontAwesome name="rupee" size={18} color="black" />
                        <Text style={Styles.Price}>300</Text>

                    </View>
                </View>

                {/* third */}

                <View style={Styles.Sub3}>
                    <Image source={require("../assets/driver1.png")}
                        style={{ width: 40, height: 39, left: 10, top: 10, }}
                    />
                    <Text style={{
                        width: 100, height: 42,
                        left: 53, fontWeight: '500',
                        fontSize: 17, lineHeight: 16,
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        bottom: 25,
                    }}>
                        Alex Brown
                    </Text>

                    <Text style={{

                        width: 100, height: 42,
                        left: 43, fontWeight: '500',
                        fontSize: 12, lineHeight: 15,
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        bottom: 45
                    }}> 05-01-2023</Text>
                    <View style={Styles.RupPrice}>
                        <FontAwesome name="rupee" size={18} color="black" />
                        <Text style={Styles.Price}>300</Text>

                    </View>
                </View>

                {/* fourth */}

                <View style={Styles.Sub4}>
                    <Image source={require("../assets/driver1.png")}
                        style={{ width: 40, height: 39, left: 10, top: 10, }}
                    />
                    <Text style={{
                        width: 100, height: 42,
                        left: 53, fontWeight: '500',
                        fontSize: 17, lineHeight: 16,
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        bottom: 25,
                    }}>
                        Alex Brown
                    </Text>

                    <Text style={{

                        width: 100, height: 42,
                        left: 43, fontWeight: '500',
                        fontSize: 12, lineHeight: 15,
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        bottom: 45
                    }}> 05-01-2023</Text>
                    <View style={Styles.RupPrice}>
                        <FontAwesome name="rupee" size={18} color="black" />
                        <Text style={Styles.Price}>300</Text>

                    </View>
                </View>

                {/* fifth */}
                <View style={Styles.Sub5}>
                    <Image source={require("../assets/driver1.png")}
                        style={{ width: 40, height: 39, left: 10, top: 10, }}
                    />
                    <Text style={{
                        width: 100, height: 42,
                        left: 53, fontWeight: '500',
                        fontSize: 17, lineHeight: 16,
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        bottom: 25,
                    }}>
                        Alex Brown
                    </Text>

                    <Text style={{

                        width: 100, height: 42,
                        left: 43, fontWeight: '500',
                        fontSize: 12, lineHeight: 15,
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        bottom: 45
                    }}> 05-01-2023</Text>
                    <View style={Styles.RupPrice}>
                        <FontAwesome name="rupee" size={18} color="black" />
                        <Text style={Styles.Price}>300</Text>

                    </View>
                </View>
                
            </View>


        </View>
    )
}
export default DriverRefferalEarnEB;

const Styles = StyleSheet.create({
    Parent: {

        position: 'absolute',
        height: 387,
        with: '100%',
        height:'65%',
        left: 10,
        top: 111,

        backgroundColor: '#F1F1F1',
        borderColor: '#CDCDCD',
        borderWidth: 1,
        borderRadius: 10,



    },
    SubMain1: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 339,
        // backgroundColor: 'teal',
        // height:60,

    },
    ReferralDiv: {
        position: 'absolute',
        width: 168,
        height: 45,

        // top:111,
        backgroundColor: '#CDCDCD',
        borderTopLeftRadius: 10,


    },
    EarnedDiv: {

        position: 'absolute',
        width: 170,
        height: 45,
        left: 168,
        // top:111,
        backgroundColor: '#F6FA00',
        borderTopRightRadius: 10,

    },

    ReferralAndEarned: {
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 28,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
        top: 10
    },

    Sub1: {
        position: 'absolute',
        width: 322,
        height: 70,
        left: 9,
        top: 60,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#DBDBDB',
        borderRadius: 5,

    },
    Sub2: {
        position: 'absolute',
        width: 322,
        height: 70,
        left: 9,
        top: 140,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#DBDBDB',
        borderRadius: 5,

    },
  
    Sub3: {
        position: 'absolute',
        width: 322,
        height: 70,
        left: 9,
        top: 220,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#DBDBDB',
        borderRadius: 5,

    },

    Sub4: {
        position: 'absolute',
        width: 322,
        height: 70,
        left: 9,
        top: 300,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#DBDBDB',
        borderRadius: 5,

    },
    Sub5: {
        position: 'absolute',
        width: 322,
        height: 70,
        left: 9,
        top: 380,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#DBDBDB',
        borderRadius: 5,

    },
    RupPrice: {
        position: 'absolute',
        left: 260,
        bottom: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    Price: {

        fontWeight: '700',
        fontSize: 20,
        lineHeight: 35,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        bottom: 10,

        color: '#000000',
    }



})