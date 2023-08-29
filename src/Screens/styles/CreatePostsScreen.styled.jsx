import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 44,
    paddingBottom: 22,
  },
  header: {
    position: "relative",
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    hesght: 44,
  },
  titleContainer: {
    width: 175,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
  },
  titleContainerText: {
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    paddingBottom: 11,
    paddingTop: 11,
  },
  buttonReturn: {
    position: "absolute",
    marginTop: 10,
    height: 24,
    left: 16,
  },
  iconReturn: {
    width: 24,
    height: 24,
  },
  mainContent: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 32,
  },
  publicationContainer: {
    marginBottom: 32,
  },
  imageContainer: {
    height: 240,
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
    marginBottom: 8,
  },
  previewImageThmb: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  camera: {
    flex: 1,
    resizeMode: "contain",
  },
  cameraButton: {
    paddingTop: 18,
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 18,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 50,
  },
  cameraImage: {
    width: 24,
    height: 24,
  },

  photoView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraButtonIcon: {
    color: "#fff",
  },

  text: {
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
  },
  input: {
    fontFamily: "Roboto-Regular",
    minWidth: 343,
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
    borderStyle: "solid",
    paddingBottom: 16,
    paddingTop: 16,
  },
  inputFocused: {
    color: "#000",
  },
  mapImage: {
    position: "absolute",
    top: "50%",
    left: 0,
    width: 24,
    height: 24,
    marginTop: -12,
  },
  inputHolder: {
    position: "relative",
    marginBottom: 16,
  },
  inputMap: {
    minWidth: 343,
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
    borderStyle: "solid",
    paddingLeft: 28,
    paddingBottom: 16,
    paddingTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#E8E8E8",
    borderRadius: 100,
    minWidth: 343,
    padding: 16,
    marginTop: 27,
  },
  buttonValid: {
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
  },
  buttonTextValid: {
    color: "#fff",
  },
  containerButtonDel: {
    marginTop: "auto",
  },
  buttonDel: {
    width: 70,
    borderRadius: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 23,
    paddingRight: 23,
    backgroundColor: "#E8E8E8",
    marginRight: "auto",
    marginLeft: "auto",
  },
  buttonDelIcon: {
    width: 24,
    height: 24,
  },
});
