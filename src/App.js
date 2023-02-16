import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create/Create";
import Homepage from "./components/Home/Homepage";

function App() {
  return (
    <div className="App">
      <div className="content">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/recipe/:id" element={<Homepage />}></Route>
            <Route path="/" element={<Homepage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
