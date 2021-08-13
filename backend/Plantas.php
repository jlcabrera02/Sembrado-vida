<?php
require_once "Autoload.php";
$Autoload = new Autoload;
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");
header("Access-Control-Allow-Origin: *");

header("Content-type: application/json");
$plantas = new PlantasController;
$respuestas = new RespuestasController;

if($_SERVER["REQUEST_METHOD"] == "GET"){

  if (isset($_GET['id'])){
    $resp = $plantas->get_plantas($_GET['id']);
  }else{
    $resp = $respuestas->sin_parametros();
  }
  echo json_encode($resp);
  
}else if ($_SERVER["REQUEST_METHOD"] == "POST"){
  $data = file_get_contents("php://input");
  $post = $plantas->postPlantas($data);

  if (isset($post['result']['error_id'])){
    $responseCode = $post["result"]["error_id"];
    http_response_code($responseCode);
  }else{
    http_response_code(200); 
  }

  echo json_encode($post);

}else if ($_SERVER["REQUEST_METHOD"] == "PUT"){

  $data = file_get_contents("php://input");
  $put = $plantas->putPlantas($data);
  
  if( isset($put['result']['error_id']) ){
    $responseCode = $put["result"]["error_id"];
    http_response_code($responseCode);
  }else{
    http_response_code(200);
  }
  echo json_encode($put);
  
}else if ($_SERVER["REQUEST_METHOD"] == "DELETE"){
  
  $data = file_get_contents("php://input");
  $del = $plantas->deletePlantas($data);
  
  if( isset($del['result']['error_id']) ){
    $responseCode = $del["result"]["error_id"];
    http_response_code($responseCode);
  }else{
    http_response_code(200);
  }
  echo json_encode($del);

}