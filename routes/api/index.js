const router = require('express').Router();
const cityRoutes = require('./city-api-routes');
const userRoutes = require('./user-routes.js');


router.use('/', cityRoutes);
router.use('/users', userRoutes);


module.exports = router;
