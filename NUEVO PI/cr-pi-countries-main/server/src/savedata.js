const axios = require('axios')
const {Country}= require('./db')
const filterData = (countries)=>{
    return{
        id : countries.cca3,
        name: countries.name.common,
        flagImage: countries.flags.png,
        continent:countries.continents[0],
        capital:countries.capital?.[0]||"not capital",
        subregion:countries.subregion,
        population:countries.population,
        area:countries.area
    }
}

const saveData = async()=>{
    const countries = await axios.get("http://localhost:5000/countries")
    const allCountries = countries.data.map(element =>{
       return filterData(element)
    });
    // allCountries.forEach(async(element) => {
    //   await  Country.create(element)
    // });
}


module.exports={saveData}