const express=require("express")
const noteController=require('../Controller/note')
const router=express.Router()

router
.get('/',noteController.getText)
.post('/',noteController.createNote)
.patch('/:id',noteController.updateProduct)
.delete('/:id',noteController.deleteNote)

exports.router=router