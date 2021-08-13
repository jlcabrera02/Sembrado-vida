<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");

header("Content-type: application/json");


require_once "Autoload.php";
$Autoload = new Autoload;

$auth = new AuthController;

if ($_SERVER["REQUEST_METHOD"] == "POST"){
  //header("Access-Control-Allow-Origin: *");
  $data = file_get_contents("php://input");
  $resp = $auth->login($data);
  if (isset($resp['result']['error_id'])){
    http_response_code($resp["result"]["error_id"]);
  }else{
    http_response_code(200);
  }
  echo json_encode($resp);

}else{
  http_response_code(200);
  $array = ["error" => "400", "msg" => "La autenticación solo se permite por el metodo  POST"];

  echo json_encode($array);
}