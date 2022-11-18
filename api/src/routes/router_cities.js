var { Router } = require("express");
var router = Router();

//Destructuring de cities_controller donde tengo la logica
const { getCitiesApi, getCities } = require("../controllers/controller_cities");

//Get all Cities
router.get("/cities/Api", getCitiesApi);
router.get("/cities", getCities);

module.exports = router;
