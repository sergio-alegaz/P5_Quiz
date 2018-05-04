var express = require('express');
var router = express.Router();

const qCtrl = require("../controllers/quiz_controller");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizzes', qCtrl.index);

router.get('/credits', function(req, res, next) {
    res.render('credits', { title: 'Quiz' });
});

module.exports = router;
