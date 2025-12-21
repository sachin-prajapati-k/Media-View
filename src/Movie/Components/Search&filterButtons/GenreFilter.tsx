import Button from "react-bootstrap/esm/Button";

export default function GenreFilter({ filterType = "Genre" ,handleFilterButton}: any) {
  return (
    <>
      <div
        className="container justify-content-center"
        style={{ color: "cyan" }}
      >
        <div>Filter by {filterType}</div>
      </div>
      <div className="d-flex justify-content-center text-white gap-2 ">
        <Button className="rounded-pill filter-btn" onClick={()=>handleFilterButton('action')}>All</Button>
        <Button className="rounded-pill filter-btn">Action</Button>
        <Button className="rounded-pill filter-btn">Comedy</Button>
        <Button className="rounded-pill filter-btn">Thriller</Button>
        <Button className="rounded-pill filter-btn">Drama</Button>
      </div>
    </>
  );
}
