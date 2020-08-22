module.exports = (sequelize, DataTypes) => {
    return sequelize.define('recipe', {
            RCP_SEQ: {
                    type: DataTypes.STRING(10)
            },
            RCP_NM: {
                    type: DataTypes.STRING(40)
            },
            RCP_WAY2: {
                    type: DataTypes.STRING(10)
            },
            RCP_PAT2: {
                    type: DataTypes.STRING(10)
            },
            INFO_WGT: {
                    type: DataTypes.STRING(10)
            },
            INFO_ENG: {
                    type: DataTypes.STRING(10)
            },
            INFO_CAR: {
                    type: DataTypes.STRING(10)
            },
            INFO_PRO: {
                    type: DataTypes.STRING(10)
            },
            INFO_FAT: {
                    type: DataTypes.STRING(10)
            },
            INFO_NA: {
                    type: DataTypes.STRING(10)
            },
            HASH_TAG: {
                    type: DataTypes.STRING(10)
            },
            ATT_FILE_NO_MAIN: {
                    type: DataTypes.STRING(90)
            },
            ATT_MILE_NO_MK: {
                    type: DataTypes.STRING(90)
            },
            RCP_PARTS_DTLS: {
                    type: DataTypes.STRING(500)
            },
            MANUAL01: {
                    type: DataTypes.STRING(120)
            },
            MANUAL_IMG01: {
                    type: DataTypes.STRING(80)
            },
            MANUAL02: {
                    type: DataTypes.STRING(140)
            },
            MANUAL_IMG02: {
                    type: DataTypes.STRING(80)
            },
            MANUAL03: {
                    type: DataTypes.STRING(120)
            },
            MANUAL_IMG03: {
                    type: DataTypes.STRING(80)
            },
            MANUAL04: {
                    type: DataTypes.STRING(140)
            },
            MANUAL_IMG04: {
                    type: DataTypes.STRING(80)
            },
            MANUAL05: {
                    type: DataTypes.STRING(130)
            },
            MANUAL_IMG05: {
                    type: DataTypes.STRING(80)
            },
            MANUAL06: {
                    type: DataTypes.STRING(160)
            },
            MANUAL_IMG06: {
                    type: DataTypes.STRING(80)
            },
            MANUAL07: {
                    type: DataTypes.STRING(130)
            },
            MANUAL_IMG07: {
                    type: DataTypes.STRING(70)
            },
            MANUAL08: {
                    type: DataTypes.STRING(100)
            },
            MANUAL_IMG08: {
                    type: DataTypes.STRING(70)
            },
            MANUAL09: {
                    type: DataTypes.STRING(130)
            },
            MANUAL_IMG09: {
                    type: DataTypes.STRING(70)
            },
            MANUAL10: {
                    type: DataTypes.STRING(170)
            },
            MANUAL_IMG10: {
                    type: DataTypes.STRING(70)
            },
            MANUAL11: {
                    type: DataTypes.STRING(10)
            },
            MANUAL_IMG11: {
                    type: DataTypes.STRING(70)
            },
            MANUAL12: {
                    type: DataTypes.STRING(110)
            },
            MANUAL_IMG12: {
                    type: DataTypes.STRING(10)
            },
            MANUAL13: {
                    type: DataTypes.STRING(50)
            },
            MANUAL_IMG13: {
                    type: DataTypes.STRING(10)
            },
            MANUAL14: {
                    type: DataTypes.STRING(40)
            },
            MANUAL_IMG14: {
                    type: DataTypes.STRING(10)
            },
            MANUAL15: {
                    type: DataTypes.STRING(40)
            },
            MANUAL_IMG15: {
                    type: DataTypes.STRING(10)
            },
            MANUAL16: {
                    type: DataTypes.STRING(30)
            },
            MANUAL_IMG16: {
                    type: DataTypes.STRING(10)
            },
            MANUAL17: {
                    type: DataTypes.STRING(10)
            },
            MANUAL_IMG17: {
                    type: DataTypes.STRING(10)
            },
            MANUAL18: {
                    type: DataTypes.STRING(10)
            },
            MANUAL_IMG18: {
                    type: DataTypes.STRING(10)
            },
            MANUAL19: {
                    type: DataTypes.STRING(10)
            },
            MANUAL_IMG19: {
                    type: DataTypes.STRING(10)
            },
            MANUAL20: {
                    type: DataTypes.STRING(10)
            },
            MANUAL_IMG20: {
                    type: DataTypes.STRING(10)
            }
    },
    {
            timestamps: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
    });
};