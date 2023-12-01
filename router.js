const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/', async(req,res) =>{
    res.send("hello");
} )

router.post('/stu',controller.createStudents );
router.get('/getAll',controller.getStudents );
router.get('/getInd/:id',controller.getStudentsById);



module.exports = router;