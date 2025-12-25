import { Link, Navigate } from "react-router-dom";
import "./index.css";

export default function NavBar() {
  const Home = () => {
    <Navigate to={"/home"} />;
  };
  const Movie = () => {
    <Navigate to={"/movies"} />;
  };
  const webSeries = () => {
    <Navigate to="/web-series" />;
  };
  const tvShows = () => {
    <Navigate to={"/tv-shows"} />;
  };
  return (
    <>
      <div className="container-fluid bg-purple-custom d-flex flex-wrap-sm  align-items-center justify-content-between h-100 p-3 ">
        <div className="site-brand align-items-center d-flex gap-2">
          <Link
            to="/"
            className="text-decoration-none d-flex align-items-center gap-2"
          >
            <div>Logo</div>
            <div className="brand-name">BrandName</div>
          </Link>
        </div>
        <div className=" gap-2 row  me-4 ">
          <div className="nav-item col-auto  btn-round">
            <Link to="/home" onClick={Home} className="nav-link">
              Home
            </Link>
          </div>
          <div className="nav-item col-auto btn-round">
            <Link to="/movies" className="nav-link">
              Movies
            </Link>
          </div>
          <div className="nav-item col-auto  btn-round">
            <Link to="/web-series" className="nav-link">
              Web Series
            </Link>
          </div>
          <div className="nav-item col-auto  btn-round">
            <Link to="/tv-shows" className="nav-link">
              TV Shows
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
