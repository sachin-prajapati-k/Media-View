export default function SearchFilter({
  Title = "Bollywod Hits",
  searchText,
  setSearchText,
  searchlenght,
  sort,
  setSort,
}: any) {
  return (
    <>
      <div className="mt-5 container flex-column align-items-center text-white p-0 pt-4">
        <div className="m-0">
          <h1 style={{ color: "yellow" }}>{Title}</h1>
        </div>
        <div className="container p-0 justify-content-center gap-2">
          <input
            className="form-control w-50 w-lg-50 w-sm-25"
            type="text"
            placeholder="Search here"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <select
            className="form-select" style={{width:"150px"}}
            value={sort || ""}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort by...</option>
            <option value="genre">Genre</option>
            <option value="name">Name</option>
            <option value="year">Year</option>
          </select>
        </div>
        <p className="mt-1">
          {searchText
            ? `Found ${searchlenght}  ${
                searchlenght !== 1 ? "results" : "result"
              } for "${searchText}"`
            : ""}
        </p>
      </div>
    </>
  );
}
