<?php
declare(strict_types=1);
require_once "Autoload.php";
$Autoload = new Autoload;

header("Content-type: application/json");
header("Access-Control-Allow-Origin: *");
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
  $post = $plantas->post_plantas($data);

  if (isset($post['result']['error_id'])){
    $responseCode = $post["result"]["error_id"];
    http_response_code($responseCode);
  }else{
    http_response_code(200); 
  }

  echo json_encode($post);

}else if ($_SERVER["REQUEST_METHOD"] == "PUT"){

  $data = file_get_contents("php://input");
  $put = $plantas->put_plantas($data);
  
  if( isset($put['result']['error_id']) ){
    $responseCode = $put["result"]["error_id"];
    http_response_code($responseCode);
  }else{
    http_response_code(200);
  }
  echo json_encode($put);
  
}else if ($_SERVER["REQUEST_METHOD"] == "DELETE"){
  
  $data = file_get_contents("php://input");
  $del = $plantas->delete_plantas($data);
  
  if( isset($del['result']['error_id']) ){
    $responseCode = $del["result"]["error_id"];
    http_response_code($responseCode);
  }else{
    http_response_code(200);
  }
  echo json_encode($del);

}
?>