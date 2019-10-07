import { StyleSheet } from "react-native"
import Colors from "../Colors"

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primeDarkenColor,
    justifyContent: "center",
    alignItems: "center"
  },
  brand: {
    alignItems: "center"
  },
  brandTitle: {
    color: Colors.white,
    fontSize: 28,
    textTransform: "uppercase",
    letterSpacing: 4.5,
    marginTop: 10
  },

  ver: {
    position: "absolute",
    bottom: "4.5%",
    left: 0,
    right: 0,
    fontSize: 18,
    textAlign: "center",
    color: Colors.white
  }
})

export default Styles