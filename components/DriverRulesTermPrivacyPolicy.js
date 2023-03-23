import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import DriverRulesTermService from './DriverRulesTermService';


const DriverRulesTermPrivacyPolicy = () => {
    return (
        <View style={Styles.Container}>
            <Text style={Styles.ServiceR}>

                Privacy Policy


            </Text>
            <Text style={Styles.Lorem1}>
                Lorem Ipsum is simple




            </Text>
            <View style={Styles.Sub1}>
                <Text style={Styles.SubText1}>
                    Lorem Ipsum is simply dummy
                    text of the printing and
                    typesetting industry. Lorem
                    Ipsum has been the industry's
                    the 1500s, when an unknown printer
                    took a galley of type and scrambled
                    it to make a type specimen book.
                    t has survived not only five
                    centuries, but also the leap
                    into electronic typesetting,
                    remaining essentially unchanged.
                    t was popularised in the 1960s with
                    he release of Letraset sheets containing
                    Lorem Ipsum passages.


                </Text>

            </View>













            <Text style={Styles.Lorem2}>
                Lorem Ipsum is simple




            </Text>
            <View style={Styles.Sub2}>
                <Text style={Styles.SubText2}>
                    Lorem Ipsum is simply dummy
                    text of the printing and
                    typesetting industry. Lorem
                    Ipsum has been the industry's
                    standard dummy text ever since
                    the 1500s, when an unknown printer
                    took a galley of type and scrambled
                    it to make a type specimen book.
                    It has survived not only five centuries,
                    but also the leap into electronic.


                </Text>

            </View>
        </View>

    )
}
export default DriverRulesTermPrivacyPolicy;




const Styles = StyleSheet.create({
    Container: {
        // backgroundColor: 'red',
        backgroundColor: 'teal',

    },
    ServiceR: {
        // backgroundColor: 'red',
        position: 'absolute',
        width: 132,
        height: 47,
        left: 21,
        top: 98,
       
    fontWeight: '700',
        fontSize: 20,
        lineHeight: 46,
        display: 'flex',
        alignItems: 'center',
        textAlign: "justify",
        color: '#000000',



    },
    Lorem1: {

        position: 'absolute',
        width: 170,
        height: 27,
        left: 20,
        top: 147,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'justify'

    },

    SubText1: {
        //  backgroundColor: 'grey',
        position: 'absolute',
        width: 320,
        height: 216,
        left: 21,
        top: 172,
        fontWeight: '500',
        fontSize: 13,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'justify',
        lineHeight: 21,
        color: '#000000',

    },

    Lorem2: {
        top: 401,
        position: 'absolute',
        width: 170,
        height: 27,
        left: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'justify',


    },
    SubText2: {
        //  backgroundColor: 'grey',
        position: 'absolute',
        width: 320,
        height: 306,
        left: 21,
        top: 426,
        fontWeight: '500',
        fontSize: 13,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'justify',
        lineHeight: 21,
        color: '#000000',

    },
})