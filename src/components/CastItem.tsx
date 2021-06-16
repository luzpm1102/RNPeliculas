import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.imgContainer}>
      {actor.profile_path && (
        <Image
          source={{ uri }}
          style={{ width: 50, height: 50, borderRadius: 10 }}
        />
      )}
      <View style={styles.actorInfo}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}> {actor.name}</Text>
        <Text style={{ opacity: 0.7, fontSize: 16 }}> {actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginHorizontal: 5,
    paddingRight: 15,
    paddingTop: 5,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 2,
  },
});
