import { MovieData } from "../../MovieData.tsx/Data";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { IMovieTypes } from "../../../types";
import SearchFilter from "../../Components/Search&filterButtons";
import { useState } from "react";
export default function Movies({searchData}:string) {
  const [Movies, setMovies] = useState(MovieData);

  return (
    <>
      <SearchFilter />
      <div className="d-flex flex-wrap align-items-center justify-content-center row-col-2">
        {Movies.map((Movie: IMovieTypes) => (
          <MovieCard key={Movie.id} {...Movie} />
        ))}
      </div>
    </>
  );
}
