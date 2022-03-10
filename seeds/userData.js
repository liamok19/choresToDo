const { User } = require('../models');

const userdata = [
  {
    user_name: 'jo@mail.com',
    password: 'jomail',
    hint: 'no @ in my email address',
    type: 'Parent',
  },
  {
    user_name: 'Sally B',
    password: 'Luna',
    hint: 'The name of our dog',
    type: 'Child',
  },
  {
    user_name: 'Byron B',
    password: 'Luna',
    hint: 'The name of our dog',
    type: 'Child',
  },
  {
    user_name: 'Sommer@mail.com',
    password: 'JennyWork',
    hint: 'my email address',
  },
  {
    user_name: 'Jenny',
    password: 'Hermoine',
    hint: 'Your favourite wizard',
    type: 'Child',
  },
  {
    user_name: 'peace@mail.com',
    password: 'OurCh0res',
    hint: 'Name of our chores chart',
    type: 'Parent',
  },
  {
    user_name: 'Faith',
    password: 'First',
    hint: 'Which child are you?',
    type: 'Child',
  },
  {
    user_name: 'Hope',
    password: 'Second',
    hint: 'Which child are you?',
    type: 'Child',
  },
  {
    user_name: 'Grace',
    password: 'Third',
    hint: 'Which child are you?',
    type: 'Child',
  },
  {
    user_name: 'Les@mail.com',
    password: 'lesStuff',
    hint: 'My things',
    type: 'Parent',
  },
  {
    user_name: 'Dylan',
    password: 'Muggles',
    hint: 'The name of your pet?',
    type: 'Child',
  },
  {
    user_name: 'Dayne',
    password: 'Muggins',
    hint: 'The name of your pet?',
    type: 'Child',
  },
];
const seedUser = () => Parent.bulkCreate(userdata);

module.exports = seedUser;


