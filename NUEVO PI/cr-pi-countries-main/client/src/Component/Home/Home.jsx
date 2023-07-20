import axios from 'axios'
import {useDispatch} from 'react-redux'
import { getAllCountries } from '../../redux/actions/index';
import { useEffect } from 'react';
import Cards from '../Cards/Cards';

export default function Home(){

    //cuando se monta el componente home, despacha la action, para cargar en nuestro estado global 
    // a todos los paises
    const dispatch = useDispatch();
   
    useEffect(()=>{
        dispatch(getAllCountries())
    },[])
    
    return(
        <div>
            {/* renderizado del componente cards */}
            <Cards />
        </div>
    );
};
