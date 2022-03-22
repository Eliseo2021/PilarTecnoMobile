import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929",
  },
  mainContent: {
    flex: 1,
    width,
    height,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContent: {
    width: width / 3,
    height: width / 3,
    margin: 5,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: 'rgba(52, 52, 52, .2)',
    borderWidth: 4,
    borderColor: 'rgba(52, 52, 52, .2)',
    margin: 5,
    fontSize: '22',
    
  },
  textButton: {
    width: "100%",
    textAlign: "center",
    color: "#fff",
    padding: 10,
  },
});

