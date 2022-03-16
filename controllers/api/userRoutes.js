const router = require('express').Router();
const { request } = require('express');
const session = require('express-session');
const { User } = require('../../models');
const { Child } = require('../../models');
const { Parent } = require('../../models');
const { Chores } = require('../../models');

// CREATE a new user
router.post('/', async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,   //  for parent send parent.email?
        password: req.body.password,
        hint: req.body.hint,
        usertype: req.body.usertype,
      });
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// GET one user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    console.log('userlog route');
    const userData = await User.findOne({ where: { username: req.body.username } });
    console.log('userRoutes',userData);
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect ursername or password, please try again' });
      return;
    }

    req.session.user_id = userData.id;
    req.session.logged_in = true;
    
    //if parent then fetch /tasks/parent/:id
    console.log('userRouted data',userData.usertype);
    console.log('userid', userData.id);
    if (userData.usertype === "Parent"){
      console.log("Parent");
      const parentData = await Parent.findOne({
        where: {
          user_id: userData.id
        }, 
        include: [
        { model: Child },
        { model: Chores},
        { model: User}
        ],
      });
      if (!parentData) {
        res.status(404).json({ message: 'No parent record found with this User id!' });
        return;
      }
      // res.json({ user: parentData, message: 'You are now logged in!' });
      res.status(200).json({ user: parentData });
    } else {
     
      console.log("CHILD");
      const childData = await Child.findOne({
        where: {
          user_id: userData.id
        }, 
        include: [
        { model: Parent },
        { model: User},
        { model: Chores }      
        ],
      });
      if (!childData) {
        res.status(404).json({ message: 'No child record found with this User id!' });
        return;
      }
    // res.json({ user: childData, message: 'You are now logged in!' });
    
    res.status(200).json({ user: childData });
    }  
   
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;