import { useFilter } from "../FilterContext";
import SearchFilter from "../Search&FilterComponents";
import GenreFilter from "../Search&FilterComponents/GenreFilter";

export default function FilterBox() {
  const { search, setSearch, setGenre, searchlenght, genres } = useFilter();
  return (
    <>
      <SearchFilter
        searchText={search}
        setSearchText={setSearch}
        searchlenght={searchlenght}
      />
      <GenreFilter genres={genres} handleFilterButton={setGenre} />
    </>
  );
}
