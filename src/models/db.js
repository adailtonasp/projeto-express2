const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createConnection({
    host: dbConfig.HOST,    
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB 
});

connection.connect(error => {
    if (error) throw error;
    console.log("Conectado com o Database com sucesso!!!")
});

module.exports = connection;