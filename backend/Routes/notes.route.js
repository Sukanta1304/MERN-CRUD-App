const {Router}= require("express");
const { NotesModel } = require("../Models/notes.models");


const NotesController= Router();

NotesController.get("/",async(req,res)=>{
    const notes= await NotesModel.find({userId:req.body.id});

    res.send(notes)
})
NotesController.post("/create",async(req,res)=>{
    const {title,descp,id}= req.body;
    const newNote= new NotesModel({
        title,
        descp,
        userId: id
    })
    await newNote.save();
    res.send("new Notes created successfully")
})
NotesController.put("/edit/:notesId",async(req,res)=>{
    const {notesId} = req.params;
    const updatedNote= await NotesModel.findOneAndUpdate({_id:notesId , userId:req.body.id},{...req.body});
    if(updatedNote){
        res.send("Note updated successfully")
    }else{
        res.send("Note not found")
    }
})
NotesController.delete("/delete/:notesId",async(req,res)=>{
    const {notesId} = req.params;
    const deletedNote= await NotesModel.findOneAndDelete({_id:notesId , userId:req.body.id});
    if(deletedNote){
        res.send("Note deleted successfully")
    }else{
        res.send("Note not found")
    }
})
module.exports={
    NotesController
}