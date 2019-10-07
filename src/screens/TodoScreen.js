import React, { Component } from "react"
import { View, Text, FlatList, TextInput, TouchableOpacity, TouchableWithoutFeedback, ToastAndroid, StatusBar, ScrollView } from "react-native"
import { CheckBox } from "native-base"
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from "../assets/styles/todoStyles"
import colors from "../assets/colors"

class TodoScreen extends Component {
  constructor() {
    super();

    this.state = {
      data: 
      [
        {
          activity: "Work",
          checked: false
        },
        {
          activity: "Sleep",
          checked: false
        },
        {
          activity: "Study",
          checked: false
        },
        {
          activity: "Run",
          checked: true
        },
        {
          activity: "Sleep",
          checked: false
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

  _handleCheckbox = idx => {
    let nData = this.state.data
    nData[idx].checked = !nData[idx].checked
    this.setState({
      data: nData 
    })
  }
  
  render() {
    const { data } = this.state

    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primeDarkenColor} />
        <View style={styles.header}>
          <Icon name="angellist" size={30} color={colors.white} />
          <Text style={styles.title}>Mai Toodo</Text>
        </View>
        
        <View style={styles.formGroup}>
          <View style={styles.inputBox}>
            <TextInput style={styles.input} placeholder="New todo" onChangeText={(text) => this._handleChangeText(text)} value={this.state.inputText} />
          </View>
          <TouchableOpacity style={styles.btn} onPress={this._handleAddBtn}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView contentContainerStyle={styles.listContainer}>
          {data.map((item, index) => {
            return(
              <View style={styles.listItem} key={index}>
                <CheckBox checked={item.checked} style={styles.checkBox} onPress={() => this._handleCheckbox(index)} />
                <Text style={[styles.listText, item.checked ? styles.checkedText : "" ]}>{item.activity}</Text>
                <TouchableWithoutFeedback onPress={() => this._handleRemove(index)}>
                  <View style={styles.actionBtn}>
                    <Icon name="trash" size={18} color={colors.textColor} />
                  </View>
                </TouchableWithoutFeedback>
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