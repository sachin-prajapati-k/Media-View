import logo from './logo.svg';
import './App.css';

function App() {
  const name="sachin"
  const currentYear= new Date().getFullYear();
  return (
    <div className="App">
     <h1>Hello {name}</h1>
     <h>CurrentYear is : {currentYear}</h>
    </div>
  );
}

export default App;
