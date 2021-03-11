const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
const app=express();
app.set("view engine","ejs");
let items=["Buy Food","Cook Food","Eat Food"];
let workItems=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    let day=date();
    
    res.render("list",{listTitle:day,newListItems:items});

});
app.get("/work",function(req,res){
res.render("list",{listTitle:"Work List",newListItems:workItems});
});
app.post("/",function(req,res){
    item=req.body.item;
    if(req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }


});
// app.post("/work",function(req,res){
//     let item=req.body.item;
//     workItems.push(item);
//     res.redirect("/work");
// })
// ;
app.listen(3000,function(){
    console.log("Server started at port 3000");
})