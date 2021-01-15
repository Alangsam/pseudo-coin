const express = require("express");
const router = express.Router();

const PseudoCoin = require("../middleware/pseudoCoin");

const resMiddleware = (req, res, next) => {
  res.render("index", {
    title: "Pseudo-Coin",
    jsonResult: req.responseValue,
  });
  console.log(req.responseValue);
  // return res.json(req.responseValue);
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Pseudo-Coin" });
});

router.post("/transactions/new", PseudoCoin.newTransaction, resMiddleware);

router.get("/mine", PseudoCoin.mine, resMiddleware);

router.get("/chain", PseudoCoin.getChain, resMiddleware);

module.exports = router;
