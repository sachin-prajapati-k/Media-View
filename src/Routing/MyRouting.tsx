import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "../Movie/Pages/MoviePage";
import MovieHomePage from "../Movie/Pages/HomePage";
import NavBar from "../Movie/Components/Navbar";

export default function MyRouting() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MovieHomePage />} />
        <Route path="/home" element={<MovieHomePage />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
}
