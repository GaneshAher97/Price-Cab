import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, styles.boxWithShadow]}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/d768/6849/0e004a0ef2ca3947a1930efa65706398?Expires=1678060800&Signature=nXL45TZibHJlHR9NVTxk1Nplj6yGCr6orLgeZ3TlzAWW9AJ7kM8tPqNshCLGn4R7vgmU32yKApf3AtpVCgG-RX0-dEaSWNZNdDUHflQ2JN60prEYMQl6U0ILGnNtbG0IsX1uRXtv6RIyOtRx8w1Ypej8Sl2yGKqeAnxEHBIkotA1PHqsK0rHIOoNXk~ICqT-xLgL5rFWYx99Qdh0Fp-glYRZ1alrStfE7vLcpcvVyWnrWANu5QRZ4bbWlpui-IyOLPI7V0VmoU3e4K9ea9JLyYEIG33v~GCQiTqzBZ4tJ6EiQOR0MIb7J3-2cR9JZbUhVEGkxOotmG~40s3vsqxniQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          }}
          height={150}
          width={150}
          borderRadius={35}
        />
      </View>
      <View>
        <Text style={styles.textCont}>Price You Decide</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 50,
  },
  imageContainer: {
    width: "40%",
    height: "20%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 43,
  },
  textCont: {
    fontFamily: "Nunito",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
    top: 40,
  },
});
export default SplashScreen;
