export const optimizeSearchResults = (data) => {
    // IMDB Standard Weighted Rating Formula. It is industry standard for ranking movies.
    // Formula: (v/(v+m)) * R + (m/(v+m)) * C
    // Where:
    // R = movie's vote_average
    // v = vote_count
    // C = global average rating
    // m = minimum votes required to be considered (you choose)

    const C = data.reduce((acc, item) => acc + item.vote_average, 0) / data.length;
    const m = 1000; // You can adjust this threshold based on your dataset

    const optimizedData = data.map((item) => {
        const R = item.vote_average;
        const v = item.vote_count;
        const weightedRating = (v / (v + m)) * R + (m / (v + m)) * C;
        return { ...item, weightedRating };
    });

    // Sort by weighted rating in descending order
    optimizedData.sort((a, b) => b.weightedRating - a.weightedRating);
    return optimizedData;
}