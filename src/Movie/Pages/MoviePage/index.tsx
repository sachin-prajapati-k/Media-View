import { MovieData } from "../../MovieData.tsx/Data";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { IMovieTypes } from "../../../types";
import SearchFilter from "../../Components/Search&filterButtons";
import { useEffect, useState } from "react";
import GenreFilter from "../../Components/Search&filterButtons/GenreFilter";
export default function Movies() {
  const [searchText, setSearchText] = useState("");
  const [Movies, setMovies] = useState(MovieData);
  const handleFilterButton = (searchGenre: string) => {
    setMovies(
      Movies.filter((item) =>
        item.genre?.some((g: string) => g.toLowerCase().includes(searchGenre))
      )
    );
  };
  const searchLower = searchText.toLowerCase();
  useEffect(() => {
    if (!searchText) {
      setMovies(MovieData);
      return;
    }

    const filteredMovies = Movies.filter((movie: any) => {
      return (
        movie.title.toLowerCase().includes(searchLower) ||
        movie.description.toLowerCase().includes(searchLower) ||
        movie.genre.some((g: string) =>
          g.toLowerCase().includes(searchLower)
        ) ||
        movie.language.toLowerCase().includes(searchLower) ||
        movie.cast.some((c: string) => c.toLowerCase().includes(searchLower))
      );
    });
    setMovies(filteredMovies);
  }, [searchText]);

  const searchlenght = Movies.length;

  return (
    <>
      <SearchFilter
        searchText={searchText}
        setSearchText={setSearchText}
        searchlenght={searchlenght}
      />
      <GenreFilter handleFilterButton={handleFilterButton} />
      <div className="d-flex flex-wrap align-items-center justify-content-center row-col-2">
        {Movies.map((Movie: IMovieTypes) => (
          <MovieCard key={Movie.id} {...Movie} />
        ))}
      </div>
    </>
  );
}
