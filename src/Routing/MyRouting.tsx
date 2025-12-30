import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "../Movie/Pages/MoviePage";
import MovieHomePage from "../Movie/Pages/HomePage";
import NavBar from "../Movie/Components/Navbar";
import WebSeries from "../Movie/Pages/WebSeriesHomePag";
import TvShows from "../Movie/Pages/TvShowsPage";
import FilterBox from "../Movie/Components/FilterComponents/Filter&ShortBox";
import { FilterProvider } from "../Movie/Components/FilterComponents/FilterContext";

export default function MyRouting() {
  return (
    <FilterProvider>
      <Router>
        <NavBar />
        <FilterBox />
        <Routes>
          <Route path="/" element={<MovieHomePage />} />
          <Route path="/home" element={<MovieHomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/web-series" element={<WebSeries />} />
          <Route path="/tv-shows" element={<TvShows />} />
        </Routes>
      </Router>
    </FilterProvider>
  );
}
