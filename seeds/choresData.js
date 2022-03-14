const { Chores } = require('../models');

const choresData = [
    {
        name: 'Garbage',
        description: 'Please take out the rubbish', 
        status: 'false',
        NumberofCredits: '1',
        parent_id: '1',
        child_id: '2',
    },
    {
        name: 'Kitchen',
        description: 'Wash the dishes', 
        status: 'false',
        NumberofCredits: '2',
        parent_id: '1',
        child_id: '1',
    },
    {
        name: 'Living Room',
        description: 'Clean up toys', 
        status: 'false',
        NumberofCredits: '1',
        parent_id: '2',
        child_id: '3',
    },
    {
        name: 'School',
        description: 'Fold school clothes and prepare schoolbag', 
        status: 'false',
        NumberofCredits: '2',
        parent_id: '2',
        child_id: '3',
    },
    {
        name: 'Living Room',
        description: 'Pack up toys', 
        status: 'false',
        NumberofCredits: '1',
        parent_id: '3',
        child_id: '4',
    },
    {
        name: 'Backyard',
        description: 'Feed Spot the Dog', 
        status: 'false',
        NumberofCredits: '2',
        parent_id: '3',
        child_id: '5',
    },
    {
        name: 'Garbage',
        description: 'Please take out the rubbish', 
        status: 'false',
        NumberofCredits: '1',
        parent_id: '3',
        child_id: '6',
    },
    {
        name: 'Bedroom',
        description: 'Fold clothes', 
        status: 'false',
        NumberofCredits: '2',
        parent_id: '4',
        child_id: '7',
    },
    {
        name: 'Bedroom',
        description: 'Fold clothes', 
        status: 'false',
        NumberofCredits: '2',
        parent_id: '4',
        child_id: '8',
    },
    {
        name: 'Garbage',
        description: 'Please take out the rubbish', 
        status: 'false',
        NumberofCredits: '1',
        parent_id: '4',
        child_id: '7',
    },
    {
        name: 'Backyard',
        description: 'Feed the Dog', 
        NumberofCredits: '1',
        status: 'false',
        parent_id: '4',
        child_id: '8',
    },
];

const seedChores = () => Chores.bulkCreate(choresData);

module.exports = seedChores;