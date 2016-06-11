/* eslint new-cap: 0 no-console: 0 */
/* eslint consistent-return: 0 no-underscore-dangle: 0*/
const router = require('express').Router();
const Category = require('../../models/category');

// Get single category by id.
router.get('/categories', (req, res, next) => {
  const _id = req.query.id;
  if (!_id) return next();
  Category.findById({ _id }, (err, category) => {
    if (err) return res.status(500).json({ message: 'Failed to get category item.' });
    res.status(200).json({ message: 'Successfully got category item.', category });
  });
});

// Get categories sorted by desc date.
router.get('/categories', (req, res) => {
  Category.find({}, null, { sort: '-date' }, (err, categories) => {
    if (err) return res.status(500).json({ message: 'Failed to get category items.' });
    res.status(200).json({ message: 'Successfully got category items.', categories });
  });
});

// Create new category.
router.post('/categories', (req, res) => {
  const { name, type, image } = req.body;
  const category = new Category({
    name,
    type,
    image,
  });
  if (!name || !type || !image) return res.status(500).json({ message: 'Failed to post category item, it must have name, type, image.' });
  category.save((err, saved) => {
    if (err) return res.status(500).json({ message: 'Failed to post category item.' });
    return res.status(200).json({ message: 'Successfully posted category item.', category: saved });
  });
});

module.exports = router;
