import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ArtistItem = ({item, navigateTo}) => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={() => navigateTo(item)}>
      <View style={styles.listItemView}>
        <Image style={styles.listItemImage} source={{uri: item.cover}} />
        <Text style={styles.listItemText}>{item.artist}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
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

export default ArtistItem;
