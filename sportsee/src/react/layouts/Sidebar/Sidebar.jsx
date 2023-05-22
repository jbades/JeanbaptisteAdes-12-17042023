import yoga from "../../../assets/yoga.svg"
import swim from "../../../assets/swim.svg"
import bike from "../../../assets/bike.svg"
import weight from "../../../assets/weight.svg"
import { NavLink } from "react-router-dom"

function Sidebar() {
    return (
        <div className="sidebar__wrapper">
            <div className="icons__wrapper">
                <NavLink to="#">
                    <div className="icon__wrapper">
                        <img  src={yoga} alt="sportsee-logo" className="sidebar__icon" />
                    </div>
                </NavLink>
                <NavLink to="#">
                    <div className="icon__wrapper">
                        <img  src={swim} alt="sportsee-logo" className="sidebar__icon" />
                    </div>
                </NavLink>
                <NavLink to="#">
                    <div className="icon__wrapper">
                        <img  src={bike} alt="sportsee-logo" className="sidebar__icon" />
                    </div>
                </NavLink>
                <NavLink to="#">
                    <div className="icon__wrapper">
                        <img  src={weight} alt="sportsee-logo" className="sidebar__icon" />
                    </div>
                </NavLink>
            </div>
            <div className="copyright">Copyright, SportSee 2020</div>
        </div>
    )
}

export default Sidebar