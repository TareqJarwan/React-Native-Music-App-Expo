import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const SongItem = ({item, navigateTo}) => {
  //console.log('SongItem', item);

  return (
    <TouchableOpacity style={styles.listItem} onPress={() => navigateTo(item)}>
      <View style={styles.listItemView}>
        <Image
          style={styles.listItemImage}
          source={{
            uri:
              'https://cdn2.iconfinder.com/data/icons/circular-icons-line/82/Circular_Musical_Note-512.png',
          }}
        />
        <Text style={styles.listItemText}>{item.track}</Text>
      </View>
    </TouchableOpacity>
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
    fontSize: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  listItemImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
});

export default SongItem;
