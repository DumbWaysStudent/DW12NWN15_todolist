import { StyleSheet } from "react-native"

import Colors from "../Colors"

export default Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgColor,
    minWidth: "100%",
    minHeight: "100%",
    paddingBottom: "10.5%"
  },
  header: {
    backgroundColor: Colors.primeDarkenColor,
    paddingHorizontal: 10,
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  title: {
    fontSize: 20,
    color: Colors.white,
    textTransform: "uppercase"
  },

  // Form
  formGroup: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 25,
    overflow: "scroll"
  },
  inputBox: {
    backgroundColor: "#fefefe",
    paddingHorizontal: 10,
    borderRadius: 4,
    width: "65%",
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  input: {
    fontSize: 16,
    fontFamily: "sans",
    color: Colors.primeColor
  },
  btn: {
    flex: 1,
    backgroundColor: Colors.primeColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  btnText: {
    fontSize: 16,
    color: "#ffffff",
    textTransform: "uppercase",
    fontFamily: "sans"
  },

  // Lists
  listContainer: {
    flexDirection: "column-reverse",
    marginBottom: "10.5%",
    paddingHorizontal: 10

  },
  listItem: {
    paddingHorizontal: 15,
    borderRadius: 4,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
  listText: {
    fontSize: 18,
    color: Colors.textColor
  }
})