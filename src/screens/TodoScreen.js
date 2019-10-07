import React, { Component } from "react"
import { View, Text, FlatList, TextInput, TouchableOpacity, ToastAndroid, StatusBar } from "react-native"

import styles from "../assets/styles/todoStyles"
import colors from "../assets/colors"

class TodoScreen extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        'workaaa',
        'swim',
        'study',
        'sleep',
        'run',
        'work',
        'swim',
        'study',
        'sleep',
        'run',
        'work',
        'swim',
        'study',
        'sleep',
        'run',
        'work',
        'swim',
        'study',
        'sleep',
        'run',
      ],
      inputText: "",
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

    return(
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.bgColor} />
        <View style={styles.formGroup}>
          <View style={styles.inputBox}>
            <TextInput style={styles.input} placeholder="New todo" onChangeText={(text) => this._handleChangeText(text)} value={this.state.inputText} />
          </View>
          <TouchableOpacity style={styles.btn} onPress={this._handleAddBtn}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList 
          data={data}
          scrollEnabled={true}
          renderItem={({item}) => this._renderItem({item})}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    )
  }

  _handleChangeText = (text) => {
    this.setState({inputText: text})
  }

  _handleAddBtn = () => {
    // console.log(this.state.inputText);
    if(this.state.inputText == "" || !this.state.inputText.replace(/\s/g, '').length) {
      ToastAndroid.showWithGravityAndOffset(
        "Please don't let the input form empty! :(",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      )
      this.setState({inputText: ""})
    } else {
      let nData = this.state.data.concat(this.state.inputText)
      this.setState({data: nData})
      this.setState({inputText: ""})
    }
  }
}

export default TodoScreen;