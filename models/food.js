module.exports = (sequelize, DataTypes) => {
    return sequelize.define('food', {
            registerer_id: {
                    type: DataTypes.STRING(20)
            },
            register_date: {
                    type: DataTypes.STRING(15)
            },
            expiration_date: {
                    type: DataTypes.STRING(15)
            },
            food_id: {
                    type: DataTypes.STRING(20)
            }
    },
    {
            timestamps: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
    });
}