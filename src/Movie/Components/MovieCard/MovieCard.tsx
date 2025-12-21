import Button from "react-bootstrap/esm/Button";
import { IMovieTypes } from "../../../types";
import "./MovieCard.d.css";
import { useMemo } from "react";
export default function MovieCard({ ...MovieData }: IMovieTypes) {
  const {
    title,
    release_year,
    genre,
    imdb_rating,
    description,
    poster_url,
    language,
  } = MovieData;

  return (
    <>
      <div className="m-5 col-lg-2 col-xm-3 ">
        <div className="card card-box h-100">
          <div className="card-header fw-bold ">{title}</div>
          <div className="card-img-top poster-img m-0">
            {poster_url ? (
              <img src={poster_url} alt="Poster" className="Movie-img" />
            ) : (
              ""
            )}
          </div>
          <div className="card-body justify-content-center pt-0">
            <span>
              {language} ({genre?.join(", ")})
            </span>
            <p>{release_year}</p>
            <p className="card-text description">{description}</p>
            <div className="text-center mt-auto">
              <Button className="rating">
                IMDB Rating: {imdb_rating} / 10
              </Button>
            </div>
          </div>
        </div>
        <div className="card-footer"></div>
      </div>
    </>
  );
}
