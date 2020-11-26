import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "./src/navigation/Dashboard";
import Song from "./src/navigation/Song";
import Artist from "./src/navigation/Artist";
import { View } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          alignContent: "center",
          textAlign: "center",
        },
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: "Music App" }}
      />
      <Stack.Screen
        name="Song"
        component={Song}
        options={{ title: "Song lyrics" }}
      />
      <Stack.Screen
        name="Artist"
        component={Artist}
        options={{ title: "Artist" }}
      />
    </Stack.Navigator>
  );
};

export default App;
