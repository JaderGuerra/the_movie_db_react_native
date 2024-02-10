import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  View,
} from "react-native";
import { useMovies } from "../hooks/useMovies";
import { MoviePoster } from "../components/MoviePoster";
import {HorizontalSlider} from "../components/HorizontalSlider";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";

const { width: windowsWidth } = Dimensions.get("window");

export const HomeScreen = () => {
  const {isLoading,nowPlaying,popular,topRated,upcoming } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={80} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 10 }}>
        <View style={{ height: 440 }}>
          <Carousel
            vertical={false}
            data={nowPlaying!}
            sliderWidth={windowsWidth}
            itemWidth={300}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
          />
        </View>
        <View style={{ height: 260 }}>
        <HorizontalSlider peliculas={nowPlaying} categoria="En cine"/>
        <HorizontalSlider peliculas={popular} categoria="Populares"/>
        </View>
      </View>
    </ScrollView>
  );
};
