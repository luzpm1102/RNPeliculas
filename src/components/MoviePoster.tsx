import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import { Movie } from '../interfaces/movieInterfaces';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => nav.navigate('DetailScreen', movie)}
      activeOpacity={0.9}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
  },
});
