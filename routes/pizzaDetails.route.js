const express = require('express');
const router = express.Router();
const pizzaDetailsController = require('../controllers/pizzaDetails.controller');

// When a GET request hits the root of this router, run getAllUsers
router.post('/savePizzadetails', pizzaDetailsController.savePizzadetails);

router.post('/updatePizzadetails', pizzaDetailsController.updatePizzadetails);

router.post('/deletePizzadetails', pizzaDetailsController.deletePizzadetails);

router.get('/getAllPizzadetails', pizzaDetailsController.getAllPizzadetails);

router.post('/getPizzadetailsbyId', pizzaDetailsController.getPizzadetailsbyId);

module.exports = router;