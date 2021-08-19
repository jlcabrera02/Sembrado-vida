<?php
//Este script de php me extrae la información completa de cada Cac mediante su parametro id para mostrarlas en la ventana principal del sistema
require_once "Autoload.php";
$Autoload = new Autoload;
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Origin: *");

header("Content-type: application/json");
$plantas = new PlantasController;
$respuestas = new RespuestasController;

if($_SERVER["REQUEST_METHOD"] == "GET"){

  if (isset($_GET['id'])){
    $resp = $plantas->data($_GET['id']);
  }else{
    $resp = $respuestas->sin_parametros();
  }
  echo json_encode($resp);
  
}else{
  echo "Método no permitido";
  http_response_code(400);
}