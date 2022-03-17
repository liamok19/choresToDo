const router = require('express').Router();
const { response } = require('express');
const { User, Child, Chores, Parent } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });

    const users = userData.map((User) => User.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/parent/:id', async (req, res) => { 
  try {
    const parentData = await Parent.findByPk(req.params.id, {
      include: [
        {
          model: Chores ,
        //   attributes: ['name'],
        },
        {
          model: Child,
          // attributes: ['name'],
        },
      ]
    })

    console.log(parentData);
    
    const parent = parentData.get({ plain: true });

    res.render('parentTaskpage', {
      ...parent,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/child/:id', async (req, res) => {

  try {
    const childData = await Child.findByPk(req.params.id, {
      include: [
          {
            model: Parent,
            // attributes: ['chart'],
          }, 
          {
            model: Chores,
          // attributes: ['name', 'description', 'status' ],
          }, 
      ]
      })
console.log (childData);


    const child = childData.get({ plain: true });

    res.render('childTaskpage', {
      ...child, 
      // child: child,
      // parent: child.parent,
      // chores: child.Chores,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// } 
// catch (err) {
//   res.status(500).json(err);
// }

// });


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
