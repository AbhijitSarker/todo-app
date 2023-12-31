const { Router } = require('express');
const { getTodo, saveTodo } = require('../controllers/todoController');

const router = Router();

router.get('/', getTodo);
router.post('/save', saveTodo);

module.exports = router;