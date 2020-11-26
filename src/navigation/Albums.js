import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import AlbumItem from '../components/AlbumItem';
import dummyData from '../constants/dummyData';

const Albums = () => {
  const [items, setItems] = useState(dummyData.albums);
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>List of Albums</Text>
      {loading && (
        <ActivityIndicator style={styles.spinner} size="large" color="tomato" />
      )}
      {!loading && (
        <FlatList
          data={items}
          keyExtractor={(item, index) => {
            var x = Math.random() * 100000;
            return x.toString();
          }}
          renderItem={({item}) => <AlbumItem item={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spinner: {
    paddingBottom: 300,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'tomato',
  },
});

export default Albums;
