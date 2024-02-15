import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../components/Onboarding/Onboarding";
import TabNavigation from "./TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import DetailsScreen from "../screens/DetailsScreen/DetailsScreen";

const Stack = createStackNavigator();

export default function StackNavigator({ viewedOnboarding }) {
  console.log(viewedOnboarding);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={viewedOnboarding ? "Onboarding" : "Home"}
      >
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={TabNavigation}
        />
        <Stack.Screen
          name="Onboarding"
          options={{ headerShown: false }}
          component={Onboarding}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
