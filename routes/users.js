var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource YO");
});

router.post("/forAjmal", function (req, res, next) {
  res.send({
    data: "This is for you boi ",
  });
});
module.exports = router;
