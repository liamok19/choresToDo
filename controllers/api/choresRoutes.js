const router = require('express').Router();
const { Child, Parent, Chores, User } = require('../../models');


// get all products
router.get('/', async (req, res) => {
    // find all children
    try {
        const childData = await Child.findAll();
        res.status(200).json(childData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
