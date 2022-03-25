const express = require("express");
const app = express();

app.get("/books",allBooks,(req,res)=>{
    return res.send("respons all books");
})

app.get("/book/:name",singleBook,(req,res)=>{
    res.send({"bookname":req.name});
})
function singleBook(req,res,next){
     req.name = req.params.name;
    next();
}
function allBooks(req,res,next){
    console.log("Fetching all books");
    next();
}

app.listen(5000,()=>{
    console.log("lisning")
})