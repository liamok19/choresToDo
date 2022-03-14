const router = require('express').Router();
const parentRoutes = require('./parentRoutes');
const childRoutes = require('./childRoutes');
const choresRoutes = require('./choresRoutes');
const userRoutes = require('./userRoutes');

router.use('/parent', parentRoutes);
router.use('/child', childRoutes);
router.use('/chores', choresRoutes);
router.use('/user', userRoutes);
module.exports = router;