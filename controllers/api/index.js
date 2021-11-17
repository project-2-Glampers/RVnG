const router = require('express').Router();
const cityRoutes = require('./city-routes');
const userRoutes = require('./user-routes.js');
const rvRoutes = require('./rv-routes');
//const restRoutes = require('./')


router.use('/', cityRoutes);
router.use('/users', userRoutes);
router.use('/rv', rvRoutes);
router.use('/city', cityRoutes);
//router.use('/restaurants', )


module.exports = router;