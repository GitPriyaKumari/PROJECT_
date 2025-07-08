var express=require('express')
var ejs=require('ejs')
var bodyPaser=require('body-parser');
var mysql=require('mysql');
var session=require('expres-session');

mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"project_laravel"
})

var app=express();
app.use(express.static('public'))
app.set('view engine','ejs');

app.listen(8080);
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:"secret"}))

app.get('/',function(req,res){

  var con=  mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"node-project",
    })

    con.query("SELECT * FROM products",(err,result)=>{
       res.render('pages/index',{result:result});
    })

   

});