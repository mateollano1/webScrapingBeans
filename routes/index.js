var express = require('express');
var router = express.Router();
const { getResults } = require("../controllers/scraper")
const { product } = require('../repository/products')


/* GET home page. */
router.get("/", async function(req, res, next) {
    const result = await getResults();
    console.log("terr");

    result['data'].map(function(index) {
            // console.log(result['data'][5]);
            // console.log(index);

            product.create(index).then(user => res.json(user)).catch(err = res.json(err))
        }

    )
    res.json(result)

});

saveProduct = async(result) => {
    result['data'].map(function(index) {
        // console.log(result['data'][5]);
        // console.log(index);

        product.create(index).then(user => res.json(user)).catch()

    })
}
router.get('/products', (req, res) => {
    product.findAll().then(users => res.json(users))
})



module.exports = router;