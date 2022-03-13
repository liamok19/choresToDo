const { Chores } = require('../models');

const choresData = [
    {
        name: 'Garbage',
        description: 'Please take out the rubbish', 
        status: 'In Progress',
    },
    {
        name: 'Kitchen',
        description: 'Wash the dishes', 
        status: 'In Progress',
    },
    {
        name: 'Living Room',
        description: 'Clean up toys', 
        status: 'In Progress',
    },
    {
        name: 'School',
        description: 'Fold school clothes and prepare schoolbag', 
        status: 'In Progress',
    },
    {
        name: 'Living Room',
        description: 'Pack up toys', 
        status: 'In Progress',
    },
    {
        name: 'Backyard',
        description: 'Feed Spot the Dog', 
        status: 'In Progress',
    },
    {
        name: 'Garbage',
        description: 'Please take out the rubbish', 
        status: 'In Progress',
    },
    {
        name: 'Bedroom',
        description: 'Fold clothes', 
        status: 'In Progress',
    },
];

const seedChores = () => Chores.bulkCreate(choresData);

module.exports = seedChores;