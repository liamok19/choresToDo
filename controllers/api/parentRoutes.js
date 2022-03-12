const router = require('express').Router();
const { request } = require('express');
const { Parent, Chores } = require('../../models');

// get all parents ???
// router.get('/', async (req, res) => {
//   try {
//     const parentData = await Parent.findAll({
//       include: [
//         {model: User},
//       ]
//     });
//     res.status(200).json(parentData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// get parent details using the parent_id, assumed authentication done and user has access
router.get('/:id',  async (req, res) => {
  try {
    const parentData = await Parent.findByPk(req.params.id, {
      include: [
        {model: Child, through: ParentChild},  
        {model: Chores, through: ParentChores},
      ]
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
        name: req.body.parent_name,
        email: req.body.email,
        chart: req.body.chart,
      })
      .then ((parent) => {
        return res.status(200).json(parentData)
        }
    )}
    catch (err) { 
      console.log(err);
      res.status(400).json(err);
    }
});

//  update parent but need to consider the impact on user id due to email change
// router.put('/:id', async (req, res) => {
//     try {
//       const parentData = await Parent.update({
//         name: req.body.parent_name,
//         email: req.body.email,
//         chart: req.body.chart,
//       })
//       .then ((parent) => {
        
//           return res.status(200).json(parentData)
//         }
//     )}
//   catch (err) {
//     console.log(err.message);
//     res.status(400).json(err.message);
//   };
// });

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
