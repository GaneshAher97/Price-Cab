import { View,Text,TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const  ShareApp = () =>{
   const navigation=useNavigation()
   return(
      <TouchableOpacity onPress={()=>{navigation.navigate("DriverOnlineReg")}} 
      style={{ position: 'absolute', width: 330, height: 45, left: 15, top: 600, backgroundColor: '#F6FA00', borderRadius: 5 }}>
        <Text style={{ fontWeight: '700', lineHeight: 25, width: 318, height: 38, fontSize: 15, textAlign: 'center', alignItems: 'center', top: 10, color: "black" }}>

          Share App

        </Text>

        </TouchableOpacity>
   )
}
export default ShareApp;