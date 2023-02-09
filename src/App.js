import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create/Create";
import RecipeCard from "./components/RecipeDetails/RecipeCard";

function App() {
  return (
    <div className="App">
      <div className="content">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/recipe/:id" element={<RecipeCard />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
