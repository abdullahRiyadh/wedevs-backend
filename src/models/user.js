const { DataTypes } = require("sequelize")
module.exports = function (db) {
    return db.define(
        'user',
        {

            id: {
                type: DataTypes.INTEGER,
                primaryKey: true

            },
            created: {
                type: DataTypes.NOW
            },
            email: {
                type: DataTypes.TEXT
            },
            password: {
                type: DataTypes.TEXT
            }


        },
        {
            timestamps: false
        }
    )
}