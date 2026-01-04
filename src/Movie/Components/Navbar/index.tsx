import { Link } from "react-router-dom";
import "./index.css";
import logo from "../../../assests/logo.png";
import { Button, ButtonGroup } from "react-bootstrap";
import { useFilter } from "../FilterComponents/FilterContext";

export default function NavBar() {
  const { category, setCategory } = useFilter();
  return (
    <>
      <nav className="fixed-top">
        <div className="container-fluid bg-purple-custom d-flex flex-wrap gap-2 justify-content-center justify-content-sm-between h-100 p-3 ">
          <div className="site-brand align-items-center d-flex gap-2">
            <Link
              to="/"
              className="text-decoration-none d-flex align-items-center gap-2"
            >
              <img src={logo} alt="Logo" className="logo-img" />
              <div className="brand-name-background">
                <div className="brand-Name">Movie Flex</div>
              </div>
            </Link>
          </div>
          <ButtonGroup className="active-btn  gap-2 row d-flex-sm me-lg-4 size-sm custom-button-sm">
            {/* <div className=" gap-2 row  me-4 "> */}
            <Button
              className={`nav-item col-auto  btn-round ${
                category === "All" ? "active" : ""
              }`}
              onClick={() => setCategory("All")}
            >
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </Button>
            <Button
              className={`nav-item col-auto  btn-round ${
                category === "Movies" ? "active" : ""
              }`}
              onClick={() => setCategory("Movies")}
            >
              <Link to="/movies" className="nav-link ">
                Movies
              </Link>
            </Button>
            <Button
              className={`nav-item col-auto  btn-round ${
                category === "Web-Series" ? "active" : ""
              }`}
              onClick={() => setCategory("Web-Series")}
            >
              <Link to="/web-series" className="nav-link">
                Web Series
              </Link>
            </Button>
            <Button
              className={`nav-item col-auto  btn-round ${
                category === "Tv-Shows" ? "active" : ""
              }`}
              onClick={() => setCategory("Tv-Shows")}
            >
              <Link to="/tv-shows" className="nav-link">
                TV Shows
              </Link>
            </Button>
            <Button
              className={`nav-item col-auto  btn-round ${
                category === "Songs" ? "active" : ""
              }`}
              onClick={() => setCategory("Songs")}
            >
              <Link to="/songs" className="nav-link">
                Songs
              </Link>
            </Button>
            {/* </div> */}
          </ButtonGroup>
        </div>
      </nav>
    </>
  );
}
