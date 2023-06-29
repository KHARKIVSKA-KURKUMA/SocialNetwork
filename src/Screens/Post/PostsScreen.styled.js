import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 33,
    minHeight: 33,
    paddingBottom: 11,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#BDBDBD",
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
  },
  userWrap: {
    height: 60,
    flexDirection: "row",
    marginBottom: 16,
  },

  userPhotoWrap: {
    borderRadius: 16,
    overflow: "hidden",
  },
  infoWrap: {
    paddingLeft: 8,
    justifyContent: "center",
  },

  name: {
    fontFamily: "LexendPeta-Bold",
    fontSize: 13,
    lineHeight: 15,
    lineHeight: 15,
    color: "#212121",
  },

  email: {
    fontFamily: "LexendPeta-Regular",
    fontSize: 11,
    lineHeight: 13,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
