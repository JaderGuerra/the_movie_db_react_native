import React from "react";
import { FlatList, Text, View } from "react-native";
import { MoviePoster } from "../components/MoviePoster";
import { Movie } from '../interfaces/movieInterface';

interface Props{
    peliculas :Movie[],
    categoria:string,
}

export const HorizontalSlider = ({peliculas,categoria}:Props) => {

  return (
    <View style={{marginTop:10}}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginLeft:10 }}>{categoria}</Text>
      <FlatList
        data={peliculas}
        renderItem={({ item }: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
