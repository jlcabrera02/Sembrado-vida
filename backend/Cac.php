<?php
require_once "Autoload.php";
$Autoload = new Autoload;

/* require "controllers/PlantasController.php"; */


header("Access-Control-Allow-Origin: *");

header("Content-type: application/json");
$cac = new CacController;

if($_SERVER["REQUEST_METHOD"] == "GET"){

  $data = $cac->get_cac();
  echo json_encode($data);
  
}else if ($_SERVER["REQUEST_METHOD"] == "POST"){
  $data = file_get_contents("php://input");
  $post = $cac->post_cac($data);

  if (isset($post['result']['error_id'])){
    $responseCode = $post["result"]["error_id"];
    http_response_code($responseCode);
  }else{
    http_response_code(200); 
  }

  echo json_encode($post);

}else if ($_SERVER["REQUEST_METHOD"] == "PUT"){

  $data = file_get_contents("php://input");
  $put = $cac->put_cac($data);
  
  if( isset($put['result']['error_id']) ){
    $responseCode = $put["result"]["error_id"];
    http_response_code($responseCode);
  }else{
    http_response_code(200);
  }
  echo json_encode($put);
  
}else if ($_SERVER["REQUEST_METHOD"] == "DELETE"){
  
  $data = file_get_contents("php://input");
  $del = $cac->delete_cac($data);
  
  if( isset($del['result']['error_id']) ){
    $responseCode = $del["result"]["error_id"];
    http_response_code($responseCode);
  }else{
    http_response_code(200);
  }
  echo json_encode($del);

}