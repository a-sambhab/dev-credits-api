const router = require('express').Router();
const devCredits = require('../model/model.js');

const getCredits = require('../controllers/getCredits');
const postCredits = require('../controllers/postCredits');

router.get('/get/:id', getCredits);
  
router.post('/post', postCredits);
  
module.exports = router;