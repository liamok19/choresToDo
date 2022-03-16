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
  const parent = await Parent.findByPk(req.params.id, {
    include: [
      {
        model: Child,
      },
      {
        model: Chores,
        
      }
    ]
  })
  // .toJSON();
  // console.log(child);

  // load them to handlebars
  res.render('parentTaskpage', {
    abc: 123,
    parent: parent,
    // child: parent.child,
    // chores: parent.Chores,
  })  
});

router.get('/child/:id', async (req, res) => {
  // this route is meant to be visited by a child, not a parent!
  // validate
  // 1. make sure user is logged in
  // try {

  // 2. check user is a parent or a child
  // 2. [deprecated] make sure parent can only view their own children
  // if a parent visits this page, redirect the parent to the task managemnt page

  // 3. if a child is visiting, validate req.param.id === req.user.id

  // if(req.params.id !== req.user.id){
  //   return res.status(301).redirect('/');
  // }

  
  // grab the parent info
  // grab the child info
  // get all the relevant chors
  const child = await Child.findByPk(req.params.id, {
    include: [
      {
        model: Parent,
      },
      {
        model: Chores,
        
      }
    ]
  })
  // .toJSON();
  console.log(child);



  


  // load them to handlebars
  res.render('childTaskpage', {
    abc: 123,
    child: child,
  //  parent: child.parent,
  //  chores: child.Chores,
  })  
// } 
// catch (err) {
//   res.status(500).json(err);
// }

});


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
