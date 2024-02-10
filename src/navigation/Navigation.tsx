import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {HomeScreen} from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailScreen';
import { Movie } from "../interfaces/movieInterface";

export type RootStackParams = {
  HomeScreen: undefined;
  DetailsScreen:Movie;
}
const Stack = createNativeStackNavigator<RootStackParams>();

export default function Navigation() {
  return (
    <Stack.Navigator 
    screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
