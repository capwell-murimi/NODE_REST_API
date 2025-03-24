const { Router } = require('express');
const controller = require('./controller')

const router = Router();

router.get('/', controller.getStudents);
router.post('/', controller.addStudent);
router.put('/:id', controller.updateStudent);
router.get('/:id', controller.getStudentById);

module.exports = router;