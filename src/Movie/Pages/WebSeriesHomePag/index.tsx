import MovieCard from "../../Components/MovieCard/MovieCard";
import { IMovieTypes } from "../../../types";
import { useFilter } from "../../Components/FilterComponents/FilterContext";

export default function WebSeries() {
  const { filterData } = useFilter();

  return (
    <>
      <div className="d-flex flex-wrap align-items-center justify-content-center  row-col-2">
        {filterData.length > 0 ? (
          filterData.map((Series: IMovieTypes) => (
            <MovieCard key={Series.id} {...Series} />
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
