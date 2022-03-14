const router = require('express').Router();
const { request } = require('express');
const { User } = require('../../models');

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
    console.log(req);
    const userData = await User.findOne({ where: { username: req.body.username } });
    console.log(userData);
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
      
    res.json({ user: userData, message: 'You are now logged in!' });

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