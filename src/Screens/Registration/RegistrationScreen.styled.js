import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
  },
  Container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  ContentWrap: {
    backgroundColor: "#FFFFFF",
  },
  avatarContainer: {
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 260,
    justifyContent: "center",
  },

  avatarWrap: { position: "relative" },
  plusBtn: {
    position: "absolute",
    left: 90,
    bottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 345,
    height: 50,
  },
  title: {
    fontFamily: "LexendPeta-ExtraBold",
    textAlign: "center",
    fontSize: 24,
    paddingTop: 80,
    marginBottom: 32,
  },
  loginLink: {
    fontFamily: "LexendPeta-Regular",
  },
  inputWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginBottom: 43,
  },
  signUpBtn: {
    width: 343,
    padding: 12,
    backgroundColor: "#fdc886",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btnText: {
    color: "#000000",
    fontFamily: "LexendPeta-Bold",
  },
  SignInWrap: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 30,
  },
  decr: {
    fontFamily: "LexendPeta-Regular",
    marginRight: 5,
  },
});
