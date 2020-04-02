$(document).ready(function (){

    var btnSalvar = $('#btnSalvar');

    btnSalvar.on('click', function (){
        btnSalvar.html('Aguarde...');
        btnSalvar.prop('disabled', true);

        jQuery.ajax({
            type: "GET",
            datatype: "text/html",
            url: "sorteio.php",
            success: function (data){
                $('#resultadoSorteio').html(data);

                btnSalvar.html('Sortear número');
                btnSalvar.prop('disabled', false);
            },
        });
        
        /*
        $.get('sorteio.php').done(function (data){
            $('#resultadoSorteio').html(data);

            btnSalvar.html('Sortear número');
            btnSalvar.prop('disabled', false);
        });
        */
    });

});