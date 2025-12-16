import "./App.css";
import ProductList from "./Components New/ProductCard/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import { ExtraEvents } from "./BasicEvents/ExtraEvents";
import NavBar from "./Components New/Navbar/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductList />
      <ExtraEvents />
    </div>
  );
}

export default App;
