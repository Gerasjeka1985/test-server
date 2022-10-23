const express = require("express");
const Router = require("express");

const router = new Router();

router.get(`/test`,(req,res) => {
    res.json("Hello Geka");
} )


// можно достучяться по адресу http://localhost:9100/api/static/img.jpg

module.exports = router;