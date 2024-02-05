import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";

export default function ProfileScreen() {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: width * 0.08 }]}>
        ProfileScreen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    letterSpacing: 3,
    fontWeight: "500",
  },
});
