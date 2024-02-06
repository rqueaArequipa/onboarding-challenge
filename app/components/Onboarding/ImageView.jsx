import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";

export default function ImageView({ image }) {
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

  const { widthImage, heightImage } = generarValoresAleatoriosUnicos();
  return (
    <Image
      source={image}
      style={[
        {
          width: widthImage,
          height: heightImage,
          borderRadius: width * 0.03,
          margin: width * 0.009,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({});
