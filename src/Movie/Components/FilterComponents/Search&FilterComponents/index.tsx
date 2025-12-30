export default function SearchFilter({
  Title = "Bollywod Hits",
  searchText,
  setSearchText,
  searchlenght,
}: any) {
  return (
    <>
      <div className="mt-3 container flex-column align-items-center text-white p-0">
        <div className="m-0">
          <h1 style={{ color: "yellow" }}>{Title}</h1>
        </div>
        <div className="container p-0 justify-content-center">
          <input
            className="form-control w-50 w-lg-50 w-sm-25"
            type="text"
            placeholder="Search here"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <p className="mt-1">
          Found {searchlenght} result{searchlenght !== 1 ? "s" : ""} for "
          {searchText}"
        </p>
      </div>
    </>
  );
}
