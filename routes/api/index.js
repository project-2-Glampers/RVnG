const router = require('express').Router();
const cityRoutes = require('./city-api-routes');


router.use('/', cityRoutes);


module.exports = router;
