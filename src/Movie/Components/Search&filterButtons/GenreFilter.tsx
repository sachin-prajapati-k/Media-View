import Button from "react-bootstrap/esm/Button";

export default function GenreFilter({
  filterType = "Genre",
  handleFilterButton,
  genres = [],
}: any) {
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center"
        style={{ color: "cyan" }}
      >
        <div>Filter by {filterType}</div>
      </div>
      <div className="d-flex justify-content-center flex-wrap text-white gap-2 ">
        {genres.map((genre: string) => (
          <Button
            key={genre}
            className="rounded-pill filter-btn"
            onClick={() => handleFilterButton(genre.toLocaleLowerCase())}
          >
            {genre}
          </Button>
        ))}
        {/*         
        <Button className="rounded-pill filter-btn">Action</Button>
        <Button className="rounded-pill filter-btn">Comedy</Button>
        <Button className="rounded-pill filter-btn">Thriller</Button>
        <Button className="rounded-pill filter-btn">Drama</Button> */}
      </div>
    </>
  );
}
