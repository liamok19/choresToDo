const { Child } = require('../models');

const childData = [
    {
        user_name: 'Sally B',
    },
    {
        user_name: 'Byron B',
    },
    {
        user_name: 'Jenny',
    },
    {
        user_name: 'Faith',
    },
    {
        user_name: 'Hope',
    },
    {
        user_name: 'Grace',
    },
    {
        user_name: 'Dylan',
    },
    {
        user_name: 'Dayne',
    },
];

const seedChild = () => Child.bulkCreate(childData);

module.exports = seedChild;