import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {

    return (
        <header>
            <nav>
                <ul className="nav">
                    <li>
                        <NavLink to="/" activeclassname="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies" activeclassname="active">Movie List</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tv" activeclassname="active">TV List</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )

};

export default Header;