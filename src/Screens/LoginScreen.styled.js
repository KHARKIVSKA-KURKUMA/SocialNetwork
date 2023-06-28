import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    fontFamily: "LexendPeta-Bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBg: { flex: 1, justifyContent: "flex-end", resizeMode: "cover" },
  form: {
    // flex: 0.5,
    alignItems: "center",
    backgroundColor: "#fff",
    position: "relative",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  imageContainer: {
    position: "absolute",
    left: "50%",
    top: -60,
    transform: [{ translateX: -60 }],
  },
  image: {
    borderRadius: 16,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
  },

  imageIcon: {
    position: "absolute",
    bottom: 0,
    right: -12,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 50,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 92,
    marginBottom: 32,
    fontFamily: "LexendPeta-ExtraBold",

    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    marginHorizontal: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    fontFamily: "LexendPeta-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },

  passwordBtn: {
    position: "absolute",
    top: "50%",
    right: 32,
  },
  passwordBtnText: {
    fontFamily: "LexendPeta-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  btnContainer: { width: "100%", backgroundColor: "#fff" },
  linkText: {
    fontFamily: "LexendPeta-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
