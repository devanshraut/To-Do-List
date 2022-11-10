const express = require('express');
const bodyParser = require('body-parser'); 
const date = require(__dirname+"/date.js");

const app=express();

var items=[];
var workItems=[];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get('/',function(req,res){
// res.send('hello');
let Day=date.getdate();
res.render("list",{listTitle:Day,newListItems:items});
 
});

app.post("/",function(req,res ){
  console.log(req.body);

   var item = req.body.newItem;
   if(req.body.list=== "work List")
   {
    workItems.push(item);
res.redirect("/work");
   }
   else{
    items.push(item);
  res.redirect("/");
   }
   
});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"work List",newListItems:workItems});
});

app.post("/work",function(req,res){
var item =req.body.newItem;
workItems.push(item);
res.redirect("/work");
}); 

app.get("/about",function(req,res){
res.render("about");
});

app.listen(3000,function(){
console.log('server started on port 3000');
});