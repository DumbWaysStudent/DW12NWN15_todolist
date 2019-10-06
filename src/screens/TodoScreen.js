import React, { Component } from "react"
import { View, Text, FlatList, StatusBar } from "react-native"

import Styles from "../assets/styles/TodoStyles"
import Colors from "../assets/Colors"

class TodoScreen extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        'work',
        'swim',
        'study',
        'sleep',
        'run'
      ]    
    }
  }

  _renderItem = ({item}) => {
    return(
      <View style={Styles.listItem}>
        <Text style={Styles.listText}>{item}</Text>
      </View>
    )
  }
  
  render() {
    const { data } = this.state
    let i = 1

    return(
      <View style={Styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.bgColor} />
        <FlatList 
          data={data}
          renderItem={({item}) => this._renderItem({item})}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

export default TodoScreen;