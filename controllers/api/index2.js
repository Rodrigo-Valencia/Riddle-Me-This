const router = require('express').Router();
const riddleRoutes = require('./riddleRoutes');

router.use('/riddles', riddleRoutes);

module.exports = router;









