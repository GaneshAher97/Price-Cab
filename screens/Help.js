import {
  Text,
  View,
  StyleSheet,
} from "react-native";

const Help = () => {

  return (
    <View style={styles.container}>
      <Text>Help</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Help;
