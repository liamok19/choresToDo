const { Parent } = require('../models');

const parentdata = [
  {
    name: 'Joanne',
    email: 'jo@mail.com',
    chart: 'Bowen Family Chart',
  },
  {
    name: 'Sommer',
    email: 'Sommer@mail.com',
    chart: 'Our daily Chores',
  
  },
  {
    name: 'Harmoney',
    email: 'peace@mail.com',
    chart: 'Our To Do List',
    
  },
  {
    name: 'Les',
    email: 'Les@mail.com',
    chart: 'My Reward Tracker',
    
  },
];

const seedParent = () => {
  
Parent.bulkCreate(parentdata);

// console.log(seedParent);
// for (const { id } of parentdata) {
//     const userid = async () => await User.findOne({
//     where: {
//     username : email
//     }});   
//     console.log ("found match",userid.value); 
//     if (userid) {
//       const updid = Parent.update({
//         user_id: userid,
//         where: {
//           id: userid}
//         })
//     }

//   }
}

module.exports = seedParent;


