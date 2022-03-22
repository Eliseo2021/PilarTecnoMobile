import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});