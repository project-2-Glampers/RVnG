const router = require('express').Router();
<<<<<<< HEAD

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});
=======
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes')

router.use('/', homeRoutes)
router.use('/api', apiRoutes);

>>>>>>> b0034b21f450dbdefc595dc58928c71ba57fff39

module.exports = router;