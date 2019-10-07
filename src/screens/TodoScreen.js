import React, { Component } from "react"
import { View, Text, FlatList, StatusBar } from "react-native"

import styles from "../assets/styles/todoStyles"
import colors from "../assets/colors"

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
      <View style={styles.listItem}>
        <Text style={styles.listText}>{item}</Text>
      </View>
    )
  }
  
  render() {
    const { data } = this.state
    let i = 1

    return(
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.bgColor} />
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