import { Route, Routes } from "react-router-dom";
import MovieCard from "./Components/MovieCard";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import NavBar from "./Components/NavBar";
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;