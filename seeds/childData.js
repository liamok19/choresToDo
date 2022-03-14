const { Child } = require('../models');

const childData = [
    {
        name: 'Sally B',
        TotalCredits: '10',
        creditType: 'stars',
        parent_id: '1',
        user_id: '3',
    },
    {
        name: 'Byron B',
        TotalCredits: '10',
        creditType: 'stars',
        parent_id: '1',
        user_id: '1',
    },
    {
        name: 'Jenny',
        TotalCredits: '10',
        creditType: 'stars',
        parent_id: '2',
        user_id: '4',
    },
    {
        name: 'Faith',
        TotalCredits: '10',
        creditType: 'stars',
        parent_id: '3',
        user_id: '6',
    },
    {
        name: 'Hope',
        TotalCredits: '10',
        creditType: 'stars',
        parent_id: '3',
        user_id: '9',
    },
    {
        name: 'Grace',
        TotalCredits: '10',
        creditType: 'stars',
        parent_id: '3',
        user_id: '8',
    },
    {
        name: 'Dylan',
        TotalCredits: '20',
        creditType: 'Dollars',
        parent_id: '4',
        user_id: '10',
    },
    {
        name: 'Dayne',
        TotalCredits: '20',
        creditType: 'Dollars',
        parent_id: '4',
        user_id: '11',
    },
];

const seedChild = () => Child.bulkCreate(childData);

module.exports = seedChild;