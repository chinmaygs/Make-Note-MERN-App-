const fs=require('../Model/note')

const texts=fs.Texts

exports.createNote=async(req,res)=>{
    //const product = new products(req.body)
    const prod=await texts.create(req.body)
    res.json(prod)
};

exports.getText=async(req,res)=>{
    const product=await texts.find()
    res.json(product)
}

exports.updateProduct=async(req,res)=>{
    const {id: id}=req.params
try{
    const doc=await texts.findOneAndUpdate({_id:id},req.body,{returnDocument:"after"})
    res.status(201).json(doc)
}
catch(err){
    console.log(err)
    res.status(400).json(err)
}
}

exports.deleteNote=async(req,res)=>{
    const id=req.params.id
    try{
        const doc= await texts.findOneAndDelete({_id:id})
        res.status(201).json(doc)
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

