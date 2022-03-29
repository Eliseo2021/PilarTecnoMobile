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
  contentContainerStyle: {
    marginTop: height / 9,
    flex: 1,
    width,
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
  idContent: {
    width: 100,
    height: 100,
    zIndex: 2,
    opacity: 0.8,
    borderRadius: 100,
    right: 10,
    top: 10,
    backgroundColor: "#000000",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  idNunberContent: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  imgContent: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  imgStyleContent: {
    width: "100%",
    height: "100%",
  },
  hrContent: {
    height: 0.5,
    width,
    backgroundColor: "646464",
  },
  view2Content: {
    flex: 2,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  descriContent: {
    height: height / 3,
    width: width / 1.1,
    backgroundColor: "646464",
    borderRadius: 8,
    backgroundColor: "#000000",
    marginTop: "5%",
  },
  view3Content: {
    flexDirection: "row",
  },
  textContent: {
    fontSize: 18,
    color: "white",
  },
  titleContent: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  puntoContent: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  view4Content: {
    flexDirection: "column",
    marginTop: 20,
    backgroundColor: "green",
  },
});
