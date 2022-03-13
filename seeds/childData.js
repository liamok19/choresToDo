const { Child } = require('../models');

const childData = [
    {
        name: 'Sally B',
    },
    {
        name: 'Byron B',
    },
    {
        name: 'Jenny',
    },
    {
        name: 'Faith',
    },
    {
        name: 'Hope',
    },
    {
        name: 'Grace',
    },
    {
        name: 'Dylan',
    },
    {
        name: 'Dayne',
    },
];

const seedChild = () => Child.bulkCreate(childData);

module.exports = seedChild;