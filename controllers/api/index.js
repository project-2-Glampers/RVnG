const router = require('express').Router();
const cityRoutes = require('./city-routes');
const userRoutes = require('./user-routes.js');
const rvRoutes = require('./rv-routes');
//const restRoutes = require('./')


router.use('/city', cityRoutes);
router.use('/users', userRoutes);
router.use('/rv', rvRoutes);


module.exports = router;
