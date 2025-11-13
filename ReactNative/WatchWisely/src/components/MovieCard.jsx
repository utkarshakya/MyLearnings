// src/components/MovieCard.jsx
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  useResponsiveHeight,
  useResponsiveWidth,
} from "../hooks/useResponsive";
import Constants from "expo-constants";

const TMDB_IMAGE_BASE_URL = Constants.expoConfig?.extra?.TMDB_IMAGE_BASE_URL;

const MovieCard = ({
  movie,
  widthInPercentage,
  heightInPercentage = 40,
  imageAspectRatio = 2 / 3,
}) => {
  const uri = movie?.poster_path
    ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
    : null;
  if (uri) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => router.push(`/movies/${movie.id}`)}
        style={{
          margin: useResponsiveWidth(1),
        }}
      >
        <View>
          <Image
            source={{ uri }}
            style={{
              aspectRatio: imageAspectRatio,
              height: useResponsiveHeight(heightInPercentage),
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
        </View>
        {/* <Text 
            numberOfLines={1} 
            className="text-white mt-1.5"
        >
            {movie.title || movie.name}
        </Text> */}
      </TouchableOpacity>
    );
  } else {
    return null;
  }
};

export default MovieCard;
