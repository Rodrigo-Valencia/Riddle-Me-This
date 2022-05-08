const router = require('express').Router();
const apiRoutes = require('./api');
const mainpageRoutes = require('./mainpage-route.js');

router.use('/api', apiRoutes);
router.use('/', mainpageRoutes)

module.exports = router;
