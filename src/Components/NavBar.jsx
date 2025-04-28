import { Link } from "react-router-dom";

function NavBar() {
    return(
        <div className="navbar">
            <div className="logo">
                <Link to="/">Movie</Link>
            </div>
            <div className="nav-items">
                <Link to="/"> Home</Link>
                <Link to="/Favorites">Favorites</Link>
            </div>
        </div>
    )
}

export default NavBar;