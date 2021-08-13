<?php
require_once "Autoload.php";
$Autoload = new Autoload;

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json");
$detalles = new DetallesController;
$respuestas = new RespuestasController;

if($_SERVER["REQUEST_METHOD"] == "GET"){
  
  if (isset($_GET['id'])){

    if (isset($_GET['vivero'])){
      $array = ["id" => $_GET['id'], "Vivero" => $_GET['vivero']];
    }else{
      $array = ["id" => $_GET['id']];
    }
    $resp = $detalles->get_det($array);
    http_response_code(200);

  } else{
    $resp = $respuestas->sin_parametros();
  }
  
  echo json_encode($resp);
 
}else if ($_SERVER["REQUEST_METHOD"] == "POST"){
  $data = file_get_contents("php://input");
  $post = $detalles->post_det($data);

  if (isset($post['result']['error_id'])){
    $responseCode = $post["result"]["error_id"];
    http_response_code($responseCode);
  }else{
    http_response_code(200); 
  }

  echo json_encode($post);

}else if ($_SERVER["REQUEST_METHOD"] == "PUT"){

  $data = file_get_contents("php://input");
  $put = $detalles->put_det($data);
  
  if( isset($put['result']['error_id']) ){
    $responseCode = $put["result"]["error_id"];
    http_response_code($responseCode);
  }else{
    http_response_code(200);
  }
  echo json_encode($put);
  
}else if ($_SERVER["REQUEST_METHOD"] == "DELETE"){
  
  $data = file_get_contents("php://input");
  $del = $detalles->delete_det($data);
  
  if( isset($del['result']['error_id']) ){
    $responseCode = $del["result"]["error_id"];
    http_response_code($responseCode);
  }else{
    http_response_code(200);
  }
  echo json_encode($del);

}