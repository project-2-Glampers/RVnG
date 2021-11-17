const router = require('express').Router();
const cityRoutes = require('./city-api-routes');
const userRoutes = require('./user-routes.js');
const rvRoutes = require('./rv-routes');


router.use('/', cityRoutes);
router.use('/users', userRoutes);
router.use('/rv', rvRoutes);


module.exports = router;
