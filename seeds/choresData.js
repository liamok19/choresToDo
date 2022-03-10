const { Chores } = require('../models');

const choresData = [
    {
        user_name: 'Sally B',
        name: 'Garbage',
        description: 'Please take out the rubbish', 
        status: 'In Progress',
    },
    {
        user_name: 'Byron B',
        name: 'Kitchen',
        description: 'Wash the dishes', 
        status: 'In Progress',
    },
    {
        user_name: 'Jenny',
        name: 'Living Room',
        description: 'Clean up toys', 
        status: 'In Progress',
    },
    {
        user_name: 'Faith',
        name: 'School',
        description: 'Fold school clothes and prepare schoolbag', 
        status: 'In Progress',
    },
    {
        user_name: 'Hope',
        name: 'Living Room',
        description: 'Pack up toys', 
        status: 'In Progress',
    },
    {
        user_name: 'Grace',
        name: 'Backyard',
        description: 'Feed Spot the Dog', 
        status: 'In Progress',
    },
    {
        user_name: 'Dylan',
        name: 'Garbage',
        description: 'Please take out the rubbish', 
        status: 'In Progress',
    },
    {
        user_name: 'Dayne',
        name: 'Bedroom',
        description: 'Fold clothes', 
        status: 'In Progress',
    },
];

const seedChores = () => Chores.bulkCreate(choresData);

module.exports = seedChores;