const { Chores } = require('../models');

const choresData = [
    {
        name: 'Garbage',
        description: 'Please take out the rubbish', 
        status: 'false',
        NumberofCredits: '1',
        

    },
    {
        name: 'Kitchen',
        description: 'Wash the dishes', 
        status: 'false',
        NumberofCredits: '2',

    },
    {
        name: 'Living Room',
        description: 'Clean up toys', 
        status: 'false',
        NumberofCredits: '1',

    },
    {
        name: 'School',
        description: 'Fold school clothes and prepare schoolbag', 
        status: 'false',
        NumberofCredits: '2',

    },
    {
        name: 'Living Room',
        description: 'Pack up toys', 
        status: 'false',
        NumberofCredits: '1',

    },
    {
        name: 'Backyard',
        description: 'Feed Spot the Dog', 
        status: 'false',
        NumberofCredits: '2',

    },
    {
        name: 'Garbage',
        description: 'Please take out the rubbish', 
        status: 'false',
        NumberofCredits: '1',

    },
    {
        name: 'Bedroom',
        description: 'Fold clothes', 
        status: 'false',
        NumberofCredits: '2',

    },
    {
        name: 'Bedroom',
        description: 'Fold clothes', 
        status: 'false',
        NumberofCredits: '2',

    },
    {
        name: 'Garbage',
        description: 'Please take out the rubbish', 
        status: 'false',
        NumberofCredits: '1',

    },
    {
        name: 'Backyard',
        description: 'Feed the Dog', 
        NumberofCredits: '1',
        status: 'false',

    },
];

const seedChores = () => Chores.bulkCreate(choresData);

module.exports = seedChores;