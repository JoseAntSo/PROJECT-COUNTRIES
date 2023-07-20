import { NavLink } from "react-router-dom"
import styles from './Card.module.css'
export default function Card({id,name,flagImage,continent,capital,subregion,area,population}){
    return(
        <div className={styles.card}>
            <NavLink to={`/Detail/${id}`}>
                <img src={flagImage} alt="" />
            </NavLink>
            <h2>{name}</h2>
            <h3>{continent}</h3>
        </div>
    )
}