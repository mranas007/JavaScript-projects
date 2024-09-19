const express = require("express");
const sendMail = require("./controller/sendMail");

// required enviroment variable.
require('dotenv').config();
const env = process.env;

const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
})
app.get("/mail", sendMail)


PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is running on: http://localhost:${PORT}/`);
})