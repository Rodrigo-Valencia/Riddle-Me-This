const router = require('express').Router();

// const apiRoutes = require('./api');
const mainpageRoutes = require('./mainpage-route.js');

router.use('/', mainpageRoutes)
// router.use('/api', apiRoutes);

module.exports = router;
