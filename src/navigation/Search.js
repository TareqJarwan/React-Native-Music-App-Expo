import React, { useState } from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Keyboard } from "react-native";

import { fetchSearchResult } from "../services/api-client";
import SongItem from "../components/SongItem";

const Search = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [readyForSearch, setReadyForSearch] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      if (readyForSearch) {
        setLoading(true);
        setResults(await fetchSearchResult(searchTerm));
        setLoading(false);
        setReadyForSearch(false);
      }
    };
    fetchAPI();
  }, [searchTerm, readyForSearch]);

  const onChange = (textValue) => setSearchTerm(textValue);

  const onClick = () => {
    setReadyForSearch(true);
    // Hide the keyboard!
    Keyboard.dismiss();
  };

  const navigateTo = () => navigation.navigate("Song");

  const searchBarElems = (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search Tracks..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={onClick}>
        <Text style={styles.btnText}>
          <Icon name="search" size={20} />
        </Text>
      </TouchableOpacity>
    </View>
  );

  const noResult = (
    <View style={styles.noDataConatiner}>
      <Text style={styles.smallText}>Sorry... No Results Found</Text>
    </View>
  );

  const loadingSpinner = (
    <View>
      <ActivityIndicator style={styles.spinner} size="large" color="tomato" />
      <Text style={styles.smallText}>Searching...</Text>
    </View>
  );

  const displayData = (
    <View style={styles.dataContainer}>
      <FlatList
        data={results}
        numColumns={1}
        keyExtractor={(track, index) => {
          var x = Math.random() * 100000;
          return x.toString();
        }}
        renderItem={({ item, index }) => (
          <SongItem item={item} navigateTo={navigateTo} />
        )}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search Screen</Text>
      {searchBarElems}
      {loading && loadingSpinner}
      {!loading && searchTerm.length !== 0 && results.length === 0 && noResult}
      {!loading && results.length !== 0 && displayData}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  spinner: {
    paddingTop: 100,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    margin: 20,
  },
  dataContainer: {
    marginBottom: 20,
  },
  noDataConatiner: {
    margin: 50,
    padding: 20,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: "tomato",
  },
  smallText: {
    color: "tomato",
    paddingTop: 10,
    fontSize: 18,
  },
  input: {
    width: "80%",
    height: 60,
    padding: 8,
    fontSize: 16,
    borderBottomWidth: 1.0,
    borderBottomColor: "tomato",
  },
  btn: {
    backgroundColor: "tomato",
    padding: 15,
    margin: 5,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Search;
