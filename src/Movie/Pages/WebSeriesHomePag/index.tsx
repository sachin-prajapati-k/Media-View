import { useState } from "react";
import { MovieData } from "../../MovieData.tsx/MovieData";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { IMovieTypes } from "../../../types";
import SearchFilter from "../../Components/Search&filterButtons";
import GenreFilter from "../../Components/Search&filterButtons/GenreFilter";
import { WebSeriesData } from "../../MovieData.tsx/WebSeriesData";

export default function WebSeries() {
  const [searchText, setSearchText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");

  const genres = [
    "All",
    ...new Set(WebSeriesData.flatMap((item: any) => item.genre ?? [])),
  ];

  const handleFilterButton = (searchGenre: string) => {
    if (searchGenre === "all") {
      setSelectedGenre("all");
    } else {
      setSelectedGenre(searchGenre);
    }
  };

  const filteredWebSeries = WebSeriesData.filter((series: any) => {
    const searchLower = searchText.toLowerCase();

    const matchesSearch =
      !searchLower ||
      series.title.toLowerCase().includes(searchLower) ||
      series.description.toLowerCase().includes(searchLower) ||
      series.genre?.some((g: string) =>
        g.toLowerCase().includes(searchLower)
      ) ||
      series.language.toLowerCase().includes(searchLower) ||
      String(series.release_year).toLowerCase().includes(searchLower) ||
      series.cast?.some((c: string) => c.toLowerCase().includes(searchLower));

    // const matchesYear= !searchLower || movie.year

    const matchesGenre =
      selectedGenre === "all" ||
      series.genre?.some((g: string) =>
        g.toLowerCase().includes(selectedGenre)
      );

    return matchesSearch && matchesGenre;
  });

  const searchlenght = filteredWebSeries.length;

  return (
    <>
      <SearchFilter
        searchText={searchText}
        setSearchText={setSearchText}
        searchlenght={searchlenght}
      />
      <GenreFilter handleFilterButton={handleFilterButton} genres={genres} />
      <div className="d-flex flex-wrap align-items-center justify-content-center  row-col-2">
        {filteredWebSeries.length > 0 ? (
          filteredWebSeries.map((Movie: IMovieTypes) => (
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
