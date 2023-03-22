import { View, Text } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import DriverAppearCart from "./DriverAppearCart";
const dataList = [
    {
        id: 1,
        title: "Name : Alex Brown",
        Vehicle: "Vehicle : SUV Sedan",
        Model: "Vehicle Model : Maruti Swift Dzire",
        image: require("../../assets/driver.png"),
        Rating: "Rating :",
        price: "500",
        time: "8 Min.",
    },
    {
        id: 2,
        title: "Name : Alex Brown",
        Vehicle: "Vehicle : SUV Sedan",
        Model: "Vehicle Model : Maruti Swift Dzire",
        image: require("../../assets/driver.png"),
        Rating: "Rating : ",
        price: "500",
        time: "8 Min.",
    },
    {
        id: 3,
        title:"Name : Alex Brown",
        Vehicle:"Vehicle : SUV Sedan",
        Model: "Vehicle Model : Maruti Swift Dzire",
        image: require("../../assets/driver.png"),
        Rating: "Rating :",
        price: "500",
        time: "8 Min.",
    },
    {
        id: 4,
        title: "Name : Alex Brown",
        Vehicle: "Vehicle : SUV Sedan",
        Model: "Vehicle Model : Maruti Swift Dzire",
        image: require("../../assets/driver.png"),
        Rating: "Rating :",
        price: "500",
        time: "8 Min.",
    },
    {
        id: 5,
        title: "Name : Alex Brown",
        Vehicle: "Vehicle : SUV Sedan",
        Model: "Vehicle Model : Maruti Swift Dzire",
        image: require("../../assets/driver.png"),
        Rating: "Rating :",
        price: "500",
        time: "8 Min.",
    },
];
const DriverApper = () => {
    return (
        <View>

            <DriverAppearCart data={dataList} />
        </View>
    );
};

export default DriverApper;
