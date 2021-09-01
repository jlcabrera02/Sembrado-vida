<?php
//Muestra las plantas que tiene cada cac para poder añadirles un detalle, cac venado o prosperidad = $_GET["id"]
declare(strict_types=1);
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
  echo JSON_ENCODE(["Error" => "Método no permitido"]);
  http_response_code(400);
}

?>