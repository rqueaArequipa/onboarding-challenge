import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";

export default function Item({ item }) {
  const { width } = useWindowDimensions();

  const minWidth = width * 0.15;
  const maxWidth = width * 0.3;
  const minHeight = width * 0.3;
  const maxHeight = width * 0.3;

  // Función para generar valores aleatorios únicos
  const generarValoresAleatoriosUnicos = () => {
    const widthImage =
      Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
    const heightImage =
      Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
    return { widthImage, heightImage };
  };

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
            const { widthImage, heightImage } =
              generarValoresAleatoriosUnicos();

            return (
              <Image
                key={id}
                source={image}
                style={[
                  styles.image,
                  {
                    width: widthImage,
                    height: heightImage,
                    borderRadius: width * 0.03,
                    margin: width * 0.009,
                  },
                ]}
              />
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
