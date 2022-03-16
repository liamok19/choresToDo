const { Child } = require('../models');

const childData = [
    {
        name: 'Sally B',
        TotalCredits: '10',
        creditType: 'stars',

    },
    {
        name: 'Byron B',
        TotalCredits: '10',
        creditType: 'stars',

    },
    {
        name: 'Jenny',
        TotalCredits: '10',
        creditType: 'stars',

    },
    {
        name: 'Faith',
        TotalCredits: '10',
        creditType: 'stars',
 
    },
    {
        name: 'Hope',
        TotalCredits: '10',
        creditType: 'stars',

    },
    {
        name: 'Grace',
        TotalCredits: '10',
        creditType: 'stars',

    },
    {
        name: 'Dylan',
        TotalCredits: '20',
        creditType: 'Dollars',

    },
    {
        name: 'Dayne',
        TotalCredits: '20',
        creditType: 'Dollars',

    },
];

const seedChild = () => Child.bulkCreate(childData);

module.exports = seedChild;