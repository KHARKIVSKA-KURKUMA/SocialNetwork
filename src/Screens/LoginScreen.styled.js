import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Container: {
    position: "relative",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  ContentWrap: {
    backgroundColor: "#FFFFFF",
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
    fontFamily: "ExtraBold",
    textAlign: "center",
    fontSize: 24,
    paddingTop: 32,
    marginBottom: 32,
  },
  loginLink: {
    fontFamily: "Regular",
  },
  inputWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginBottom: 43,
  },
  signInBtn: {
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
    fontFamily: "Bold",
  },
  SignUpWrap: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    paddingBottom: 80,
  },
  decr: {
    fontFamily: "Regular",
    marginRight: 5,
  },
});
