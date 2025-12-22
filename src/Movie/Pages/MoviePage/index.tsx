import { useState } from "react";
import { MovieData } from "../../MovieData.tsx/Data";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { IMovieTypes } from "../../../types";
import SearchFilter from "../../Components/Search&filterButtons";
import GenreFilter from "../../Components/Search&filterButtons/GenreFilter";

export default function Movies() {
  const [searchText, setSearchText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");

  const genres = [
    "All",
    ...new Set(MovieData.flatMap((item: any) => item.genre ?? [])),
  ];

  const handleFilterButton = (searchGenre: string) => {
    if (searchGenre === "all") {
      setSelectedGenre("all");
    } else {
      setSelectedGenre(searchGenre);
    }
  };

  const filteredMovies = MovieData.filter((movie: any) => {
    const searchLower = searchText.toLowerCase();

    const matchesSearch =
      !searchLower ||
      movie.title.toLowerCase().includes(searchLower) ||
      movie.description.toLowerCase().includes(searchLower) ||
      movie.genre?.some((g: string) => g.toLowerCase().includes(searchLower)) ||
      movie.language.toLowerCase().includes(searchLower) ||
      String(movie.release_year).toLowerCase().includes(searchLower) ||
      movie.cast?.some((c: string) => c.toLowerCase().includes(searchLower));

    // const matchesYear= !searchLower || movie.year

    const matchesGenre =
      selectedGenre === "all" ||
      movie.genre?.some((g: string) => g.toLowerCase().includes(selectedGenre));

    return matchesSearch && matchesGenre;
  });

  const searchlenght = filteredMovies.length;

  return (
    <>
      <SearchFilter
        searchText={searchText}
        setSearchText={setSearchText}
        searchlenght={searchlenght}
      />
      <GenreFilter handleFilterButton={handleFilterButton} genres={genres} />
      <div className="d-flex flex-wrap align-items-center justify-content-center  row-col-2">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((Movie: IMovieTypes) => (
            <MovieCard key={Movie.id} {...Movie} />
          ))
        ) : (
          <div className="text-center mt-4 " style={{ color: "rosybrown" }}>
            <h1>No movies found</h1>
            <h2>Please adjust your search</h2>
          </div>
        )}
      </div>
    </>
  );
}
