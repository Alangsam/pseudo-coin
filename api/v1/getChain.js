const express = require("express");
const PseudoCoin = require("../../middleware/pseudoCoin");
const router = express.Router();

router.get("/getChain", PseudoCoin.getChain, (req, res, next) => {
    res.json(req.responseValue);
});

module.exports = router;
