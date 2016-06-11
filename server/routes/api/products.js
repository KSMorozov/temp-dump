/* eslint new-cap: 0 no-console: 0 */
/* eslint consistent-return: 0 no-underscore-dangle: 0*/
const router = require('express').Router();
const Product = require('../../models/product');

// Get single product by id.
router.get('/products', (req, res, next) => {
  const _id = req.query.id;
  if (!_id) return next();
  Product.findById({ _id }, (err, product) => {
    if (err) return res.status(500).json({ message: 'Failed to get product item.' });
    res.status(200).json({ message: 'Successfully got product item.', product });
  });
});

// Get products sorted by desc date.
router.get('/products', (req, res) => {
  const category = req.query.category;
  if (!category) return res.status(500).json({ message: 'Failed to get product items, one must provide category to list products.' });
  Product.find({ category }, null, { sort: '-date' }, (err, products) => {
    if (err) return res.status(500).json({ message: 'Failed to get product items.' });
    res.status(200).json({ message: 'Successfully got product items.', products });
  });
});

// Create new product.
router.post('/products', (req, res) => {
  const { name, type, image, body, category, price } = req.body;
  const product = new Product({
    name,
    type,
    image,
    body,
    category,
    price,
  });
  if (!name || !type || !image || !body || !category || !price) return res.status(500).json({ message: 'Failed to post product item, it must have name, type, image, body, price and category.' });
  product.save((err, saved) => {
    if (err) return res.status(500).json({ message: 'Failed to post product item.' });
    return res.status(200).json({ message: 'Successfully posted product item.', product: saved });
  });
});

module.exports = router;
