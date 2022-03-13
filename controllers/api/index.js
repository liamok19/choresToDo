const router = require('express').Router();
const parentRoutes = require('./parentRoutes');
// const childRoutes = require('./childRoutes');
const choresRoutes = require('./choresRoutes');

router.use('/parent', parentRoutes);
// router.use('/child', childRoutes);
router.use('/chores', choresRoutes);

module.exports = router;