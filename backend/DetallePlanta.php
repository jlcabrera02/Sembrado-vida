<?php
require './Autoload.php';
$autoload = new Autoload;

header("Access-Control-Allow-Origin: *");

header("Content-type: application/json");

if ($_SERVER['REQUEST_METHOD'] == "GET" ){
  $planta = new PlantasModel;
  if (isset($_GET['id'])){
    $res = $planta->getPlanta($_GET['id']);
    echo json_encode($res);
  }else{
    echo "Falta parametros";
  }
}else{
  echo "Metodo http no permitido";
}