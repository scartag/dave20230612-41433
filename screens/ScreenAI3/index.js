import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PetDetailsScreen = () => {
  const pet = {
    name: 'Buddy',
    type: 'Dog',
    dateOfAdoption: '2021-08-15',
    description: 'Buddy is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks.'
  };
  return <View style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{pet.name}</Text>
        <Text style={styles.subtitle}>{pet.type}</Text>
        <Text style={styles.text}>Date of Adoption: {pet.dateOfAdoption}</Text>
        <Text style={styles.text}>Description: {pet.description}</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  image: {
    width: '100%',
    height: 250
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    marginBottom: 10
  }
});
export default PetDetailsScreen;