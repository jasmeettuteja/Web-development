const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const https=require("https");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
   res.sendFile(__dirname+"/signup.html") ;
});
app.post("/",function(req,res){
    const firstName=req.body.fName;
    const lastName=req.body.lName;
    const email=req.body.email;
    
    const data={
        members:[
            {
        email_address:email,
       status:"subscribed",
       merge_fields:{
  FNAME:firstName,
  LNAME:lastName  
}

            }
          
        ]
    };
    const jsonData=JSON.stringify(data);
    const url="https://us1.api.mailchimp.com/3.0/lists/5321d50b0e";
    const options={
        method:"POST",
        auth:"jasmeet1:99ebe22be121ca5d044e8fdb1a3d4b1b-us1"
    }
const request=https.request(url,options,function(response){
    if(response.statusCode===200){
        res.sendFile(__dirname+"/success.html");
    }
    else{
        res.sendFile(__dirname+"/failure.html");
    }
response.on("data",function(data){
    console.log(JSON.parse(data));
});
});
request.write(jsonData);
request.end();
});
app.post("/failure",function(req,res){
res.redirect("/");
});
app.listen(4000,function(){
    console.log("Server running at port 4000.");
})
//Api Key
//99ebe22be121ca5d044e8fdb1a3d4b1b-us1
//list id
//5321d50b0e