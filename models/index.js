// import models
const { userInfo } = require('os');
const Child = require('./Child');
const Chores = require('./Chores');
const Parent = require('./Parent');
const User = require('./User');

Parent.hasMany(Child, {
    foreignKey: 'child_id',
    onDelete: 'CASCADE',
});
Child.belongsTo(Parent, {
    foreignKey: 'parent_id',
    onDelete: 'CASCADE',
});

Parent.hasMany(Chores, {
    foreignKey: 'chore_id',
    onDelete: 'CASCADE',
});

Chores.belongsTo(Parent, {
    foreginKey: 'parent_id',
});

Child.hasMany(Chores, {
    foreignKey: 'chore_id',
    onDelete: 'CASCADE',
});

Chores.belongsTo(Child, {
    foreignKey:'child_id',
});

User.hasOne(Parent, {
    foreginKey: 'email', 
    onDelete: 'CASCADE',
}); 

Parent.belongsTo(User, {
    foreginKey: 'user_name', 
});

User.hasOne(Child, {
    foreginKey: 'user_name', 
    onDelete: 'CASCADE',
}); 

Child.belongsTo(User, {
    foreginKey: 'user_name', 
});

module.exports = {
    Child,
    Chores,
    Parent,
    User,
};
