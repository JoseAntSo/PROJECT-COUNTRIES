
import axios from "axios";
import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL,FILTER_CONTINENT, ORDER_ALFA ,ORDER_POPU, SEARCH,CREATE_ACTIVITY,GET_ALL_ACTIVITIES, FILTER_ACTIVITY} from "../actionstypes";


// Esta función debe realizar una petición al Back-End. Luego despachar una action con la data recibida.
// End-Point: 'http://localhost:3001/countries'.

export const getAllCountries = () => {
    return async function (dispatch){
        let response = await axios.get('http://localhost:3001/countries')
        dispatch ({
            type: GET_ALL_COUNTRIES,
            payload: response.data
        })
    }
};


// Esta función hace una petición al Back-End. Teniendo en cuenta que tiene que recibir un "id" por
// parámetro. Luego despachar una action con la data recibida.
// End-Point: 'http://localhost:3001/countries/:id'.
export const getCountryDetail = (id) => {
    return async function (dispatch){
        let response = await axios.get(`http://localhost:3001/countries/${id}`)
        dispatch ({
            type: GET_COUNTRY_DETAIL,
            payload: response.data
        })
    }
};

// // 🟢 createDeporte:
// // Esta función debe recibir una variable "deportes" por parámetro.
// // Luego retornar una action que, en su propiedad payload:
// //    - haga un spread operator de la variable deportes, para copiar todo su contenido.
// //    - tenga una nueva propiedad "id" igual a la variable de abajo, pero con un incremento +1.
// // Descomenta esta variable cuando la necesites.
// let id = 1;
// export const createDeporte = (deportes) => {
//     return {
//         type: CREATE_DEPORTE,
//         payload: {...deportes, id:id++}
//     }
// };

// // 🟢 deleteDeporte:
// // Esta función debe retornar una action. En su propiedad "payload" guardarás el ID recibido por parámetro.
// export const deleteDeporte = (id) => {
//     return {
//         type: DELETE_DEPORTE,
//         payload: id
//     }
// };


// Esta funcion retorna una action. En su propiedad payload guarda el continente por cual filtrar.
export const filterbycont = (continent) =>{
    return {
        type: FILTER_CONTINENT,
        payload:continent
    }
};

// Esta funcion retorna una action. En su propiedad payload guarda la instruccion de ordenamiento

export const ordenamientoalfa = (order) =>{
    return{
        type: ORDER_ALFA,
        payload: order
    }
};

// Esta funcion retorna una action. En su propiedad payload guarda la instruccion de ordenamiento
export const ordenamientopopu = (order) =>{
    return{
        type: ORDER_POPU,
        payload: order
    }
}

// Esta función hace una petición al Back-End. Teniendo en cuenta que tiene que recibir un "name" por
// parámetro. Luego despachar una action con la data recibida.
// End-Point: 'http://localhost:3001/countries/?name=value'.
export const SearchName = (nameCountry) =>{
    try {
        return async(dispatch)=>{
            const foundCountry = await axios.get(`http://localhost:3001/countries/?name=${nameCountry}`);
            dispatch({
                type: SEARCH,
                payload:foundCountry.data
            })
        }
    } catch (error) {
       
    }
}
export const postActivity = (activity)=>{
    try {
        console.log(activity)
        return async(dispatch)=>{
            const create = await axios.post(`http://localhost:3001/activities`,activity);
            dispatch({
                type: CREATE_ACTIVITY,
                payload: create.data
            })
        }
    } catch (error) {
        
    }
};
export const getActivities = () =>{
    try {
        return async(dispatch)=>{
            const res = await axios.get(`http://localhost:3001/activities`)
            dispatch({
                type:GET_ALL_ACTIVITIES,
                payload: res.data
            })
        }
    } catch (error) {
        
    }
}

export const filtrarAct = (filterCont) =>{
    return{
        type: FILTER_ACTIVITY,
        payload:filterCont
    }
}