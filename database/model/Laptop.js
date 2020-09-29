module.exports = (sequelize, Datatypes) => {
    const  Laptop = sequelize.define('Laptop', {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        year: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        price: {
            type: Datatypes.INTEGER,
            allowNull: false
        }
    },
        {
            tableName: 'laptop',
            timestamps: false
        })
return Laptop
}
