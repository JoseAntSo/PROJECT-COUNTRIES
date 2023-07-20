import { NavLink } from "react-router-dom";
import { useState } from "react";
import { SearchName, filterbycont, ordenamientoalfa,ordenamientopopu,filtrarAct } from "../../redux/actions";
import { useDispatch , useSelector } from 'react-redux';
import styles from './NavBar.module.css';
export default function NavNar() {
    const getactivities = useSelector((state)=>state.AllActivities);
    
    const dispatch = useDispatch();
    //almaceno los cambios producidos en el input
    const [input, setInput] = useState({
        searchinput: ''
    });
    // sirve para setear el input en la primera option del select
    const [selectoption, setSelectoption] = useState('');
    //funcion que controla los cambios en el input
    let handleChange = (event) => {
        setInput({ ...input, searchinput: event.target.value })
    }
    // funcion que controla la seleccion de filtrado por continente, tomando sus valor y 
    // despachando con la actioncreator , luego setear el valor en un estado local para imprimir
    // la primera option del select
    let handleChangeNav = (event) => {
        dispatch(filterbycont(event.target.value))
        setSelectoption(event.target.value);
    }
    // funcion para despachar y hacer la peticion al back-end
    let handleInput = () => {
        // console.log('anashee')
        dispatch(SearchName(input.searchinput));
    }

    // ------------------------------------------------ I N P U T S ---------------------------------------------------------------------
    // sirve para setear los inputs en si primera option del select
    const [selectAlfa, setSelectAlfa] = useState('');
    const [selectPopu, setSelectPopu] = useState('');
    const [filterAct,setFilterAct] = useState('');
    // funciones que capturan la seleccion del inputs y despachan una actioncreator
    let handleChangeOrd = (event) => {
        dispatch(ordenamientoalfa(event.target.value));
        setSelectAlfa(event.target.value);
    };
    let handleChangePopu = (event) => {
        dispatch(ordenamientopopu(event.target.value))
        setSelectPopu(event.target.value);
    };
    let handleChangeAct = (event) =>{
        // console.log(event.target.value);
        dispatch(filtrarAct(event.target.value));
        setFilterAct(event.target.value);
    }
    

    return (
        <div className={styles.containerNav}>
            {/* boton para dirigirme al link home */}
            <NavLink to='/Home'>
                <span>HOME</span>
            </NavLink>
            <NavLink to='/Form'>
                <span>NEW ACTIVITY</span>
            </NavLink>
            <NavLink to='/Activities'>
                <span>ACTIVITIES</span>
            </NavLink>
            <h4>Filter Activities</h4>
            <select name="" id=""onChange={(event)=>{handleChangeAct(event)}}>
                <option value={filterAct}disabled>Select Option</option>
                {getactivities.map((e,i)=>{
                    return(
                        <option value={e.name} key={i}>{e.name}</option>
                    )
                    })}
            </select>
            {/* input de busqueda donde controlo sus cambios y los almaceno en un estado local */}
            <input type="text" placeholder="Search country" value={input.searchinput} onChange={handleChange} />
            <button onClick={handleInput}>SEARCH</button>
            {/* boton para dirigirme al link form */}
            {/* boton de seleccion con despliegue para cada continente */}
            <h4>Filter Continent
            <select onChange={(event) => { handleChangeNav(event) }} value={selectoption}>
                <option value="" disabled>Select Option</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="South America">South America</option>
                <option value="Oceania">Oceania</option>
                <option value="Antarctica">Antarctica</option>
                <option value="AllContinents">AllContinents</option>
            </select></h4>
            <h4>Order by
            <select onChange={(event) => { handleChangeOrd(event) }} value={selectAlfa}>
                <option value="" disabled>Select Option</option>
                <option value="A">Ascendent</option>
                <option value="D">Descendent</option>
            </select></h4>
            <h4>Order by Population
            <select onChange={(event) => { handleChangePopu(event) }} value={selectPopu}>
                <option value="" disabled>Select Option</option>
                <option value="LP">Largest Population</option>
                <option value="SP">Smallest Population</option>
            </select></h4>
            <NavLink to='/'>Logout</NavLink>
        </div>
    )
};