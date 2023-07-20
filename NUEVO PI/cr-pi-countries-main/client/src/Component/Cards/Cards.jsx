import { useSelector, useDispatch } from "react-redux";
import Card from '../Card/Card';
import { ordenamientoalfa, ordenamientopopu } from '../../redux/actions/index';
import { useState } from "react";
import Pagination from "./Pagination";
import styles from './Cards.module.css'

// componente cards encargado de mapear los paises y mandar la informacion a card 
// para que la muestre en pantalla
export default function Cards() {

    // suscripciones a nuestro estado global, por un lado donde estan todos los paises y 
    // el otro donde hay paises filtrados
    const AllCountries = useSelector((state) => { return state.AllCountries });
    const FilterCountries = useSelector((state) => state.CountriesFilter);

    //logica para determinar si mostrar con filtrado o sin filtrado
    let Countries = FilterCountries.length > 0 ? FilterCountries : AllCountries;

    // ------------------------------------------- P A G I N A D O -------------------------------------------------------------------------------

    // estado local para paginado
    const [pagin, setPagin] = useState(1);     //posicion de la pagina
    const [pagin2, setPagin2] = useState(10);  //cantidad constante de paginas a mostrar

    // variable para determinar la cantidad de paginas a mostrar
    let totalpaginas = Math.ceil(Countries.length / pagin2);

    //  pagina final
    let pag_end = pagin * pagin2;

    // inicio pagina
    let pag_init = pag_end - pagin2;

    // muestra 10 elementos, dependiendo la pagina
    let MapCountries = Countries.slice(pag_init, pag_end);

    // funcion para manejar y capturar el value de la pagina
    const handlePageClick = (pageNumber) => {
        setPagin(pageNumber);
    };

    return (
        <div>
                {/* PAGINADO  */}
                <Pagination currentPage={pagin} totalPages={totalpaginas} handlePageClick={handlePageClick} />
                {/* PAGINADO */}
            <div className={styles.cardsContainer}>
            {MapCountries.map((element) => {
                return <Card
                    key={element.id}
                    id={element.id}
                    name={element.name}
                    flagImage={element.flagImage}
                    continent={element.continent}
                />
            })}
            </div>
        </div>
    )
}