import React, { Component } from "react"
import { View, Text, FlatList, TextInput, TouchableOpacity, ToastAndroid, StatusBar, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'

import Styles from "../assets/styles/TodoStyles"
import Colors from "../assets/Colors"

class TodoScreen extends Component {
  constructor() {
    super();

    this.state = {
      data: 
      [
        {
          activity: "Work"
        },
        {
          activity: "Sleep"
        },
        {
          activity: "Study"
        },
        {
          activity: "Run"
        },
        {
          activity: "Sleep"
        },
      ],
      inputText: "",
      generatedKey: 5
    }
  }

  _handleRemove = idx => {
    let nData = this.state.data
    nData.splice(idx, 1)
    this.setState({
      data: nData
    })
  }
  
  render() {
    const { data } = this.state

    return(
      <View style={Styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.primeDarkenColor} />
        <View style={Styles.header}>
          <Icon name="angellist" size={30} color={Colors.white} />
          <Text style={Styles.title}>Mai Toodo</Text>
        </View>
        
        <View style={Styles.formGroup}>
          <View style={Styles.inputBox}>
            <TextInput style={Styles.input} placeholder="New todo" onChangeText={(text) => this._handleChangeText(text)} value={this.state.inputText} />
          </View>
          <TouchableOpacity style={Styles.btn} onPress={this._handleAddBtn}>
            <Text style={Styles.btnText}>Add</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView contentContainerStyle={Styles.listContainer}>
          {data.map((item, index) => {
            return(
              <View style={Styles.listItem} key={index}>
                <Text style={Styles.listText}>{item.activity}</Text>
                <TouchableOpacity style={Styles.actionBtn} onPress={() => this._handleRemove(index)}>
                  <Icon name="trash" size={18} color={Colors.textColor} />
                </TouchableOpacity>
              </View>
            )
          })}
        </ScrollView>
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
      let nData = this.state.data.concat({activity: this.state.inputText})
      this.setState({data: nData})
      this.setState({inputText: ""})
    }
  }
}

export default TodoScreen;