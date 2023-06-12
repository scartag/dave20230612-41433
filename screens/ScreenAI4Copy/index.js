import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const UserProfile = ({
  navigation
}) => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("ScreenAI4")}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>User Profile</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.label}>Username:</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Password:</Text>
        <TextInput style={styles.input} secureTextEntry />
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF5F7"
  },
  header: {
    backgroundColor: "#DFEDF4",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    flexDirection: "row"
  },
  backButton: {
    color: "#376D89",
    fontFamily: "Lato",
    fontSize: 18,
    position: "absolute",
    left: 10
  },
  headerText: {
    color: "#376D89",
    fontFamily: "Lato",
    fontSize: 24
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    color: "#376D89",
    fontFamily: "Lato",
    fontSize: 18,
    marginBottom: 5
  },
  input: {
    width: "80%",
    borderColor: "#376D89",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  saveButton: {
    backgroundColor: "#376D89",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  saveButtonText: {
    color: "#EFF5F7",
    fontFamily: "Lato",
    fontSize: 18
  }
});
export default UserProfile;