const router = require('express').Router();
const { Child, Chores } = require('../../models');

// The `/api/chores` endpoint

router.get('/api/chores', async (req, res) => {
    // find all categories
    // be sure to include its associated Products
    try {
        const choresData = await Chores.findAll();
        res.status(200).json(choresData);
    } catch (err) {
        res.status(500).json(err);
    }
    });

    router.get('/:id', async (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    try {
        const choresData = await Chores.findByPk(req.params.id, {
        // JOIN to get the Product for this Category
        include: [{ model: Child }],
        });
    if (!choresData) {
        res.status(404).json({ message: 'No Chores found with this id!' });
    return;
    }

    res.status(200).json(choresData);
    } catch (err) {
    res.status(500).json(err);
    }
});

module.exports = router;
