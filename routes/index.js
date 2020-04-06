var express = require('express');
var router = express.Router();
const { getResults } = require("../scraper")

/* GET home page. */
router.get("/", async function(req, res, next) {
    const result = await getResults();
    res.json(result)
});

module.exports = router;