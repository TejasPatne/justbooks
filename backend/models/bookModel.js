const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, "please enter book name"],
        trim: true
    },
    author:{
        type:String,
        default:"unknown"
    },
    edition:{
        type:String,
        default:"unknown"
    },
    category:{
        type:String,
        required:[true, "please enter book category"]
    },
    coverpage:{
            type:String,
    },
    description:{
        type:String,
        required:[true, "please enter description of book"]
    },
    link:{
        type:String,
        required:[true, "please enter book link"]
    }
})

module.exports = mongoose.model("Book", bookSchema)