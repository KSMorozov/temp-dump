/* eslint new-cap: 0 no-console: 0 */
/* eslint consistent-return: 0 no-underscore-dangle: 0*/
const router = require('express').Router();
const Article = require('../../models/article');

// Get news article by its id.
router.get('/news', (req, res, next) => {
  const _id = req.query.id;
  if (!_id) return next();
  Article.findById({ _id }, (err, article) => {
    if (err) return res.status(500).json({ message: 'Failed to get news article.' });
    res.status(200).json({ message: 'Successfully got news article item.', article });
  });
});

// Get news articles sorted by desc date.
router.get('/news', (req, res) => {
  Article.find({}, null, { sort: '-date' }, (err, articles) => {
    if (err) return res.status(500).json({ message: 'Failed to get news articles.' });
    res.status(200).json({ message: 'Successfully got news articles.', articles });
  });
});

// Create new news article.
router.post('/news', (req, res) => {
  const { title, subtitle, body, image } = req.body;
  const article = new Article({
    title,
    subtitle,
    body,
    image,
  });
  if (!title || !subtitle || !body) return res.status(500).json({ message: 'Failed to post news article, it must have title, subtitle and body.' });
  article.save((err, saved) => {
    if (err) return res.status(500).json({ message: 'Failed to post news article.' });
    return res.status(200).json({ message: 'Successfully posted news article.', article: saved });
  });
});

module.exports = router;
