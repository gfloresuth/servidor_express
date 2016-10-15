// se agrega modulo express
var express = require('express');
var bodyParser = require('body-parser');



// se crea servidor
var app = express();


// se usa body-parser
app.use(bodyParser.urlencoded({ extended: false }));


// se declara puerto
const PORT=8090;


// se agrega ruta fija /assets en directorio /assets
app.use('/assets', express.static(__dirname + '/assets'));
// se agrega un engine llamado 'html', el cual es 'atpl'
app.engine('html', require('atpl').__express);
// se especifica que el 'view engine' es 'html' (declarado previamente)
app.set('view engine','html');

app.set('devel',false);


// se agrega ruta '/nosotros/', la cual es visible en http://localhost:8090/nosotros/
app.get('/nosotros/',function(req,res){
    res.render('nosotros',{'nombre':'Patito plus'});
});

// se agrega ruta '/listado/', la cual es visible en http://localhost:8090/listado/
app.get('/listado/',function(req,res){
    // arreglo simple
    var arreglo = [];
    arreglo.push('PASTEL');
    arreglo.push('DOGO MANIACO');
    arreglo.push('SODA');
    arreglo.push('otro mas');

    
    // arreglo para pasar variables a la vista
    var variables = {
        'arreglo': arreglo
    };
    //res.send('aki toy');
    res.render('mostrar2',variables);
});

/*app.get('/',function(req,res){

    //res.send('Hola que tal');
    //res.render('index',{});
});*/

// se agrega ruta '/', la cual se encuentra en el directorio public
app.use('/',express.static(__dirname+"/public"));


// se agrega ruta '/helloworld/'
app.get('/helloworld/',function(req,res){
    var oFecha = new Date();
    var rnd = oFecha.getTime();
    res.send('Otro texto ' + rnd);
});

// se agrega ruta '/numeros/', como servicio que regresa formato json
app.get('/numeros/',function(req,res){
    var numeros = [2,3,4,5,100];
    res.json(numeros);
});

// se agrega ruta '/alumnos/', como servicio que regresa formato json
app.get('/alumnos/',function(req,res){
    var alumnos = [];
    
    alumnos.push({nombre:"Luis", "correo":"luis@hotmail.com"});
    alumnos.push({nombre:"Pepe", "correo":"pepe@hotmail.com"});
    res.json(alumnos);
    
});

app.get('/productos/',function(req,res){
    res.send('Nada');
});

app.get('/productos/:id',function(req,res){
    res.send(''+ req.params.id);
});

app.post('/',function(req,res){
    res.send('No disponible. ' + req.body.palabra);
});

app.listen(PORT, function(){
    console.log('Listo');
});
