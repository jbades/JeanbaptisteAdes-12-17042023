import logo from "../../../assets/logo.svg"
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <div className="header__wrapper">
            <NavLink to="#">
                <img  src={logo} alt="sportsee-logo" className="header__logo" />
            </NavLink>
            <nav className="header__navbar">
                <NavLink to="#">Accueil</NavLink>
                <NavLink to="#">Profil</NavLink>
                <NavLink to="#">Réglage</NavLink>
                <NavLink to="#">Communauté</NavLink>
            </nav>
        </div>
    )
}

export default Header