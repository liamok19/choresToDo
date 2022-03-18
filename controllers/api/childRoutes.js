const router = require('express').Router();
const { request } = require('express');
const { Child, Parent, User } = require('../../models');


// get parent details using the parent_id, assumed authentication done and user has access
router.get('/:id',  async (req, res) => {
  try {
    const childData = await Child.findByPk(req.params.id, {
      
    });

    if (!childData) {
      res.status(404).json({ message: 'No child record found with this id!' });
      return;
    }

    res.status(200).json(childData);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/user/:id',  async (req, res) => {
  try {
    const childData = await Child.findOne({
      where: {
        user_id: req.params.id
    }
    });
    if (!childData) {
      res.status(404).json({ message: 'No child record found with this User id!' });
      return;
    }

    res.status(200).json(childData);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {

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


router.put('/:id', async (req, res) => {
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

         const childData = await Child.update({
            name: req.body.name,
            TotalCredits: req.body.TotalCredits,
            creditType: req.body.creditType,
            parent_id: Parent.parent_id,
            user_id: User.user_id
            
         })
      .then ((child) => {
        
          return res.status(200).json(childData)
        }
    )}
  catch (err) {
    console.log(err.message);
    res.status(400).json(err.message);
  };
});

router.delete('/:id', async (req, res) => {
  
try {  
  const childData = await Child.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!childData) {
      res.status(404).json({ message: 'No child found with this id!' });
      return;
    }

    res.status(200).json(childData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/parent/:id',  async (req, res) => {
    try {
      const childData = await Child.findAll({
        where: {
            parent_id: req.params.id
        }
    });
    
      if (!childData) {
        res.status(404).json({ message: 'No child record found with this id!' });
        return;
      }
  
      res.status(200).json(childData);
    } 
    catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
