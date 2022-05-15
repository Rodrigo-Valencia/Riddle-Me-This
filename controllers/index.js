const router = require('express').Router();

const apiRoutes = require('./api');
const mainpageRoutes = require('./mainpage-route.js');

router.use('/', mainpageRoutes)
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send("Wrong Route!")
});

module.exports = router;
