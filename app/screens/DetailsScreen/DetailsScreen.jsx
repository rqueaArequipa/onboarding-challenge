import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";

export default function DetailsScreen({ route }) {
  const { id, title, description, image } = route.params;
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.imageContent}>
        <Image
          source={image}
          style={[
            styles.image,
            {
              width: width * 0.9,
              height: width * 0.9,
              borderRadius: width * 0.9,
            },
          ]}
        />
      </View>
      <View style={styles.content}>
        <Text style={[styles.title, { fontSize: width * 0.1 }]}>{title}{id}</Text>
        <Text
          style={[
            styles.description,
            { paddingHorizontal: width * 0.1, fontSize: width * 0.04 },
          ]}
        >
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContent: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {},
  content: {
    flex: 0.3,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  title: {
    fontWeight: "700",
    color: "#000000",
    textAlign: "center",
    marginBottom: 10,
    letterSpacing: 1,
  },

  description: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    letterSpacing: 0.5,
  },
});
