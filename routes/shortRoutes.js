const express = require('express');
const shortController = require('../controllers/shortController');
const router = express.Router();

router.route('/shorturl').post( shortController.createURL);
router.route('/shorturl/:id').get( shortController.sendRedirectURL);
 

 


module.exports = router;