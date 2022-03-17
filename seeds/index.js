// require('dotenv').config({path: './../.env'});

const seedUser = require('./userData');
const seedParent = require('./parentData');
const seedChild = require('./childData');
const seedChores = require('./choresData');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUser();
    console.log('\n----- USER SEEDED -----\n');

    await seedParent();
    console.log('\n----- PARENT SEEDED -----\n');

    await seedChild();
    console.log('\n----- CHILD SEEDED -----\n');

    await seedChores();
    console.log('\n----- CHORES SEEDED -----\n');

    process.exit(0);
};
console.log(seedAll);
seedAll();
