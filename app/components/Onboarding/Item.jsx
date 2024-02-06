import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import ImageView from "./ImageView";

export default function Item({ item }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <View style={[styles.imageContainer, { width }]}>
        <View
          style={[
            styles.imageRound,
            {
              width: width * 0.9,
              height: width * 0.9,
              borderRadius: width * 0.9,
            },
          ]}
        >
          {item.images.map(({ id, image }, index) => {

            return (
              <ImageView image= {image} key={id}/>
            );
          })}
        </View>
      </View>
      <View style={styles.content}>
        <Text style={[styles.title, { fontSize: width * 0.1 }]}>
          {item.title}
        </Text>
        <Text
          style={[
            styles.description,
            { paddingHorizontal: width * 0.1, fontSize: width * 0.04 },
          ]}
        >
          {item.description}
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

  imageContainer: {
    flex: 0.7,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  imageRound: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  content: {
    flex: 0.3,
    justifyContent: "center",
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
