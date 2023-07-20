// ID (Código de tres letras).
// Nombre.
// Imagen de la bandera.
// Continente.
// Capital.
// Subregión (si tiene).
// Área (si tiene).
// Población.

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from "../../redux/actions";
import style from './Detail.module.css';
export default function Detail(){
    
    const dispatch = useDispatch();
    const { id } = useParams();
    const Detail = useSelector((state)=>state.CountryDetail)
    useEffect(()=>{
        dispatch(getCountryDetail(id))
    },[])
    return(
        <div className={style.detailcard}>
            <img src={Detail.flagImage} alt="" />
            <h1>ID: {Detail.id}</h1>
            <h2>Name: {Detail.name}</h2>
            <h2>Continent: {Detail.continent}</h2>
            <h2>Capital: {Detail.capital}</h2>
            <h2>Subregion: {Detail.subregion}</h2>
            <h2>Area: {Detail.area}</h2>
            <h2>Population: {Detail.population}</h2>
        </div>
    )
}

{/* <h1>
  Activities:
  {Detail.Activities.length > 0 ? (
    Detail.Activities.map((act, index) => {
      return (
        <div key={index}>
          <h1>Name: {act.name}</h1>
          <h1>Difficulty: {act.difficulty}</h1>
          <h1>Duration: {act.duration}</h1>
          <h1>Season: {act.season}</h1>
        </div>
      );
    })
  ) : (
    'no tiene man'
  )}
</h1> */}
