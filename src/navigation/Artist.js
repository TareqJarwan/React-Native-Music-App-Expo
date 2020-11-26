import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {fetchAllSongs} from '../services/api-client';

import Accordian from '../components/Accordion';

const Artist = ({navigation, route}) => {
  const {artist} = route.params;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigateTo = () => navigation.navigate('Song');

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      setItems(await fetchAllSongs(artist.api_albums));
      setLoading(false);
    };
    fetchAPI();
  }, [artist]);

  const artistInfo = (
    <View style={styles.artistInfo}>
      <Image style={styles.image} source={{uri: artist.cover}} />
      <Text style={styles.text}>{artist.artist}</Text>
    </View>
  );

  const noData = (
    <View style={styles.noDataConatiner}>
      <Text style={styles.text}>
        Sorry... There is no tracks for this Artist!
      </Text>
      <Button
        title="Go back"
        color="tomato"
        onPress={() => navigation.goBack()}
      />
    </View>
  );

  const displayData = (
    <View style={styles.AccordionContainer}>
      {items.map((item, i) => {
        const {tracks, album} = item;
        return (
          <Accordian
            key={Math.random() * 105015}
            title={album}
            data={tracks}
            navigateTo={navigateTo}
          />
        );
      })}
    </View>
  );

  const loadingSpinner = (
    <View style={styles.spinner}>
      <ActivityIndicator size="large" color="tomato" />
      <Text style={styles.smallText}>Loading Tracks...</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {artistInfo}
      {loading && loadingSpinner}
      {!loading && items.length === 0 && noData}
      {!loading && items.length !== 0 && displayData}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AccordionContainer: {
    flex: 1,
    paddingTop: 10,
    marginBottom: 30,
  },
  spinner: {
    paddingTop: 150,
  },
  artistInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  noDataConatiner: {
    margin: 50,
    padding: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  smallText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 20,
    color: 'tomato',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 50,
  },
});

export default Artist;
