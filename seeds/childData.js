// const { Painting } = require('../models');

// const paintingdata = [
//   {
//     title: 'Blossoming Apricot',
//     artist: 'LedyX',
//     exhibition_date: 'March 30, 2018',
//     gallery_id: 1,
//     filename: '01-blossoming-apricot.jpg',
//     description:
//       'Branches with pink apricot blossoms against a blue background.',
//   },

// ];

// const seedPaintings = () => Painting.bulkCreate(paintingdata);

// module.exports = seedPaintings;

//commentingout but reference from gallery activity 15


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