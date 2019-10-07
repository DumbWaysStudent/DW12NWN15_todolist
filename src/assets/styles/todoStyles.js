import { StyleSheet } from "react-native"

import colors from "../colors"

export default Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor,
    minWidth: "100%",
    minHeight: "100%",
  },
  text: {
    fontSize: 24
  },

  // Lists
  listItem: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000000"
  },
  listText: {
    fontSize: 18
  }
})