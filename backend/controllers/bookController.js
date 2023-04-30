const Book=require("../models/bookModel")

exports.createBook= async (req, res, next)=>{
    const book=await Book.create(req.body);
    res.status(201).json({
        success: true,
        book
    })
}

exports.getAllBooks = async (req, res, next)=>{
    const books=await Book.find();
    res.status(201).json({
        success: true,
        books
    })
}

exports.updateBook = async (req, res, next)=>{
    let book=await Book.findById(req.params.id);
    if(!book){
        return res.status(500).json({
            success: false,
            message: "book not found"
        })
    }
    book=await Book.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    res.status(200).json({
        success: true,
        message: "book updated",
        book
    })
}

exports.deleteBook = async (req, res, next)=>{
    let book=await Book.findById(req.params.id);
    if(!book){
        return res.status(500).json({
            success: false,
            message: "book not found"
        })
    }
    await book.deleteOne();
    res.status(200).json({
        success: true,
        message: "book deleted"
    })
}

exports.getBookDetails = async (req, res, next)=>{
    let book=await Book.findById(req.params.id);
    if(!book){
        return res.status(500).json({
            success: false,
            message: "book not found"
        })
    }
    res.status(200).json({
        success: true,
        book
    })
}