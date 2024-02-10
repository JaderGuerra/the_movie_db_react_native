import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { Movie } from "../interfaces/movieInterface";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <Pressable
      onPress={() => navigation.navigate("DetailsScreen", movie)}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 5,
      }}
    >
      <View style={styles.imgContainer}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
