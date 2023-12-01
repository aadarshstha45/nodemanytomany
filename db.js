const {Sequelize} = require('sequelize')

database = process.env.DB_NAME,
username = process.env.DB_USER,
password = process.env.DB_PASS


const db = new Sequelize({
    host:'localhost',
    dialect: 'postgres',
    database: database,
    username: username,
    password: password
});

try{
    db.authenticate();
    console.log("Authentication success");
    db.sync();
    console.log("Sync success");

}catch(e){
    console.log(e);
}

module.exports = db;