module.exports = function (sequelize, DataTypes) {
    var Todos = sequelize.define("Todos", {
        toDoItem: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    return Todos;
};