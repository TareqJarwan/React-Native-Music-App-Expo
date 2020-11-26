import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import SongItem from '../components/SongItem';
import dummyData from '../constants/dummyData';

const Songs = ({navigation}) => {
  const [items, setItems] = useState(dummyData.songs);

  const navigateTo = () => navigation.navigate('Song');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Latest Tracks</Text>
      <FlatList
        data={items}
        keyExtractor={(item, index) => {
          var x = Math.random() * 100000;
          return x.toString();
        }}
        renderItem={({item}) => (
          <SongItem item={item} navigateTo={navigateTo} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'tomato',
  },
});

export default Songs;
