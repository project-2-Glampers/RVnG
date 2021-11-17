const router = require('express').Router();
<<<<<<< HEAD
const cityRoutes = require('./city-routes');
const userRoutes = require('./user-routes.js');
const rvRoutes = require('./rv-routes');
//const restRoutes = require('./')
=======
const cityRoutes = require('./city-api-routes');
const userRoutes = require('./user-routes.js');
const rvRoutes = require('./rv-routes');
>>>>>>> b0034b21f450dbdefc595dc58928c71ba57fff39


router.use('/', cityRoutes);
router.use('/users', userRoutes);
router.use('/rv', rvRoutes);
<<<<<<< HEAD
router.use('/city', cityRoutes);
//router.use('/restaurants', )
=======
>>>>>>> b0034b21f450dbdefc595dc58928c71ba57fff39


module.exports = router;
