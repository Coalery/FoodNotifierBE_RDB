const fs = require('fs');
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const models = require('./models/');
const sequelize = require('sequelize');
const Op = sequelize.Op;

var app = express();
models.sequelize.sync()

app.use(bodyParser.urlencoded({extended : false}));

app.get('/', (request, response) => {
    response.send('Hmmm');
});

// ----------------------------------
//               GET
// ----------------------------------

app.get('/barcode/:barcode', (request, response, next) => {
    models.Barcode.findAll({
        where: {
            BAR_CD: request.params.barcode
        }
    }).then(result => {
        response.json(result);
    });
});

app.get('/recipe/:recipe', (request, response, next) => {
    models.Recipe.findAll({
        where: {
            RCP_PARTS_DTLS: {
                [Op.like]: `%${request.params.recipe}%`
            }
        }
    }).then(result => {
        response.json(result);
    });
});

// ----------------------------------
//                POST
// ----------------------------------

app.post('./user', (request, response) => {
    var post = request.body;
    models.User.create({
        user_id: post.user_id,
        name: post.name,
        gender: post.gender,
        age: post.age
    });
});

app.post('./food', (request, response) => {
    var post = request.body;
    models.Food.create({
        register_id: post.register_id, // Id whose register food
        register_date: post.register_date,
        expiration_date: post.expiration_date,
        food_id: post.food_id
    });
});

app.post('/barcode', (request, response) => {
    var post = request.body;
    models.Barcode.create({
        PRDLST_REPORT_NO: post.PRDLST_REPORT_NO,
        PRMS_DT: post.PRMS_DT,
        END_DT: post.END_DT,
        PRDLST_NM: post.PRDLST_NM,
        POG_DAYCNT: post.POG_DAYCNT,
        PRDLST_DCNM: post.PRDLST_DCNM,
        BSSH_NM: post.BSSH_NM,
        INDUTY_NM: post.INDUTY_NM,
        SITE_ADDR: post.SITE_ADDR,
        CLSBIZ_DT: post.CLSBIZ_DT,
        BAR_CD: post.BAR_CD
    });
    response.send('Successed.');
});

app.post('/recipe', (request, response) => {
    var post = request.body;
    models.Recipe.create({
        RCP_SEQ: post.RCP_SEQ,
        RCP_NM: post.RCP_NM,
        RCP_WAY2: post.RCP_WAY2,
        RCP_PAT2: post.RCP_PAT2,
        INFO_WGT: post.INFO_WGT,
        INFO_ENG: post.INFO_ENG,
        INFO_CAR: post.INFO_CAR,
        INFO_PRO: post.INFO_PRO,
        INFO_FAT: post.INFO_FAT,
        INFO_NA: post.INFO_NA,
        HASH_TAG: post.HASH_TAG,
        ATT_FILE_NO_MAIN: post.ATT_FILE_NO_MAIN,
        ATT_MILE_NO_MK: post.ATT_MILE_NO_MK,
        RCP_PARTS_DTLS: post.RCP_PARTS_DTLS,
        MANUAL01: post.MANUAL01,
        MANUAL_IMG01: post.MANUAL_IMG01,
        MANUAL02: post.MANUAL02,
        MANUAL_IMG02: post.MANUAL_IMG02,
        MANUAL03: post.MANUAL03,
        MANUAL_IMG03: post.MANUAL_IMG03,
        MANUAL04: post.MANUAL04,
        MANUAL_IMG04: post.MANUAL_IMG04,
        MANUAL05: post.MANUAL05,
        MANUAL_IMG05: post.MANUAL_IMG05,
        MANUAL06: post.MANUAL06,
        MANUAL_IMG06: post.MANUAL_IMG06,
        MANUAL07: post.MANUAL07,
        MANUAL_IMG07: post.MANUAL_IMG07,
        MANUAL08: post.MANUAL08,
        MANUAL_IMG08: post.MANUAL_IMG08,
        MANUAL09: post.MANUAL09,
        MANUAL_IMG09: post.MANUAL_IMG09,
        MANUAL10: post.MANUAL10,
        MANUAL_IMG10: post.MANUAL_IMG10,
        MANUAL11: post.MANUAL11,
        MANUAL_IMG11: post.MANUAL_IMG11,
        MANUAL12: post.MANUAL12,
        MANUAL_IMG12: post.MANUAL_IMG12,
        MANUAL13: post.MANUAL13,
        MANUAL_IMG13: post.MANUAL_IMG13,
        MANUAL14: post.MANUAL14,
        MANUAL_IMG14: post.MANUAL_IMG14,
        MANUAL15: post.MANUAL15,
        MANUAL_IMG15: post.MANUAL_IMG15,
        MANUAL16: post.MANUAL16,
        MANUAL_IMG16: post.MANUAL_IMG16,
        MANUAL17: post.MANUAL17,
        MANUAL_IMG17: post.MANUAL_IMG17,
        MANUAL18: post.MANUAL18,
        MANUAL_IMG18: post.MANUAL_IMG18,
        MANUAL19: post.MANUAL19,
        MANUAL_IMG19: post.MANUAL_IMG19,
        MANUAL20: post.MANUAL20,
        MANUAL_IMG20: post.MANUAL_IMG20
    });
    response.send('Successed.');
});

// ----------------------------------
//           ERROR PROCESS
// ----------------------------------

app.use((request, response, next) => {
    response.status(404).send('Not Found');
});

//app.use((err, request, response, next) => {
//    response.status(500).send('Error occurred.');
//});

// ----------------------------------
//            SERVER START
// ----------------------------------

app.listen(3000, () => console.log('Server On Successfully.'));