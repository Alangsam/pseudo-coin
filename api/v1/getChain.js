const express = require("express");
const PseudoCoin = require("../../middleware/pseudoCoin");
const router = express.Router();

router.get("/", PseudoCoin.getChain, (req, res, next) => {
    res.json(req.responseValue);
    //console.log(res)
});

module.exports = router;
