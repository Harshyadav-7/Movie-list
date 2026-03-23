import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
                <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <div className="genre-link dropdown">Genres
            <div className="dropdown-menu">
                    <Link to="/genre/action">Action</Link>
                    <Link to="/genre/romantic">Romantic</Link>
                    <Link to="/genre/crime">Crime</Link>
                    <Link to="/genre/thriller">Thriller</Link>
                    <Link to="/genre/comedy">Comedy</Link>
            </div>
            </div>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default NavBar