
import React from "react";
import { View, Text, StyleSheet, } from "react-native";

const DriverRulesTermService = () => {
    return (
        <View style={Styles.Container}>
            <Text style={Styles.ServiceR}>
                Service Rules

            </Text>
            <View style={Styles.Sub}>
                <Text style={Styles.SubText}>
                    Lorem Ipsum is simply dummy text
                    of the printing and typesetting
                    industry. Lorem Ipsum has been
                    the industry's standard dummy
                    text ever since the 1500s,
                    when an unknown printer took
                    a galley of type and scrambled
                    it to make a type specimen book.
                    It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised
                    in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker i
                    ncluding versions o.


                </Text>

            </View>
        </View>

    )
}
export default DriverRulesTermService;

const Styles = StyleSheet.create({
    Container: {
        // backgroundColor: 'red',
        backgroundColor: 'teal',

    },
    ServiceR: {
        // backgroundColor: 'red',
        position: 'absolute',
        width: 125,
        height: 47,
        left: 17,
        top: 99,
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 20,
        display: 'flex',
        alignItems: 'center',
        color: '#000000',



    },
    Sub: {

    },
    SubText: {
        //  backgroundColor: 'grey',
        position: 'absolute',
        width: 320,
        height: 265,
        left: 17,
        top: 144,
        fontWeight: '500',
        fontize: 13,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'justify',
        lineHeight: 21,
        color: '#000000',
    }
})