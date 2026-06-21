const Movie = require("../models/Movie");

const sampleMovies = [
  {
    title: "Dhurandar",
    genre: "Action",
    rating: 4.5,
    duration: 135,
    releaseDate: new Date("2025-01-20"),
    poster: "",
  },
  {
    title: "Interstellar",
    genre: "Comedy",
    rating: 4.2,
    duration: 110,
    releaseDate: new Date("2024-11-08"),
    poster: "",
  },
  {
    title: "Dune",
    genre: "Sci-Fi",
    rating: 4.8,
    duration: 148,
    releaseDate: new Date("2025-03-12"),
    poster: "",
  },
  {
    
    title: "Inception",
    genre: "Sci-Fi",
    rating: 4.8,
    duration: 148,
    releaseDate: new Date("2025-03-12"),
    poster: "",
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
