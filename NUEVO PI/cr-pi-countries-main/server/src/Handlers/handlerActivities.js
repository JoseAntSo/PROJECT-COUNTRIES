const { Activity, Country } = require('../db')

const getHandler = async (req, res) => {
    const AllActivities = await Activity.findAll({
        include: {       //permite incluir para mostrar con la tabla 
            model: Country, //defino que muestre la tabla activity
            attributes: ["name"],   // con los siguientes atributos
            through: { attributes: [] } //elimina para mostrar la tabla intermedia de relacion, tmb se puede utilizar el exclude
        }
    });
    try {
        if (AllActivities.length == 0) {
            throw new Error('Activities were not loaded');
        }
        res.status(200).json(AllActivities);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const postHandler = async (req, res) => {
    try {
        const { name, difficulty, duration, season, countries } = req.body;
        const ActivitiesFound = await Activity.findOne({ where: { name: name } });
        if (ActivitiesFound || !name.length) {
            throw new Error('Activity is already created OR not have a name');
        } else if (!countries.length) {
            throw new Error('There must be at least 1 country');
        } else {
            const NewAct = await Activity.create({ name, difficulty, duration, season });
            const ActivitiesCountry = await NewAct.setCountries(countries);
            res.status(200).json(ActivitiesCountry);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getHandler,
    postHandler
}