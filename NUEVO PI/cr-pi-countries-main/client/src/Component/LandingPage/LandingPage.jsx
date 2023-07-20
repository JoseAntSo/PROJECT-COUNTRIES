import { NavLink } from "react-router-dom";
import Landing from '../LandingPage/LandingPage.module.css'

export default function LandingPage(){
    return(
        <div className={Landing.landingContainer}>
            <NavLink to='/Home'>
                <button className={Landing.colorbutton}>WELCOME</button>
            </NavLink>
        </div>
    )
}