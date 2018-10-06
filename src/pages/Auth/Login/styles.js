import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 35,
    fontFamily: "Karla Bold",
    color: "#000000",
    marginBottom: 15
  },
  input: {
    width: width - width / 5,
    height: 40,
    fontFamily: "Karla Regular",
    backgroundColor: "#D3D3D3",
    color: "#000000",
    fontSize: 16,
    borderRadius: 2,
    marginBottom: 10,
    paddingLeft: 10
  },
  button: {
    width: width - width / 5,
    height: 40,
    borderRadius: 2,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Karla Bold",
    color: "#FFFFFF"
  },
  barAccountLink: {
    marginTop: 15
  },
  barAccountText: {
    fontFamily: "Karla Bold",
    color: "#000000",
    fontSize: 16
  }
});

export default styles;
