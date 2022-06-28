import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import Character from "./Character";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  function NavPage({ page, setPage }) {
    return (
      <View style={styles.navPageContainer}>
        <Text style={styles.page}>Page: {page}</Text>
        <Button title="Next" onPress={() => setPage(page + 1)}></Button>
      </View>
    );
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.h1}>CharacterList</Text>
        <NavPage page={page} setPage={setPage} />
        <View style={styles.body}>
          {characters.map((character) => {
            return <Character key={character.id} character={character} />;
          })}
        </View>
        <NavPage page={page} setPage={setPage} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#4c5a7d",
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    color: "#fff",
  },
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#20232a",
    marginTop: 25,
    alignItems: "center",
  },
  navPageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  body: {
    flex: 1,
    backgroundColor: "#a6d66c",
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  page: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
