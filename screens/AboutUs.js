import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Dimensions,
	ScrollView,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import colors from "../configs/colors";

const windowheight = Dimensions.get("screen").height;
const windowwidth = Dimensions.get("window").width;

const AboutUs = () => {
	return (
		<SafeAreaView style={Styles.container}>
			<View
				style={{
					backgroundColor: colors.primary,
					paddingVertical: 20,
					width: "100%",
				}}
			>
				<Header leftIconName="menu-outline" title="" />
			</View>

			<View style={Styles.heading}>
				<Text style={Styles.about}>About Us</Text>
			</View>
			<View style={Styles.details}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Text
						style={{
							fontSize: 13,
							fontWeight: "500",
							lineHeight: 20,
							textAlign: "justify",
							fontFamily: "Raleway",
							fontStyle: "normal",
							color: "black",
						}}
					>
						It was popularised in the 1960s with the release of Letraset
						sheets containing Lorem Ipsum passages, and more recently with
						desktop publishing software like Aldus PageMaker including
						versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
						the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when
						an unknown printer took a galley of type and scrambled it to
						make a type specimen book. It has survived not only five
						centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the
						1960s with the release of Letraset sheets containing Lorem
						Ipsum passages, and more recently with desktop publishing
						software like Aldus PageMaker including versions of Lorem
						Ipsum.Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industry's.
					</Text>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default AboutUs;

const Styles = StyleSheet.create({
	container: {
		width: windowwidth,
		height: windowheight,
		borderWidth: 1,
		alignItems: "center",
		flex: 1,
	},
	heading: {
		position: "absolute",
		width: "30%",
		height: 38,
		// borderWidth: 1,
		top: 110,
		left: 10,
	},
	about: {
		fontFamily: "Raleway",
		fontStyle: "normal",
		fontWeight: "700",
		fontSize: 20,
		flexDirection: "row",
		alignItems: "center",
		textAlign: "justify",
	},
	details: {
		position: "absolute",
		width: "94%",
		height: "40%",
		// borderWidth: 1,
		top: 147,
		flexDirection: "row",
	},
});
