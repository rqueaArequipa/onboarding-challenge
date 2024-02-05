import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import colors from "../../utils/colors";

export default function NextButton({ scrollTo }) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            padding: width * 0.014,
            paddingHorizontal: width * 0.05,
            marginTop: width * 0.085,
            marginRight: width * 0.1,
          },
        ]}
        onPress={scrollTo}
      >
        <Text style={[styles.text, { fontSize: width * 0.05 }]}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: "flex-end",
  },

  button: {
    backgroundColor: colors.PRIMARY,
    borderRadius: 99,
  },

  text: {
    color: "#FFF",
    fontWeight: "400",
    letterSpacing: 1,
  },
});
