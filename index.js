require("dotenv").config();
const express = require("express");
const fileUpload = require('express-fileuploader');
const cors = require("cors");
const router = require("./routes/index");
const path = require("path");
const PORT = 9100;

const app = express();


app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use('/static', express.static( path.resolve(__dirname , 'public')));

app.listen(PORT, ()=> console.log("Server start at " + PORT))