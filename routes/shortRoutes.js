const express = require('express');
const shortController = require('../controllers/shortController');
const router = express.Router();

router.route('/shorturl').post(shortController.createURL)
router.route('/').get(shortController.createURL)


module.exports = router;