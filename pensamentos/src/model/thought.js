const {Model, DataTypes } = require("sequelize");

class thought extends Model {
    static init(connection) {
        super.init(
            {
                title: DataTypes.STRING,
                description: DataTypes.STRING 
            },
            {
                sequelize: connection
            }
        )
    }
}