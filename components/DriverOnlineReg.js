import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	FlatList,
	Button,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const dataList = [
	{
		id: 1,
		title: "Basic info",
		isChecked: true,
		screen : 'Registration',
	
	},
	{
		id: 2,
		title: "DrivingLicense",
		isChecked: true,
		screen : 'DrivingLicense',
	},
	{
		id: 3,
		title: "Selfie with ID",
		isChecked: true,
		screen : 'SelfieWithId',

	},
	{
		id: 4,
		title: "Vehicle info",
		isChecked: false,
		
		screen : 'VehicleInfo',
		
	},
	{
		id: 5,
		title: "Registration Certificate (RC)",
		isChecked: false,
		screen : 'RegistrationCertificate',
		
		
	},
	{
		id: 6,
		title: "Referal Code",
		isChecked: false,
		
		screen : 'Refferal',

		

	},
];

const DriverOnlineReg = () => {
	const navigation = useNavigation();

	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				style={{
					flexDirection: "row",
					width: "100%",
					borderBottomWidth: 1,
					borderColor: "#E3E3E3",
					height: 50,
					alignItems: "center",
					justifyContent: "space-between",
				}}
				onPress= {() => navigation.navigate(item.screen)} 
			>
				<View
					style={{
						flexDirection: "row",
						width: "auto",
						// borderWidth: 1,
						height: 42.95,
						alignItems: "center",
						justifyContent: "space-between",
						marginLeft: 7,
					}}
				>
					<Ionicons
						name="checkmark-circle"
						size={24}
						color={item.isChecked ? "green" : "#A1A1A1"}
					/>
					<Text style={{ fontSize: 16, color: "grey", marginLeft: 10 }}>
						{item.title}
					</Text>
				</View>
				<View>
					<AntDesign name="right" size={26} color="#A1A1A1" />
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.container}>
			<View style={styles.categoryBox}>
				<View>
					<FlatList
						data={dataList}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
					/>
				</View>
				<View style={styles.term_conditionBox}>
					<Text
						style={{
							textAlign: "center",
							fontSize: 12,
							color: "#A1A1A1",
							fontWeight: "600",
							lineHeight: 13.42,
						}}
					>
						By tapping Submit I agree with{" "}
						<Text style={{ color: "black" }}>Terms and conditions,</Text>{" "}
						I acknowledge and agree with processing and transfer of
						personal data accounting to conditions of{" "}
						<Text style={{ color: "black" }}>Privacy Policy.</Text>
					</Text>
				</View>
				<TouchableOpacity
					style={{
						width: "96%",
						top: 180,
						// borderWidth: 1,
						justifyContent: "center",
						height: 50,
						backgroundColor: "#A1A1A1",
						borderRadius: 5,
					}}
					onPress={() => navigation.navigate("DriverWaitForCustomer")}
				>
					<Text
						style={{
							color: "black",
							fontSize: 18,
							fontWeight: "600",
							textAlign: "center",
							fontFamily: "Raleway",
						}}
					>
						Submit
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: windowWidth,
		height: windowHeight,
		top: 80,
		backgroundColor: "white",
	},
	categoryBox: {
		width: "100%",
		height: 350,
		// borderWidth: 1,
		backgroundColor: "white",
		alignItems: "center",
	},
	term_conditionBox: {
		width: 320,
		height: 50,
		// position: "absolute",
		// borderWidth: 1,
		top: 150,
		display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
		fontize: 11,
       lineHeight: 13.42,
	},
});

export default DriverOnlineReg;