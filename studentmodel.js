const {Sequelize} = require('sequelize');
const db = require('./db');
const subject = require('./subjectmodel')

const student = db.define('student', {
        studentId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: Sequelize.STRING,
    },
    address: {
        type: Sequelize.STRING,
    }
});




student.belongsToMany(subject, {through : 'studentsubject'});
subject.belongsToMany(student, {through : 'studentsubject'});


module.exports = subject;
module.exports = student;