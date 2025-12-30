import React, { createContext, useContext, useMemo, useState } from "react";
import { MovieData } from "../../../MovieData.tsx/MovieData";
import { WebSeriesData } from "../../../MovieData.tsx/WebSeriesData";
import { TVShowsData } from "../../../MovieData.tsx/TvShowsData";
import { SongsData } from "../../../MovieData.tsx/SongsData";

type Category = "All" | "Movies" | "Songs" | "Web-Series" | "Tv-Shows";

const FilterContext = createContext<any>(null);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [category, setCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const rawData = useMemo(() => {
    if (category === "Movies") return MovieData;
    if (category === "Songs") return SongsData;
    if (category === "Web-Series") return WebSeriesData;
    return TVShowsData;
  }, [category]);

  const genres = useMemo(() => {
    const g = rawData.flatMap((item) => item.genre);
    return ["All", ...Array.from(new Set(g))];
  }, [rawData]);

  const filterData = useMemo(() => {
    return rawData.filter((item) => {
      const searchLower = search.toLowerCase();
      const matchesSearch =
        !searchLower ||
        item.title?.toLowerCase().includes(searchLower) ||
        item.description?.toLowerCase().includes(searchLower) ||
        item.genre?.some((g: string) =>
          g.toLowerCase().includes(searchLower)
        ) ||
        item.language?.toLowerCase().includes(searchLower) ||
        String(item.release_year).toLowerCase().includes(searchLower) ||
        item.cast?.some((c: string) => c.toLowerCase().includes(searchLower));

      const matchesGenre =
        genre === "all" ||
        item.genre?.some((g: string) => g.toLowerCase().includes(genre));

      return matchesSearch && matchesGenre;
    });
  }, [rawData, search, genre]);
  // const searchlenght = filterData.length;
  return (
    <>
      <FilterContext.Provider
        value={{
          category,
          setCategory,
          search,
          setSearch,
          genre,
          setGenre,
          genres,
          filterData,
        }}
      >
        {children}
      </FilterContext.Provider>
    </>
  );
}

export const useFilter = () => useContext(FilterContext);
