module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
            user_id: {
                    type: DataTypes.STRING(20)
            },
            name: {
                    type: DataTypes.STRING(10)
            },
            gender: {
                    type: DataTypes.STRING(1)
            },
            age: {
                    type: DataTypes.STRING(3)
            }
    },
    {
            timestamps: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
    });
}