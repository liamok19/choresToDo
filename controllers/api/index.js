const router = require('express').Router();
const choresRoutes = require('./choresRoutes');

router.use('/chores', choresRoutes);

module.exports = router;
