$(document).ready(function(){
    $('form').on('submit', function(event) {
        event.preventDefault();
    });
    
    $('#telefone').mask('(00) 00000-0000');
});