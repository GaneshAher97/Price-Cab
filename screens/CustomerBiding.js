import React, { useEffect, useRef, useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	Image,
	Dimensions,
	TouchableOpacity,
	ScrollView,
	FlatList,
	StatusBar,
	ImageBackground,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Colors from "../configs/colors";
import Header from "../components/Header";
import AppContext from "../context/AppContext";
import {
	fetchUsers,
	totalGet,
	totalGive,
	getTrasactions,
} from "../services/ApiServices";
import moment from "moment";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import { SafeAreaView } from "react-native-safe-area-context";
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from "@react-navigation/native";

const windowheight = Dimensions.get("screen").height;
const windowwidth = Dimensions.get("window").width;

const CustomerBiding = (props) => {
	const [text, onChangeText] = React.useState(210);
	const [selected, setSelected] = useState("Parties");
	const [parties, setParties] = useState([]);
	const [userData, setUserData] = useState([]);
	const [totalGet, setTotalGet] = useState(null);
	const [totalGive, setTotalGive] = useState(null);
	const [transactions, setTransactions] = useState(null);

	const navigation = useNavigation();

	const sheetRef = useRef();

	useEffect(() => {
		sheetRef.current.open();
	}, []);

	return (
		<KeyboardAvoidingView style={styles.container}>
			<View style={{ backgroundColor: Colors.primary, paddingVertical: 10 }}>
				<Header leftIconName="menu-outline" title="" />
			</View>

			<ImageBackground
				source={{ uri: "https://i.stack.imgur.com/gtiI7.gif" }}
				style={{ height: 400, width: windowwidth }}
			>
				<View
					style={{
						alignItems: "center",
						backgroundColor: "white",
						marginHorizontal: 10,
						padding: 10,
						zIndex: 9999,
						elevation: 10,
						bottom: 10,
						borderRadius: 15,
						paddingVertical: 15,
					}}
				>
					<View style={{ flexDirection: "row" }}>
						<View
							style={{
								paddingRight: 5,
								backgroundColor: Colors.textInput,
								paddingVertical: 4,
								paddingHorizontal: 10,
								borderTopLeftRadius: 15,
								borderBottomLeftRadius: 15,
							}}
						>
							<Ionicons
								name="locate-outline"
								size={20}
								style={{ color: Colors.darkgrey }}
							/>
						</View>
						<View style={{ width: "90%" }}>
							<TextInput
								style={styles.input}
								placeholder={"My Current Location"}
								placeholderTextColor={Colors.newGrey2}
								onChangeText={onChangeText}
								value={text}
							/>
						</View>
					</View>

					<View
						style={{
							borderLeftWidth: 1,
							borderColor: Colors.darkgrey,
							borderStyle: "dashed",
							height: 20,
							right: 165,
						}}
					></View>

					<View style={{ flexDirection: "row" }}>
						<View
							style={{
								paddingRight: 5,
								backgroundColor: Colors.textInput,
								paddingVertical: 4,
								paddingHorizontal: 10,
								borderTopLeftRadius: 15,
								borderBottomLeftRadius: 15,
							}}
						>
							<Ionicons
								name="location-outline"
								size={20}
								style={{ color: Colors.darkgrey }}
							/>
						</View>
						<View style={{ width: "90%" }}>
							<TextInput
								style={styles.input}
								placeholder={"Drop Location"}
								placeholderTextColor={Colors.newGrey2}
								onChangeText={onChangeText}
								value={text}
							/>
						</View>
					</View>
				</View>
			</ImageBackground>
			<View>
				<RBSheet
					ref={(ref) => {
						sheetRef.current = ref;
					}}
					enablePanDownToClose={true}
					height={360}
					openDuration={250}
					customStyles={{
						container: {
							justifyContent: "center",
							backgroundColor: Colors.white,
							borderTopLeftRadius: 50,
							borderTopRightRadius: 50,
						},
					}}
				>
					<View style={{}}>
						<View
							style={{
								backgroundColor: Colors.white,
								borderTopLeftRadius: 50,
								borderTopRightRadius: 50,
								alignItems: "center",
								paddingVertical: 10,
								paddingHorizontal: 10,
							}}
						>
							{/* <Text
								style={{
									color: Colors.black,
									fontSize: 36,
									fontWeight: "600",
								}}
							>
								INR 275
							</Text> */}

							<TextInput
								style={{
									color: Colors.black,
									fontSize: 36,
									fontWeight: "600",
								}}
								editable={false}
								placeholderTextColor={Colors.black}
								onChangeText={onChangeText}
								value={`INR ${text}`}
							/>

							<View
								style={{
									flexDirection: "row",
									width: "85%",
									height: 0,
									borderBottomWidth: 1,
									borderBottomColor: "#D9D9D9D9",
									marginTop: 10,
								}}
							></View>

							<View style={{ marginVertical: 10 }}>
								<Text
									style={{
										color: "#7D7D7D",
										fontSize: 13,
										fontWeight: "500",
									}}
								>
									Recommeded fare, Adjustable
								</Text>
							</View>

							<View style={{ marginTop: 10 }}>
								<View
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}
								>
									<View
										style={{
											paddingRight: 8,
											backgroundColor: "#F7F7F7",
											paddingVertical: 12.8,
											paddingHorizontal: 10,
											borderTopLeftRadius: 10,
											borderBottomLeftRadius: 10,
										}}
									>
										<Image
											style={{ width: 35, height: 35 }}
											source={require("../assets/money.jpg")}
										/>
									</View>
									<View style={{ width: "85%" }}>
										<TextInput
											style={styles.sheetInput}
											placeholder={"Cash"}
											editable={false}
											placeholderTextColor={Colors.black}
										/>
									</View>
								</View>
							</View>

							<View style={{ marginVertical: 5 }}>
								<View
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}
								>
									<View
										style={{
											paddingRight: 8,
											backgroundColor: "#F7F7F7",
											paddingVertical: 12.8,
											paddingHorizontal: 10,
											borderTopLeftRadius: 10,
											borderBottomLeftRadius: 10,
										}}
									>
										<Image
											style={{ width: 35, height: 35 }}
											source={require("../assets/qrcode.png")}
										/>
									</View>
									<View style={{ width: "85%" }}>
										<TextInput
											style={styles.sheetInput}
											placeholder={"QR-Payment"}
											editable={false}
											placeholderTextColor={Colors.black}
										/>
									</View>
								</View>
							</View>

							<View activeOpacity={0.7} style={[styles.button]}>
								<TouchableOpacity
									onPress={() => console.log("pressed close button")}
									style={{
										alignItems: "center",
										width: 150,
										height: 54,
										// borderWidth: 1,
										backgroundColor: "#DCDCDC",
										borderRadius: 5,
									}}
								>
									<Text
										style={[styles.buttonText, { color: "black" }]}
									>
										Close
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => navigation.navigate("about")}
									style={{
										alignItems: "center",
										width: 150,
										height: 54,
										// borderWidth: 1,
										backgroundColor: "black",
										borderRadius: 5,
									}}
								>
									<Text
										style={[styles.buttonText, { color: "white" }]}
									>
										Done
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</RBSheet>
			</View>
		</KeyboardAvoidingView>
	);
};

export default CustomerBiding;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		height: windowheight,
		fontFamily: "Nunito",
	},

	input: {
		backgroundColor: Colors.textInput,
		height: 30,
		borderTopRightRadius: 15,
		borderBottomRightRadius: 15,
	},

	sheetInput: {
		backgroundColor: "#F7F7F7",
		height: 60,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
		color: Colors.lightGrey,
		fontSize: 16,
		fontWeight: "500",
	},

	button: {
		marginTop: "4%",
		borderRadius: 5,
		marginHorizontal: 5,
		width: windowwidth - 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	buttonText: {
		fontSize: 15,
		marginBottom: 5,
		marginLeft: 5,
		fontWeight: "600",
		paddingVertical: 15,
	},
});
