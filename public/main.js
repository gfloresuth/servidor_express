//https://github.com/gfloresuth/servidor_express/
$(document).ready(function(){
    $('#divSalida').html('Listo.');
    $('#divSalida').addClass('normal');
    $('#divSalida').removeClass('error');
    $('#imgMundo').click(function(){
        $('#divSalida').addClass('normal');
        $('#divSalida').removeClass('error');
        $('#divSalida').html('Un click');
        $.get('/helloworld/',{},function(contenido){
            $('#divSalida').html(contenido);
        });
    });

    $('#imgAlumno').click(function(){
        $('#divSalida').addClass('normal');
        $('#divSalida').removeClass('error');
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
            $('#divSalida').html('Error');
            $('#divSalida').addClass('error');

        });  // fin getJSON
    }); // fin click

}); // fin $(document).ready