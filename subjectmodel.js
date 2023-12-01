const {Sequelize} = require('sequelize');
const db = require('./db');


const subject = db.define('subject', {
    subjectId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    sname: {
        type: Sequelize.STRING
    }
})

module.exports =  subject;