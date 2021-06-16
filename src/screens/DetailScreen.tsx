import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStackParams } from '../navigation/navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { ActivityIndicator } from 'react-native';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({ route, navigation }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, movieFull, cast } = useMovieDetails(movie.id);

  // console.log(uri);
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{ uri }} style={styles.posterImage} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}
      <TouchableOpacity style={styles.button} onPress={() => navigation.pop()}>
        <Icon name="chevron-back-outline" color="white" size={50} />
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    elevation: 9,
    top: 1,
    left: 0,
  },
});
