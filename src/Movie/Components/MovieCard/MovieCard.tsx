import Button from "react-bootstrap/esm/Button";
import { IMovieTypes, IRating } from "../../../types";
import "./MovieCard.d.css";

export default function MovieCard({ ...MovieData }: IMovieTypes) {
  const {
    title,
    release_year,
    genre,
    imdb_rating,
    popularity,
    description,
    poster_url,
    language,
  } = MovieData;
  const ratingValue = imdb_rating ?? popularity;
  const ratingScale:any = imdb_rating ? "IMDB_Rating" : "Popularity";
  const buttonColor = (
    value: string | number | undefined,
    ratingScale: IRating
  ): string => {
    const rating = Number(value);

    if (Number.isNaN(rating)) return "gray";
    if (rating >= 10) return "green";
    if (rating > 8) return "lightgreen";
    if (rating > 4) return "orange";

    return "red";
  };

  return (
    <>
      <div className=" m-sm-2 m-lg-5 col-lg-2 col-xm-3 ">
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
              <Button
                className="rating"
                style={{
                  backgroundColor: buttonColor(ratingValue, ratingScale),
                  color: "black",
                }}
              >
                {ratingScale}: {ratingValue} / 10
              </Button>
            </div>
          </div>
        </div>
        <div className="card-footer"></div>
      </div>
    </>
  );
}
