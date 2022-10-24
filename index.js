require("dotenv").config();
const connection = require("./Connection/mode");
const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const path = require("path");
const PORT = 9100;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(PORT, ()=> console.log("Server start at " + PORT))





