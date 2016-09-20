$(document).ready(function(){
    $('#divSalida').html('Listo.');
    $('#imgMundo').click(function(){
        $('#divSalida').html('Un click');
        $.get('/helloworld/',{},function(contenido){
            $('#divSalida').html(contenido);
        });
    });
});