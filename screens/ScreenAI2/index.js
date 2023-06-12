import { Pressable } from "react-native";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const RobotPetDetails = ({
  navigation
}) => {
  const pet = {
    name: "RoboPet",
    type: "Robot Dog",
    image_url: "https://tinyurl.com/42evm3m3",
    attributes: "Friendly, Playful, Loyal",
    is_favorite: true,
    description: "A cute and friendly robot dog that loves to play and keep you company.",
    date_adopted: "2022-01-01",
    user: "John Doe"
  };
  return <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Pet Gallery")} style={styles.closeButton}>
          <Pressable onPress={() => {
          navigation.navigate("Untitled1");
        }}><Image source={require("./back.png")} style={styles.closeButtonImage} /></Pressable>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{pet.name}</Text>
      </View>
      <ScrollView style={styles.body}>
        <Image source={{
        uri: pet.image_url
      }} style={styles.petImage} />
        <View style={styles.petNameFav}>
          <Text style={styles.petName}>{pet.name}</Text>
          {pet.is_favorite && <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.favIcon} />}
        </View>
        <View style={styles.petDetails}>
          <Text style={styles.label}>Pet Name:</Text>
          <Text style={styles.detail}>{pet.name}</Text>
        </View>
        <View style={styles.petDetails}>
          <Text style={styles.label}>Pet Type:</Text>
          <Text style={styles.detail}>{pet.type}</Text>
        </View>
        <View style={styles.petDetails}>
          <Text style={styles.label}>Date of Adoption:</Text>
          <Text style={styles.detail}>{pet.date_adopted}</Text>
        </View>
        <View style={styles.petDetails}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.detail}>{pet.description}</Text>
        </View>
        <View style={styles.petDetails}>
          <Text style={styles.label}>Special Attributes:</Text>
          <Text style={styles.detail}>{pet.attributes}</Text>
        </View>
      </ScrollView>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF5F7"
  },
  header: {
    backgroundColor: "#DFEDF4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60
  },
  closeButton: {
    position: "absolute",
    left: 10
  },
  closeButtonImage: {
    width: 30,
    height: 30
  },
  headerTitle: {
    color: "#376D89",
    fontSize: 24
  },
  body: {
    paddingHorizontal: 10
  },
  petImage: {
    width: "100%",
    height: 300
  },
  petNameFav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
  },
  petName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#376D89"
  },
  favIcon: {
    width: 30,
    height: 30
  },
  petDetails: {
    flexDirection: "row",
    marginTop: 10
  },
  label: {
    color: "#376D89",
    fontWeight: "bold",
    width: 150
  },
  detail: {
    color: "#7D9BAA",
    flex: 1
  }
});
export default RobotPetDetails;