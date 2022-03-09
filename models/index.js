// import models
const Child = require('./Child');
const Chores = require('./Chores');

//pending models information
const Parent = require('./Parent');
const User = require('./User');

// Products belongsTo Category
Child.belongsTo(Parent, {
    foreignKey: 'parent_id',
    onDelete: 'CASCADE',
});

Chores.hasMany(Child, {
    foreignKey:'child_id',
    onDelete: 'CASCADE',
});

module.exports = {
    Child,
    Chores,
    Parent,
    User,
};
