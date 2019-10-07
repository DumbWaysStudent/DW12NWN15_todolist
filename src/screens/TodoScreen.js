import React, { Component } from "react"
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, ToastAndroid, StatusBar, ScrollView } from "react-native"
import { CheckBox } from "native-base"
import * as Anima from "react-native-animatable"
import Icon from "react-native-vector-icons/FontAwesome5"
import MCom from "react-native-vector-icons/MaterialCommunityIcons"

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
      activeItemID: null,
      editMode: false
    }
  }
  
  render() {
    const { data, editMode } = this.state

    return(
      <Anima.View style={styles.container} animation="fadeInDown" duration={450}>
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
            <Text style={styles.btnText}>{editMode ? "Update" : "Add"}</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView contentContainerStyle={[styles.listContainer, data.length < 1 ? {flex: 1} : ""]}>
          {data.length < 1 ? (
            <Anima.View style={styles.nothingBox} animation="bounceIn" duration={750}>
              <MCom style={styles.nothingIcon} name="sleep" size={65} color={colors.textColor} />
              <Text style={styles.nothingText}>Whoops, you've nothing todo now..</Text>
            </Anima.View>
          ) : 
            data.map((item, index) => {
              return(
                <Anima.View style={styles.listItem} key={index} animation="lightSpeedIn" duration={500}>
                  <CheckBox checked={item.checked} style={styles.checkBox} onPress={() => this._handleCheckbox(index)} />
                  <Text style={[styles.listText, item.checked ? styles.checkedText : "" ]}>{item.activity}</Text>
                  <TouchableWithoutFeedback onPress={() => this._handleEdit(index)}>
                    <View style={styles.actionBtn}>
                      <Icon name="pencil-alt" size={18} color={colors.textColor} />
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={() => this._handleRemove(index)}>
                    <View style={styles.actionBtn}>
                      <Icon name="trash" size={18} color={colors.textColor} />
                    </View>
                  </TouchableWithoutFeedback>
                </Anima.View>
              )
            })
          }
        </ScrollView>

      </Anima.View>
    )
  }

  _handleRemove = idx => {
    if(this.state.editMode) {
      ToastAndroid.showWithGravityAndOffset(
        "You can't delete any item in edit mode :(",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      )
    } else {
      let nData = this.state.data
      nData.splice(idx, 1)
      this.setState({
        data: nData
      })
    }
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