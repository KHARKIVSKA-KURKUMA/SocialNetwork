import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    paddingTop: 31,
    paddingBottom: 11,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#BDBDBD",
  },
  text: { fontFamily: "LexendPeta-Medium", fontSize: 12, color: "#606060" },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  headerLeft: {
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
  },
  headerCenter: {
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
  },
  headerRight: {
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
  },
  headerTitle: {
    fontFamily: "LexendPeta-Medium",
    fontSize: 17,
    lineHeight: 22,
    color: "#212121",
  },
  mainContext: {
    marginBottom: 0,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 22,
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    minWidth: 343,
    minHeight: 240,
    backgroundColor: "#E8E8E8",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  iconBtn: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  postBtn: {
    width: 343,
    padding: 12,
    backgroundColor: "#fdc886",
    border: "none",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  postBtnEnabled: {
    backgroundColor: "#fdc886",
  },
  postBtnDisabled: {
    backgroundColor: "#F6F6F6",
  },
  btnText: { color: "#000000", fontFamily: "LexendPeta-Bold" },
  deleteBtn: {
    width: 70,
    height: 40,
    marginTop: 30,
    marginBottom: 34,
    backgroundColor: "#F6F6F6",
  },
});
