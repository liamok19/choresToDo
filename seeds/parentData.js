const { Parent } = require('../models');

const parentdata = [
  {
    name: 'Joanne',
    email: 'jo@mail.com',
    chart: 'Bowen Family Chart',
    user_id: '1',
  },
  {
    name: 'Sommer',
    email: 'Sommer@mail.com',
    chart: 'Our daily Chores',
    user_id: '2',
  },
  {
    name: 'Harmoney',
    email: 'peace@mail.com',
    chart: 'Our To Do List',
    user_id: '5',
  },
  {
    name: 'Les',
    email: 'Les@mail.com',
    chart: 'My Reward Tracker',
    user_id: '7',
  },
];

const seedParent = () => Parent.bulkCreate(parentdata);

module.exports = seedParent;


