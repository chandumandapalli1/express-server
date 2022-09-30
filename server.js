//jshint esversion:6
const express=require('express')

const app=express();

//get method for home Route
app.get("/",function(request, response)
{
    console.log(request);
    response.send("<h1> Sending html content. here text can be either text or html content </h1>")
     //response.send("Hello sending text data");
    
});

//get method for contact route
app.get("/contact",function(req,res)
{
    console.log(req);
    res.send("Hey ur in contact ROute");;
});
// if the user goes to about route the following code gets executed and f() is being called
app.get("/about",function(req,res)
{
    res.send("<em>Hey now ur in about page and this is chandra</em>")
})

app.listen(3000,function()
{
    console.log("sever started on port 3000");
});
