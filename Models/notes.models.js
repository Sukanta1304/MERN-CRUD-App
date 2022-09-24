const mongoose= require("mongoose");

const notesSchema= mongoose.Schema({
    title:String,
    descp:String,
    userId:String
})

const NotesModel= mongoose.model("note",notesSchema);

module.exports={
    NotesModel
}