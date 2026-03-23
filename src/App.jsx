import "./css/App.css"
import MovieCard from "./components/MovieCard"
import Favorites from "./pages/Favorites";
import Genre from "./pages/Genre";
import Home from  "./pages/Home"
import NavBar from './components/NavBar';
import {Routes, Route} from "react-router-dom"
import { MovieProvider } from "./contexts/MovieContexts";

function App(){
  return (
    <MovieProvider>
      <NavBar />
   <main className="main-content">
    <Routes>
      <Route path="/genre/:genreName" element={<Genre />} />
      <Route path="/" element={<Home />}/>
      <Route path="/favorites" element={<Favorites />}/>
    </Routes>
   </main>
   </MovieProvider>
  );
}


export default App
