import React, { Component } from "react"

// Imported screens
import Todo from "./src/screens/TodoScreen"
import Splash from "./src/screens/SplashScreen"

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    if(this.state.isLoading) {
      setTimeout(() => {
        this.setState({isLoading: false})
      }, 2500)
    }

    console.disableYellowBox = true
  }

  render() {
    const { isLoading } = this.state
    if(isLoading) {
      return(
        <Splash />
      )
    }

    return(
      <Todo />
    )
  }
}

export default App;