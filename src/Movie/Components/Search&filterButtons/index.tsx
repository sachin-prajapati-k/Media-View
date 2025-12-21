import { useState } from "react";
import { MovieData } from "../../MovieData.tsx/Data";
import Movies from "../../Pages/MoviePage";

export default function SearchFilter({ Title = "Bollywod Hits" }: any) {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="mt-3 container flex-column align-items-center text-white ">
        <div className="m-0">
          <h1 style={{ color: "yellow" }}>{Title}</h1>
        </div>
        <div className="container p-0 justify-content-center">
          <input
            className="form-control w-50 w-lg-50 w-sm-25"
            type="text"
            placeholder="Searh here"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <p className="mt-1">Founded no. results for "{searchText}"</p>
      </div>
    </>
  );
}
