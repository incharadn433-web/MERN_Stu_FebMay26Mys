const Movie = require("../models/Movie");

const sampleMovies = [
  {
    title: "The Midnight Chase",
    genre: "Action",
    rating: 4.5,
    duration: 135,
    releaseDate: new Date("2025-01-20"),
    poster: "https://example.com/posters/midnight-chase.jpg",
  },
  {
    title: "Laugh Riot",
    genre: "Comedy",
    rating: 4.2,
    duration: 110,
    releaseDate: new Date("2024-11-08"),
    poster: "https://example.com/posters/laugh-riot.jpg",
  },
  {
    title: "Space Frontier",
    genre: "Sci-Fi",
    rating: 4.8,
    duration: 148,
    releaseDate: new Date("2025-03-12"),
    poster: "https://example.com/posters/space-frontier.jpg",
  },
];

const seedMovies = async () => {
  const existingMovies = await Movie.countDocuments();

  if (existingMovies > 0) {
    console.log(`Movie seeder: ${existingMovies} existing movie(s) found.`);
    return;
  }

  await Movie.insertMany(sampleMovies);
  console.log(`Movie seeder: seeded ${sampleMovies.length} sample movies.`);
};

module.exports = seedMovies;
