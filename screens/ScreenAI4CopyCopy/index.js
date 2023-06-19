import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { SafeAreaView, Pressable } from "react-native";
import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { api_v1_pet_list } from "../../store/daveAPI/pets.slice.js";

const PetGalleryScreen = () => {
  const [pets, setPets] = useState([]);
  const [filter, setFilter] = useState("Explore");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(api_v1_pet_list());
  }, []);
  const petsSelector = useSelector(state => state.Pets.entities);
  useEffect(() => {
    if (petsSelector) {
      setPets(petsSelector);
    }
  }, [petsSelector]);

  const handleFilter = filterType => {
    setFilter(filterType);

    if (filterType === "Explore") {
      setPets(petsSelector);
    } else if (filterType === "My Pets") {
      setPets(petsSelector.filter(pet => !pet.is_favorite));
    } else if (filterType === "My Favs") {
      setPets(petsSelector.filter(pet => pet.is_favorite));
    }
  };

  const handleFavToggle = id => {
    const updatedPets = pets.map(pet => {
      if (pet.id === id) {
        return { ...pet,
          is_favorite: !pet.is_favorite
        };
      }

      return pet;
    });
    setPets(updatedPets);
  };

  return <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable>
            <Image source={require("./peticon.png")} style={styles.headerImage} />
          </Pressable>
          <Text style={styles.headerTitle}>{"Explore"}</Text>
          <Pressable>
            <Image source={require("./add.png")} style={styles.headerImage} />
          </Pressable>
        </View>
        <View style={styles.body}>
          <ScrollView contentContainerStyle={styles.cardContainer}>
            {pets.map(pet => <Pressable key={pet.id} style={styles.card}>
                <Image source={require(pet.image_url)} style={styles.cardImage} />
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardName}>{pet.name}</Text>
                  <TouchableOpacity onPress={() => handleFavToggle(pet.id)}>
                    <Image source={{
                  uri: pet.is_favorite ? "https://drive.google.com/uc?export=view&id=1tVMtgpqVRu-qrFqEN2u04o_gOPG0vFDQ" : "https://drive.google.com/uc?export=view&id=1pIgKHT8aLxInLdY_XuLrq8P-vzkFizkX"
                }} style={styles.cardFavImage} />
                  </TouchableOpacity>
                </View>
              </Pressable>)}
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={[styles.footerButton, filter === "Explore" && styles.footerButtonHighlighted]} onPress={() => handleFilter("Explore")}>
            <Image source={require("./1200px-Magnifying_glass_icon.svg.png")} style={styles.footerButtonImage} />
            <Text style={[styles.footerButtonText, {
            color: filter === "Explore" ? "#FFFFFF" : "#376D89"
          }]}>
              Explore
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.footerButton, filter === "My Pets" && styles.footerButtonHighlighted]} onPress={() => handleFilter("My Pets")}>
            <Image source={require("./peticon.png")} style={styles.footerButtonImage} />
            <Text style={[styles.footerButtonText, {
            color: filter === "My Pets" ? "#FFFFFF" : "#376D89"
          }]}>
              My Pets
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.footerButton, filter === "My Favs" && styles.footerButtonHighlighted]} onPress={() => handleFilter("My Favs")}>
            <Image source={{
            uri: "https://drive.google.com/uc?export=view&id=1pIgKHT8aLxInLdY_XuLrq8P-vzkFizkX"
          }} style={styles.footerButtonImage} />
            <Text style={[styles.footerButtonText, {
            color: filter === "My Favs" ? "#FFFFFF" : "#376D89"
          }]}>
              My Favs
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#EFF5F7"
  },
  header: {
    backgroundColor: "#DFEDF4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  headerTitle: {
    color: "#376D89",
    fontSize: 24,
    fontWeight: "bold"
  },
  headerImage: {
    width: 30,
    height: 30
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 20
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  cardTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  cardName: {
    color: "#376D89",
    fontSize: 18,
    fontWeight: "bold"
  },
  cardFavImage: {
    width: 34,
    height: 31
  },
  footer: {
    backgroundColor: "#DFEDF4",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  footerButton: {
    flexDirection: "column",
    alignItems: "center"
  },
  footerButtonHighlighted: {
    backgroundColor: "#376D89",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  footerButtonImage: {
    width: 34,
    height: 31
  },
  footerButtonText: {
    color: "#376D89",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5
  }
});
export default PetGalleryScreen;