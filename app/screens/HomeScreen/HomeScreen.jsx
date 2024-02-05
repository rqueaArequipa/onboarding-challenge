import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import colors from "../../utils/colors";

export default function HomeScreen() {
  const { width } = useWindowDimensions();

  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem("@viewedOnboarding");
    } catch (error) {
      console.log("Error @clearOnboarding", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: width * 0.08 }]}>HomeScreen</Text>
      <TouchableOpacity
        style={[
          styles.button,
          { padding: width * 0.03, marginTop: width * 0.1 },
        ]}
        onPress={clearOnboarding}
      >
        <Text style={[styles.text, { fontSize: width * 0.04 }]}>
          Clear Onboarding
        </Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: colors.PRIMARY,
    borderRadius: 99,
  },

  text: {
    color: colors.WHITE,
    fontWeight: "400",
    letterSpacing: 1,
  },
});
