const { Country , Activity } = require('../db');
const { Op } = require('sequelize');

const getHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if(!name){
            const response = await Country.findAll();
            res.status(200).json(response);
        } else {
            const NameCountry = await Country.findOne(
                {where:{
                        name: {[Op.iLike]:`%${name}%`}},
                        include:{       //permite incluir para mostrar con la tabla 
                            model:Activity, //defino que muestre la tabla activity
                            attributes:["name","difficulty","duration","season"],   // con los siguientes atributos
                            through: { attributes: [] } //elimina para mostrar la tabla intermedia de relacion, tmb se puede utilizar el exclude
                        }
                });
            if(!NameCountry){
                throw new Error('Country not found');
            } else {
                res.status(200).json(NameCountry);
            }
        };
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const getIdHandler = async (req, res) => {
    const { idPais } = req.params;
    try {
        const country = await Country.findOne(
            {where:{
                    id:idPais.toUpperCase()},
                    include:{       //permite incluir para mostrar con la tabla 
                        model:Activity, //defino que muestre la tabla activity
                        attributes:["name","difficulty","duration","season"],   // con los siguientes atributos
                        through: { attributes: [] } //elimina para mostrar la tabla intermedia de relacion, tmb se puede utilizar el exclude
                    }
            });
        if (country) {
            res.status(200).json(country);
        } else {
            throw new Error('Not Found or misspelled name');
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = {
    getHandler,
    getIdHandler
}

