<?php
//Este script de php me extrae la información de total de plantas con o sin detalles ya que la planta que no tiene avance no se muestra en la página principal
require_once "Autoload.php";
$Autoload = new Autoload;
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Origin: *");

header("Content-type: application/json");
$plantas = new PlantasController;
$respuestas = new RespuestasController;

if($_SERVER["REQUEST_METHOD"] == "GET"){

  if (isset($_GET['id'])){
    $resp = $plantas->data_planta($_GET['id']);
  }else{
    $resp = $respuestas->sin_parametros();
  }
  echo json_encode($resp);
  
}else{
  echo "Método no permitido";
  http_response_code(400);
}