import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Song = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Sorry... There is no lyrics for this song!
      </Text>
      <Button
        title="Go back"
        color="tomato"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 20,
  },
});

export default Song;
