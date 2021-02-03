const express = require("express");
const PseudoCoin = require("../../middleware/pseudoCoin");
const router = express.Router();

router.post("/", PseudoCoin.newTransaction, (req, res, next) => {
    res.json(req.responseValue);
    console.log(req);
});

module.exports = router;
