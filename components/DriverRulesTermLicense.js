import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const DriverRulesTermLicense = () => {
    return (
        <View>
            <Text style={Styles.ServiceR}>


                Licenses


            </Text>
            <View style={Styles.Sub}>
                <Text style={Styles.SubText}>
                    Lorem Ipsum is simply dummy
                    text of the printing and typesetting
                    industry. Lorem Ipsum has been the
                    industry's standard dummy text ever
                    since the 1500s, when an unknown
                    printer took a galley of type and
                    scrambled it to make a type specimen book.
                    It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                    It was popularised in the 1960s with the
                    release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently
                    with desktop publishing software.


                </Text>

            </View>
        </View>

    )
}
export default DriverRulesTermLicense;


const Styles = StyleSheet.create({

    ServiceR: {
        // backgroundColor: 'red',
        position: 'absolute',
        width: 84,
        height: 47,
        left: 21,
        top: 107,
        // fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 20,
        display: 'flex',
        alignItems: 'center',
        color: '#000000',
        lineHeight: 46,



    },
    Sub: {

    },
    SubText: {
        //  backgroundColor: 'grey',
        position: 'absolute',
        width: 320,
        height: 235,
        left: 21,
        top: 154,
        fontWeight: '500',
        fontSize: 13,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'justify',
        lineHeight: 21,
        color: '#000000',
    }
})