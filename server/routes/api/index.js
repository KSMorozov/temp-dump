/* eslint new-cap: 0*/
const router = require('express').Router();

router.get('/', (req, res) => res.json({ message: 'API ENDPOINT.' }));

module.exports = router;
