import React, { Component } from "react"

// Imported screens
import TodoScreen from "./src/screens/TodoScreen"
import SplashScreen from "./src/screens/SplashScreen"

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
        <SplashScreen />
      )
    }

    return(
      <TodoScreen />
    )
  }
}

export default App;