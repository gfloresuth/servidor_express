$(document).ready(function(){
    $('#divSalida').html('Listo.');
    $('#imgMundo').click(function(){
        $('#divSalida').html('Un click');
        $.get('/helloworld/',{},function(contenido){
            $('#divSalida').html(contenido);
        });
    });

    $('#imgAlumno').click(function(){
        //console.log('aki toy');
        $.getJSON('/alumnoss/', function(datos){
            //console.log(datos);
            var elementos=[];
            $.each(datos,function(i,v){
                console.log(v.nombre);
                elementos.push(v.nombre);
            }); // fin .each
            $('#divSalida').html(''+elementos.join('<br>'));
        }).fail(function(){
            
        });  // fin getJSON
    }); // fin click

}); // fin $(document).ready