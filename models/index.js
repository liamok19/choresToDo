// import models
const { userInfo } = require('os');
const Child = require('./Child');
const Chores = require('./Chores');
const Parent = require('./Parent');
const User = require('./User');

// Parent.hasMany(Child, {
//     // foreignKey: 'child_id',
//     onDelete: 'CASCADE',
// });

Child.belongsTo(Parent, {
    foreignKey: 'parent_id',
    onDelete: 'CASCADE',
});

// Parent.hasMany(Chores, {
//     foreignKey: 'chores_id',
//     onDelete: 'CASCADE',
// });

Chores.belongsTo(Parent, {
    foreginKey: 'parent_id',
});

// Child.hasMany(Chores, {
//     foreignKey: 'chores_id',
//     onDelete: 'CASCADE',
// });

Chores.belongsTo(Child, {
    foreignKey:'child_id',
});

// User.hasOne(Parent, {
//     foreginKey: 'parent_id', 
//     onDelete: 'CASCADE',
// }); 

Parent.belongsTo(User, {
    foreginKey: 'user_id', 
});

// User.hasOne(Child, {
//     foreginKey: 'user_id', 
//     onDelete: 'CASCADE',
// }); 

Child.belongsTo(User, {
    foreginKey: 'user_id', 
});

module.exports = {
    Child,
    Chores,
    Parent,
    User,
};
