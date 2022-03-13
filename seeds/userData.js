const { User } = require('../models');

const userdata = [
  {
    username: 'jo@mail.com',
    password: 'jomail',
    hint: 'no @ in my email address',
    usertype: 'Parent',
  },
  {
    username: 'Sally B',
    password: 'Luna',
    hint: 'The name of our dog',
    usertype: 'Child',
  },
  {
    username: 'Byron B',
    password: 'Luna',
    hint: 'The name of our dog',
    usertype: 'Child',
  },
  {
    username: 'Sommer@mail.com',
    password: 'JennyWork',
    hint: 'my email address',
    usertype: 'Parent',
  },
  {
    username: 'Jenny',
    password: 'Hermoine',
    hint: 'Your favourite wizard',
    usertype: 'Child',
  },
  {
    username: 'peace@mail.com',
    password: 'OurCh0res',
    hint: 'Name of our chores chart',
    usertype: 'Parent',
  },
  {
    username: 'Faith',
    password: 'First',
    hint: 'Which child are you?',
    usertype: 'Child',
  },
  {
    username: 'Hope',
    password: 'Second',
    hint: 'Which child are you?',
    usertype: 'Child',
  },
  {
    username: 'Grace',
    password: 'Third',
    hint: 'Which child are you?',
    usertype: 'Child',
  },
  {
    username: 'Les@mail.com',
    password: 'lesStuff',
    hint: 'My things',
    usertype: 'Parent',
  },
  {
    username: 'Dylan',
    password: 'Muggles',
    hint: 'The name of your pet?',
    usertype: 'Child',
  },
  {
    username: 'Dayne',
    password: 'Muggins',
    hint: 'The name of your pet?',
    usertype: 'Child',
  },
];
const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;


