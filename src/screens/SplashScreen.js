import React, { Component } from "react"
import { View, Text, StatusBar } from "react-native"
import * as Anima from "react-native-animatable"
import Icon from "react-native-vector-icons/FontAwesome5"
import colors from "../assets/colors"
import styles from "../assets/styles/splashStyles"

class splashScreen extends Component {
  render() {
    return(
      <Anima.View style={styles.container} animation="fadeIn">
        <StatusBar backgroundColor={colors.primeDarkenColor} barStyle="light-content" />
        <View style={styles.brand}>
          <Icon name="angellist" size={50} color={colors.white} />
          <Text style={styles.brandTitle}>Mai Toodo</Text>
        </View>
  
        <Text style={styles.ver}>v1.0</Text>
      </Anima.View>
    )
  }
}

export default splashScreen