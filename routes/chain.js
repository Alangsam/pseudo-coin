var express = require("express");
const PseudoChain = require("../middleware/pseudoChain");
var router = express.Router();

/* GET home page. */
router.get("/chain", function (req, res, next) {
  res.json(PseudoChain.chain);
});

module.exports = router;
