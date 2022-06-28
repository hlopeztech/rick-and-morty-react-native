import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function Character({ character }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{character.name}</Text>
      <Image
        source={{ uri: character.image }}
        alt={character.name}
        style={styles.image}
      />
      <Text style={styles.origin}>
        Planet 
      </Text>
      <Text style={styles.originDetail}>
        {character.origin.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3c3cf4",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
    maxWidth: "40%",
    minWidth: "30%",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    padding: 5,
    textAlign: "center",
  },
  origin: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    paddingTop: 4,
  },
  originDetail: {
    fontSize: 8,
    color: "#fff",
    textAlign: "center",
    paddingTop: 3,
  }
});

export default Character;
