// src/components/MovieCard.jsx
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

const IMG_BASE = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
    const uri = movie?.poster_path ? `${IMG_BASE}${movie.poster_path}` : null;

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push(`/movies/${movie.id}`)}
            // style={{ width: 200, marginRight: 20 }}
            className="w-[200px] mr-10"
        >
            <View style={{ borderRadius: 16, overflow: "hidden", backgroundColor: "#1f2937" }}>
                {uri ? (
                    <Image source={{ uri }} height={300} resizeMode="cover" />
                ) : (
                    <View style={{ width: "100%", height: 200, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: "#9CA3AF" }}>No Image</Text>
                    </View>
                )}
            </View>
            {/* <Text numberOfLines={1} style={{ color: "white", marginTop: 6 }}>
        {movie.title || movie.name}
      </Text> */}
        </TouchableOpacity>
    );
};

export default MovieCard;