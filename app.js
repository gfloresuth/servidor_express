var express = require('express');
var app = express();

const PORT=8090;

  app.use('/assets', express.static(__dirname + '/assets'));
app.engine('html', require('atpl').__express);
app.set('view engine','html');
app.set('devel',false);
// views

app.get('/nosotros/',function(req,res){
    res.render('nosotros',{'nombre':'Patito plus'});
});

app.get('/listado/',function(req,res){
    var arreglo = [];
    arreglo.push('PASTEL');
    arreglo.push('DOGO MANIACO');
    arreglo.push('SODA');
    arreglo.push('otro mas');

    
    var variables = {
        'arreglo': arreglo
    };
    //res.send('aki toy');
    res.render('mostrar2',variables);
});

app.get('/',function(req,res){

    //res.send('Hola que tal');
    res.render('index',{});
});

app.listen(PORT, function(){
    console.log('Listo');
});
