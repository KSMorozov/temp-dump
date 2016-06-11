/* eslint new-cap: 0*/
const router = require('express').Router();
const index = require('./api/index');
const news = require('./api/news');
const products = require('./api/products');
const categories = require('./api/categories');

router.use(index);
router.use(news);
router.use(products);
router.use(categories);

module.exports = router;
