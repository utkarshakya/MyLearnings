// src/components/MovieCard.jsx
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

const IMG_BASE = "https://image.tmdb.org/t/p/w";

const MovieCard = ({ movie, imageWidth = 500 }) => {
  const uri = movie?.poster_path
    ? `${IMG_BASE}${imageWidth}${movie.poster_path}`
    : null;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => router.push(`/movies/${movie.id}`)}
      className="w-64 space-y-2 mr-5"
    >
      <View className="rounded-3xl overflow-hidden">
        {uri ? (
          <Image
            source={{ uri }}
            className="h-[350px] w-full"
            resizeMode="cover"
          />
        ) : (
          <View className="w-full h-[200px] items-center justify-center">
            <Text className="text-gray-400">No Image</Text>
          </View>
        )}
      </View>
      {/* <Text 
            numberOfLines={1} 
            className="text-white mt-1.5"
        >
            {movie.title || movie.name}
        </Text> */}
    </TouchableOpacity>
  );
};

export default MovieCard;
