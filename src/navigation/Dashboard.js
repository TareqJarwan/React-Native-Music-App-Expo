import "react-native-gesture-handler";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import SongsScreen from "../navigation/Songs";
import AlbumsScreen from "../navigation/Albums";
import ArtistsScreen from "../navigation/Artists";
import SearchScreen from "../navigation/Search";

const Tab = createMaterialTopTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        labelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          marginBottom: 10,
          marginTop: 10,
        },
      }}
    >
      <Tab.Screen
        name="Songs"
        component={SongsScreen}
        options={{ title: "Tracks" }}
      />
      <Tab.Screen
        name="Artists"
        component={ArtistsScreen}
        options={{ title: "Artists" }}
      />
      <Tab.Screen
        name="Albums"
        component={AlbumsScreen}
        options={{ title: "Albums" }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "Search" }}
      />
    </Tab.Navigator>
  );
};
export default Dashboard;
