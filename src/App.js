import "./App.css";
import ProductList from "./Components New/ProductCard/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import { ExtraEvents } from "./BasicEvents/ExtraEvents";
import NavBar from "./Components New/Navbar/NavBar";
import InputEvent from "./BasicEvents/InputEvent";
import MovieHomePage from "./Movie/Pages/HomePage/index";
import { useEffect } from "react";
function App() {
  document.body.style.backgroundColor = "#1F1F1F";

  return (
    <div className="">
      <MovieHomePage />
      {/* <InputEvent /> */}
      {/* <NavBar />
      <ProductList />
      <ExtraEvents /> */}
    </div>
  );
}

export default App;
