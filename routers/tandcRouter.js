const router = require("express").Router();
fs = require('fs'),
router.get('/', function (req, res) {
    var filePath = "/files/TandC.pdf";
    res.sendFile(__dirname + "./files/TandC.pdf");
});

module.exports = router;