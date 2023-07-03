const express= require('express');
const router = express.Router();
const {newComment, allComment, deletefood,update} = require('../controller/Ccontroller');


router.route('/post/:id')
.post(newComment)
.get(allComment)
router.patch('/updatemenu/:id',update)
router.route('/:blogId/:comId')
.delete(deletefood)

module.exports= router;