const mysql = require("mysql");
const dbConfig = require('../db.config.js');

//Создаем соединение с бд
const connection = mysql.createConnection({
    host:dbConfig.host,
    user:dbConfig.user,
    password:dbConfig.password,
    database:dbConfig.database
})

//открываем соединение с нашей БД
connection.connect(err =>{
    if(err) throw error;
    console.log("Успешное соединение с БД");
})

//закрываем соединение
connection.end(err => {
    if(err) throw error;
    console.log("Connection with db lost...");
})

module.exports = connection;
//импортируем наше соединение