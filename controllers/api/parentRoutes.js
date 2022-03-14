const router = require('express').Router();
const { request } = require('express');
const { Parent } = require('../../models');


// get parent details using the parent_id, assumed authentication done and user has access
router.get('/:id',  async (req, res) => {
  try {
    const parentData = await Parent.findByPk(req.params.id, {
      
    });

    if (!parentData) {
      res.status(404).json({ message: 'No parent record found with this id!' });
      return;
    }

    res.status(200).json(parentData);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {

    try {
      const parentData = await Parent.create({
        name: req.body.name,
        email: req.body.email,
        chart: req.body.chart,
        user_id: req.body.user_id
      })
      .then ((parent) => {
        return res.status(200).json(parent)
        }
    )}
    catch (err) { 
      console.log(err);
      res.status(400).json(err);
    }
});


router.put('/:id', async (req, res) => {
    try {
      const parentData = await Parent.update({
        name: req.body.parent_name,
        email: req.body.email,
        chart: req.body.chart,
        where: {
          id: req.params.id
      }
      })
      .then ((parent) => {
        
          return res.status(200).json(parentData)
        }
    )}
  catch (err) {
    console.log(err.message);
    res.status(400).json(err.message);
  };
});

router.delete('/:id', async (req, res) => {
  
try {  
  const parentData = await Parent.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!parentData) {
      res.status(404).json({ message: 'No parent found with this id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
