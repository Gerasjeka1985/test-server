require("dotenv").config();
const mysql = require("mysql");
const conn = require('./db');
const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const path = require("path");
const PORT = 9100;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use('/static', express.static( path.resolve(__dirname , 'public')));


conn.connect(err =>{
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

let query = "SELECT * FROM cards";

conn.query(query, (err,result,field) =>{
    console.log(err);
    console.log(result);
    // console.log(field);
})

conn.end(err =>{
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL закрыто");
    }
});

app.listen(PORT, ()=> console.log("Server start at " + PORT))





