const { Router } = require("express");
const CountriesRouter = require('./CountriesRouter');
const ActivitiesRouter = require('./ActivitiesRouter')
const router = Router();

router.use('/countries', CountriesRouter);

router.use('/activities', ActivitiesRouter);

module.exports = router;
