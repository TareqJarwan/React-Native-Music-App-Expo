import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const AlbumItem = ({item}) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.listItemView}>
        <Image style={styles.listItemImage} source={{uri: item.cover}} />
        <Text style={styles.listItemText}>{item.album}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
    marginLeft: 20,
  },
  listItemImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default AlbumItem;
