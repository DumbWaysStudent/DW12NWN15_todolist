import React, { Component } from "react"
import { View, Text, FlatList, TextInput, TouchableOpacity, ToastAndroid, StatusBar } from "react-native"

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
        'run',
      ],
      inputText: "",
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

    return(
      <View style={Styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.bgColor} />
        <View style={Styles.formGroup}>
          <View style={Styles.inputBox}>
            <TextInput style={Styles.input} placeholder="New todo" onChangeText={(text) => this._handleChangeText(text)} value={this.state.inputText} />
          </View>
          <TouchableOpacity style={Styles.btn} onPress={this._handleAddBtn}>
            <Text style={Styles.btnText}>Add</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList 
          data={data}
          scrollEnabled={true}
          renderItem={({item}) => this._renderItem({item})}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={Styles.listContainer}
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