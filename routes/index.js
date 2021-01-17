const express = require("express");
const router = express.Router();
const PseudoCoin = require("../middleware/pseudoCoin");
var path = require("path");

const resMiddleware = (req, res, next) => {
    res.render("index", {
        title: "Pseudo-Coin",
        jsonResult: req.responseValue,
    });
    console.log(req.responseValue);
    // return res.json(req.responseValue);
};

router.get("/stylesheets/style.css", function (req, res, next) {
    res.sendFile(path.join(__dirname + "/../public/stylesheets/style.css"));
});
router.get("/javascripts/mainScript.js", function (req, res, next) {
    res.sendFile(path.join(__dirname + "/../public/javascripts/mainScript.js"));
});
router.get("/", function (req, res, next) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
});
router.get("/pseudo-chain", function (req, res, next) {
    res.sendFile(path.join(__dirname + "/../public/chain.html"));
});

router.post("/transactions/new", PseudoCoin.newTransaction, resMiddleware);

router.get("/mine", PseudoCoin.mine, resMiddleware);

module.exports = router;
