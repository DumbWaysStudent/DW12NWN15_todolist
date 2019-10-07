import React, { Component } from "react"
import { View, Text, StatusBar } from "react-native"
import * as Anima from "react-native-animatable"
import Icon from "react-native-vector-icons/FontAwesome5"
import Colors from "../assets/Colors"
import Styles from "../assets/styles/SplashStyles"

class SplashScreen extends Component {
  render() {
    return(
      <Anima.View style={Styles.container} animation="fadeIn">
        <StatusBar backgroundColor={Colors.primeDarkenColor} barStyle="light-content" />
        <View style={Styles.brand}>
          <Icon name="angellist" size={50} color={Colors.white} />
          <Text style={Styles.brandTitle}>Mai Toodo</Text>
        </View>
  
        <Text style={Styles.ver}>v1.0</Text>
      </Anima.View>
    )
  }
}

export default SplashScreen