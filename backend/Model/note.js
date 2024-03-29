const mongoose=require("mongoose")
const {Schema} = mongoose

const textSchema=new Schema({
    Title:{type:String,required:true,unique:true},
    Note:{type:String}
})

exports.Texts=mongoose.model('Texts',textSchema)