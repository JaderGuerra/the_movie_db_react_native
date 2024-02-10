import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Navigation";

interface Props extends StackScreenProps<RootStackParams, "DetailsScreen"> {}

const { height: screenHeight } = Dimensions.get("screen");
export const DetailsScreen = ({ route }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;

  return (
    <ScrollView>
      <View style={styles.imgContainer}>
        <Image source={{ uri }} style={styles.posterImg} />
      </View>
      <View>
        <Text>{movie.original_title}</Text>
        <Text>{movie.title}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    width: "100%",
    height: screenHeight * 0.7,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  posterImg: {
    flex: 1,
  },
});
