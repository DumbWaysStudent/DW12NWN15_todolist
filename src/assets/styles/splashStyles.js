import { StyleSheet } from "react-native"
import colors from "../colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primeDarkenColor,
    justifyContent: "center",
    alignItems: "center"
  },
  brand: {
    alignItems: "center"
  },
  brandTitle: {
    color: colors.white,
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
    color: colors.white
  }
})

export default styles