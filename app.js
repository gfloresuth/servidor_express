var express = require('express');
var app = express();


const PORT=8090;

app.engine('html', require('atpl').__express);
app.set('view engine','html');
app.set('devel',false);
// views

app.get('/nosotros/',function(req,res){
    res.render('nosotros',{'nombre':'Patito plus'});
});
app.get('/listado/',function(req,res){
    var elementos=[];
    elementos.push('Soda');
    elementos.push('Pizza');
    elementos.push('Pastel');
    res.render('listado',{'elementos':elementos});
});

app.get('/',function(req,res){
    //res.send('Hola que tal');
    res.render('index',{});
});

app.listen(PORT, function(){
    console.log('Listo');
});