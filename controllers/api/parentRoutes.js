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

router.get('/user/:id',  async (req, res) => {
  try {
    const parentData = await Parent.findOne({
      where: {
        user_id: req.params.id
    }
    });
    if (!parentData) {
      res.status(404).json({ message: 'No user record found with this User id!' });
      return;
    }

    res.status(200).json(parentData);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
console.log(req.body)
    try {
      const parentData = await Parent.create({
        name: req.body.name,
        email: req.body.email,
        chart: req.body.chart,
        user_id: req.body.user_id
      })
      // .then ((parentData) => {
        console.log('parent api data',parentData);
        return res.status(200).json(parentData);
        // }
    // )
  }
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
      .then ((parentData) => {
        
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

    res.status(200).json(parentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/child/', async (req, res) => {

  try {

      const parentData = await Parent.findByPk(req.body.parent_id);
      if (!parentData) {
          res.status(404).json({ message: 'Invalid Parent ID' });
          return;
      }
      const userData = await User.findByPk(req.body.user_id);
      if (!userData) {
          res.status(404).json({ message: 'Invalid User ID' });
          return;
      }

      const childData = await Child.create({

        name: req.body.name,
        TotalCredits: req.body.TotalCredits,
        creditType: req.body.creditType,
        parent_id: req.body.parent_id,
        user_id: req.body.user_id
      })
    .then ((resData) => {
      console.log(resData)
      return res.status(200).json(resData)
      }
  )}
  catch (err) { 
    console.log(err);
    res.status(400).json(err.message);
  }
});


module.exports = router;
