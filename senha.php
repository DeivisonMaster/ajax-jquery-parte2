<?php

$senha = $POST["senha"];

function alteraSenha(){
    $novaSenha = ++$senha;
    
    return $novaSenha;
}

?>