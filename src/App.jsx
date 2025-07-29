import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Data from "./data/data"

function App() {
  return (
    <div className="app_container">
      <Header />
      <div className="products_container">
        {
          Data.map((cake, i) => (
           <>
           <Card cake={cake} key={i}/>
           </>
          ))
        }
        
      </div>
    </div>
  );
}

export default App;
