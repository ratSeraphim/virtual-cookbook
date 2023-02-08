import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create/Create";
import { RecipeProvider } from "./RecipeContext";

function App() {
  return (
    <div className="App">
      <RecipeProvider>
        <Navbar />
        <div className="content">
          <BrowserRouter>
            <Routes>
              <Route path="/create" element={<Create />}></Route>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </RecipeProvider>
    </div>
  );
}

export default App;
