
import { GET_ALL_COUNTRIES , GET_COUNTRY_DETAIL, FILTER_CONTINENT, ORDER_ALFA,ORDER_POPU, SEARCH, GET_ALL_ACTIVITIES,FILTER_ACTIVITY} from "../actionstypes";

const initialState = {
   AllCountries: [],
   CountryDetail: {},
   CountriesFilter:[],
   AllActivities:[],
   ActivitiesFilt:[]
};

const rootReducer = (state = initialState, action) => {
   // Tu código:
   // console.log(action.payload);
   switch (action.type) {
      case GET_ALL_COUNTRIES:
         // almacenamos todos los paises
         return {
            ...state,
            AllCountries: action.payload
         }
      case GET_COUNTRY_DETAIL:
         // almacenamos el detalle de un solo pais
         return{
            ...state,
            CountryDetail:action.payload
         }
      case FILTER_CONTINENT:
         // almacenamos los paises filtrados por continente, ese dato es recibidos por payload Ej:(Asia) || (Europe) 
         const filterCont = state.AllCountries.filter((country)=> country.continent === action.payload)
          // aqui guardamos los paises filtrados por continente en nuestro estado global
         return{
            ...state,
            CountriesFilter: filterCont
         }
      case ORDER_ALFA:  
         // metodo de ordenamiento para propiedades con values tipo caracteres
         // este metodo se aplica para los paises filtrados
         const orderedCountries = [...state.CountriesFilter].sort((a, b) =>
            action.payload === "A" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
         );      
         // como tambien cuando tenemos todos los paises
         const orderedallCountries = [...state.AllCountries].sort((a, b) =>
            action.payload === "A" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
         );      
         // aqui guardamos todas las modificaciones provistas del ordenamiento
         return{
            ...state,
            CountriesFilter: orderedCountries,
            AllCountries: orderedallCountries
         }
      case ORDER_POPU:
         // metodo de ordenamiento para propiedades con values tipo numericos
         // este metodo se aplica para los paises filtrados
         const sortedByPopu = [...state.CountriesFilter].sort((a, b) =>
            action.payload === "LP" ? b.population - a.population : a.population - b.population
         );
         // como tambien cuando tenemos todos los paises
         const sortedByPopuAllCountries = [...state.AllCountries].sort((a, b) =>
            action.payload === "LP" ? b.population - a.population : a.population - b.population
         );
         // aqui guardamos todas las modificaciones provistas del ordenamiento
         return {
            ...state,
            CountriesFilter: sortedByPopu,
            AllCountries: sortedByPopuAllCountries
         };
      case SEARCH:
         return{
            ...state,
            CountriesFilter:[action.payload]
         }
      case GET_ALL_ACTIVITIES:
         return{
            ...state,
            AllActivities:action.payload
         }
      case FILTER_ACTIVITY:
         return{...state,
         ActivitiesFilt: state.AllActivities.filter((e)=>e.name === action.payload)
         }
      default: 
         return {...state};
   }
};

export default rootReducer;
