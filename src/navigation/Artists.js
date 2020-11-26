/**
 * ToDo: fix the scolling issue and load more
 */

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import ArtistItem from "../components/ArtistItem";
import { fetchArtists } from "../services/api-client";

const Artists = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      const data = await fetchArtists(pageNumber);
      setItems([...items, ...data]);
      setLoading(false);
    };
    fetchAPI();
  }, [pageNumber]);

  const navigateTo = (item) => {
    navigation.navigate("Artist", { artist: item });
  };

  const loadingSpinner = (
    <View style={styles.spinner}>
      <ActivityIndicator size="large" color="tomato" />
      <Text style={styles.smallText}>Loading Artists...</Text>
    </View>
  );

  const noResults = (
    <View style={styles.noDataConatiner}>
      <Text style={styles.smallText}>Sorry... No Results Found</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <ArtistItem item={item} navigateTo={navigateTo} />
  );

  const loadMoreItems = (x) => {
    console.log(x);
    setPageNumber(pageNumber + 1);
  };

  const renderFooter = () => {
    return loading ? (
      <View style={styles.footer}>
        <ActivityIndicator animating size="large" />
      </View>
    ) : null;
  };

  const renderSeparator = () => <View style={styles.seprator} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>List of Artists</Text>
      {loading && loadingSpinner}
      {!loading && items.length === 0 && noResults}
      {!loading && items.length !== 0 && (
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={renderSeparator}
          ListFooterComponent={renderFooter}
          onEndReached={loadMoreItems}
          onEndReachedThreshold={0.5}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  spinner: {
    paddingBottom: 300,
  },
  smallText: {
    fontSize: 15,
    textAlign: "center",
    margin: 20,
    color: "tomato",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: "tomato",
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#CED0CE",
  },
  seprator: {
    height: 1,
    width: "86%",
    backgroundColor: "#CED0CE",
    marginLeft: "14%",
  },
  noDataConatiner: {
    marginTop: 100,
    padding: 20,
  },
});

export default Artists;
