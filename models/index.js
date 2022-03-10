// import models
const { userInfo } = require('os');
const Child = require('./Child');
const Chores = require('./Chores');

//pending models information
const Parent = require('./Parent');
// const User = require('./User');

// Products belongsTo Category

Parent.hasMany(Child, {
    foreignKey: 'child-id',
    onDelete: 'CASCADE',
});
Child.belongsTo(Parent, {
    foreignKey: 'parent_id',
    onDelete: 'CASCADE',
});

Parent.hasMany(Chores, {
    foreignKey: chore_id,
    onDelete: 'CASCADE',
}),

Chores.belongsTo(Parent, {
    foreginKey: parent_id,
}),

Child.hasMany(Chores, {
    foreignKey: chore_id,
    onDelete: 'CASCADE',
}),

Chores.hasMany(Child, {
    foreignKey:'child_id',
    onDelete: 'CASCADE',
});

module.exports = {
    Child,
    Chores,
    Parent,
    // User,
};
