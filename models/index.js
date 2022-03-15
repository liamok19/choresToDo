// import models
const { userInfo } = require('os');
const User = require('./User');
const Child = require('./Child');
const Chores = require('./Chores');
const Parent = require('./Parent');


Parent.hasMany(Child, {
    // foreignKey: 'child_id',
    onDelete: 'CASCADE',
});

Child.belongsTo(Parent, {
    foreignKey: 'parent_id',
    onDelete: 'CASCADE',
});



Child.hasMany(Chores, {
    
    onDelete: 'CASCADE',
});

Chores.belongsTo(Child, {
    foreignKey:'child_id',
});

User.hasOne(Parent, {
    foreginKey: 'parent_id', 
    onDelete: 'CASCADE',
}); 

Parent.belongsTo(User, {
    foreignKey: 'user_id', 
});

User.hasOne(Child, {
    foreginKey: 'user_id', 
    onDelete: 'CASCADE',
}); 

Child.belongsTo(User, {
    foreignKey: 'user_id', 
});

module.exports = {
    Child,
    Chores,
    Parent,
    User,
};
