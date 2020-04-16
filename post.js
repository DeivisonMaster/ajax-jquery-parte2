
$(document).ready(function (){

    var btnSalvar = $('#btnSalvar');
    var senhaInformada = $('#senha').val();

    btnSalvar.on('click', function (){
        btnSalvar.html('Aguarde...');
        btnSalvar.prop('disabled', true);

        jQuery.ajax({
            type: "POST",
            dataType: "text/html",
            url: "senha.php",
            data: {senha: senhaInformada},
            
            success: function(data){
                $('#resultadoAtualizacao').html(data);

                btnSalvar.html('Atualizar Senha');
                btnSalvar.prop('disabled', false);

                $('#senha').val('');
            }
        });
    });
});