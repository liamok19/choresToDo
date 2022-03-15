const router = require('express').Router();
const { Child, Chores, Parent } = require('../../models');
const { beforeDestroy } = require('../../models/User');

// The `/api/chores` endpoint

router.get('/:id',  async (req, res) => {
    try {
      const choresData = await Chores.findByPk(req.params.id, {
        
      });
  
      if (!choresData) {
        res.status(404).json({ message: 'No chores found with this id!' });
        return;
      }
  
      res.status(200).json(choresData);
    } 
    catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/parent/:id', async (req, res) => {
    try {
        const choresData = await Chores.findAll({
            where: {
                parent_id: req.params.id
            }
        });
        res.status(200).json(choresData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/child/:id', async (req, res) => {
    try {
        const choresData = await Chores.findAll({
            where: {
                child_id: req.params.id
            }
        });
        res.status(200).json(choresData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {

    try {
      const childData = await Child.findByPk(req.body.child_id);
      if (!childData) {
        res.status(404).json({ message: 'Invalid Child ID!' });
        return;
      };
      const parentData = await Parent.findByPk(req.body.parent_id);
      if (!parentData) {
        res.status(404).json({ message: 'Invalid Parent ID!' });
        return;
      };
    
      const choresData = await Chores.create({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        NumberofCredits: req.body.NumberofCredits,
        parent_id: req.body.parent_id,
        child_id: req.body.child_id
        })
        res.status(200).json(choresData);
    } catch (err) {
        res.status(500).json(err.message);
      }
  });

  router.put('/:id', async (req, res) => {
    
    try {

      const childData = await Child.findByPk(req.body.child_id);
      if (!childData) {
        res.status(404).json({ message: 'Invalid Child ID!' });
        return;
      };

      const parentData = await Parent.findByPk(req.body.parent_id);
      if (!parentData) {
        res.status(404).json({ message: 'Invalid Parent ID!' });
        return;
      };

      const choresData = await Chores.update(req.body, {
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        NumberofCredits: req.body.NumberofCredits,
        parent_id: req.body.parent_id,
        child_id: req.body.child_id,
        where: {
          id: req.params.id,
        }
      })
      res.status(200).json(choresData);
    } catch (err) {
        res.status(500).json(err);
    }
  }
);

module.exports = router;
