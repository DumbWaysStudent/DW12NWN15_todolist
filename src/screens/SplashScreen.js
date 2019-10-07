import React from "react"
import { View, Text, StatusBar } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"
import Colors from "../assets/Colors"
import Styles from "../assets/styles/SplashStyles"

const SplashScreen = () => {
  return(
    <View style={Styles.container}>
      <StatusBar barStyle="light-content" color={Colors.primeDarkenColor} />
      <View style={Styles.brand}>
        <Icon name="angellist" size={50} color={Colors.white} />
        <Text style={Styles.brandTitle}>Mai Toodo</Text>
      </View>

      <Text style={Styles.ver}>v1.0</Text>
    </View>
  )
}

export default SplashScreen