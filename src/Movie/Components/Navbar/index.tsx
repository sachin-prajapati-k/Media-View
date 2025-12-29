import { Link } from "react-router-dom";
import "./index.css";
import logo from "../../../assests/logo.png";
import { Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";

export default function NavBar() {
  const [active, setActive] = useState(1);

  // const Home = () => {
  //   <Navigate to={"/home"} />;
  // };
  // const Movie = () => {
  //   <Navigate to={"/movies"} />;
  // };
  // const webSeries = () => {
  //   <Navigate to="/web-series" />;
  // };
  // const tvShows = () => {
  //   <Navigate to={"/tv-shows"} />;
  // };
  return (
    <>
      <div className="container-fluid bg-purple-custom d-flex flex-wrap-sm  align-items-center justify-content-between h-100 p-3 ">
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
        <ButtonGroup className="active-btn  gap-2 row  me-4">
          {/* <div className=" gap-2 row  me-4 "> */}
          <Button
            className={`nav-item col-auto  btn-round ${
              active === 1 ? "active" : ""
            }`}
            onClick={() => setActive(1)}
          >
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </Button>
          <Button
            className={`nav-item col-auto  btn-round ${
              active === 2 ? "active" : ""
            }`}
            onClick={() => setActive(2)}
          >
            <Link to="/movies" className="nav-link ">
              Movies
            </Link>
          </Button>
          <Button
            className={`nav-item col-auto  btn-round ${
              active === 3 ? "active" : ""
            }`}
            onClick={() => setActive(3)}
          >
            <Link to="/web-series" className="nav-link">
              Web Series
            </Link>
          </Button>
          <Button
            className={`nav-item col-auto  btn-round ${
              active === 4 ? "active" : ""
            }`}
            onClick={() => setActive(4)}
          >
            <Link to="/tv-shows" className="nav-link">
              TV Shows
            </Link>
          </Button>
          {/* </div> */}
        </ButtonGroup>
      </div>
    </>
  );
}
