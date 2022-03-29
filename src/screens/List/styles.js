import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContent: {
    flex: 1,
    width,
    height,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#292929",
  },
  containerTouchable: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: -40,
    marginVertical: "2%",
    borderWidth: 0.5,
    borderColor: "#707070",
    borderRadius: 5,
  },
  containerBottomDivider: {
    width,
  },
  containerFlatList: {
    marginTop: height / 10,
  },
});
