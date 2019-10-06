import React, { Component } from "react"
import { View, Text, FlatList, TextInput, TouchableOpacity, ToastAndroid, StatusBar, ScrollView } from "react-native"
import { CheckBox } from "native-base"
import Icon from "react-native-vector-icons/FontAwesome5"
import MCom from "react-native-vector-icons/MaterialCommunityIcons"

import Styles from "../assets/styles/TodoStyles"
import Colors from "../assets/Colors"

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
      activeItemID: null,
      editMode: false
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

  _handleEdit = idx => {
    let nData = this.state.data[idx].activity
    this.setState({activeItemID: idx})
    this.setState({inputText: nData})
    this.setState({editMode: true})
  }
  
  render() {
    const { data, editMode } = this.state

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
            <Text style={Styles.btnText}>{editMode ? "Update" : "Add"}</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView contentContainerStyle={[Styles.listContainer, data.length < 1 ? {flex: 1} : ""]}>
          {data.length < 1 ? (
            <View style={Styles.nothingBox}>
              <MCom style={Styles.nothingIcon} name="sleep" size={65} color={Colors.textColor} />
              <Text style={Styles.nothingText}>Whoops, you've nothing todo now..</Text>
            </View>
          ) : 
            data.map((item, index) => {
              return(
                <View style={Styles.listItem} key={index}>
                  <CheckBox checked={item.checked} style={Styles.checkBox} onPress={() => this._handleCheckbox(index)} />
                  <Text style={[Styles.listText, item.checked ? Styles.checkedText : "" ]}>{item.activity}</Text>
                  <TouchableOpacity style={Styles.actionBtn}>
                    <Icon name="pencil-alt" size={18} color={Colors.textColor} onPress={() => this._handleEdit(index)} />
                  </TouchableOpacity>
                  <TouchableOpacity style={Styles.actionBtn}>
                    <Icon name="trash" size={18} color={Colors.textColor} onPress={() => this._handleRemove(index)} />
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }

  _handleChangeText = (text) => {
    this.setState({inputText: text})
  }

  _handleAddBtn = () => {
    // console.log(this.state.inputText);
    if(this.state.editMode) {
      let nData = this.state.data
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
        nData[this.state.activeItemID].activity = this.state.inputText
        this.setState({data: nData})
        this.setState({inputText: ""})
      }
      this.setState({editMode: false})
    } else {
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
}

export default TodoScreen;