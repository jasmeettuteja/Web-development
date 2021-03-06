const express=require("express");
const app=express();
app.get("/",function(request,response){
response.send("<h1>Hello you!</h1>");
});
app.get("/contact",function(request,response){
    response.send("Contact me at:jastuteja729@gmail.com");
    });
    app.get("/about",function(request,response){
        response.send("<h1>Hello you! My name is Jasmeet Tuteja. I am a programmer.</h1>");
        });
app.listen(3000,function(){
console.log("Server started on port 3000.");
});