module.exports = (sequelize, DataTypes) => {
    return sequelize.define('barcode', {
            PRDLST_REPORT_NO: {
                    type: DataTypes.STRING(20)
            },
            PRMS_DT: {
                    type: DataTypes.STRING(10)
            },
            END_DT: {
                    type: DataTypes.STRING(10)
            },
            PRDLST_NM: {
                    type: DataTypes.STRING(90)
            },
            POG_DAYCNT: {
                    type: DataTypes.STRING(130)
            },
            PRDLST_DCNM: {
                    type: DataTypes.STRING(50)
            },
            BSSH_NM: {
                    type: DataTypes.STRING(40)
            },
            INDUTY_NM: {
                    type: DataTypes.STRING(20)
            },
            SITE_ADDR: {
                    type: DataTypes.STRING(90)
            },
            CLSBIZ_DT: {
                    type: DataTypes.STRING(10)
            },
            BAR_CD: {
                    type: DataTypes.STRING(20)
            }
    },
    {
            timestamps: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
    });
};