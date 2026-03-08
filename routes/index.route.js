const express = require('express');
const router = express.Router();

const pizzaDetailsRoutes = require('./pizzaDetails.route');

const customerDetailsRoutes = require('./customerDetails.route');

router.use('/pizzaDetails', pizzaDetailsRoutes);

router.use('/customerDetails', customerDetailsRoutes);


module.exports = router;