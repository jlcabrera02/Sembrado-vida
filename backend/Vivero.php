<?php
require_once "Autoload.php";
$Autoload = new Autoload;

header("Access-Control-Allow-Origin: *");
$vivero = new ViveroController;
header("Content-type: application/json");

if($_SERVER["REQUEST_METHOD"] == "GET"){
	$res = $vivero->get_viv();
	echo json_encode($res);
  
}else{
	echo "Proximamente se podra hacer uso de este método";
}