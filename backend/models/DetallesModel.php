<?php
/* 
require "Model.php"; */

class DetallesModel extends Model{
  protected function create($data = array()){
    foreach ($data as $key => $value) {
      $$key = $value;
    }

    $Planta_viva = $data["Planta_sembrada"];

    $this->query = "INSERT INTO detalles (id_arbol, Planta_viva, Vivero, Planta_sembrada, Fecha_siembra, Ultima_actualizacion) VALUES ('$id_arbol', '$Planta_viva', '$Vivero', '$Planta_sembrada', '$Fecha_siembra', CURRENT_TIME)";
    

    $this->set_query();
  }

  protected function update($data = array()){
    
    if ($data['Update'] == "Repartir"){
      $this->repartir($data);
    }elseif ($data['Update'] == "Matar") {
      $this->matar($data);
    }

    $this->set_query();

  }
  
  protected function delete($id="") {  
    $this->query = "DELETE FROM detalles WHERE id_detalle = $id";
    $this->set_query();

    return $this->query;
  }

  protected function read($data = []) {

    if (!isset($data['Vivero'])){
      $this->todo($data);
    }else {
      $this->vivero($data);
    }
    
    $this->get_query();

    $array = [];

    foreach ($this->rows as $key => $value) {
      array_push($array, $value);
    }

    return $array;
  }

  private function repartir($data){
    foreach ($data as $key => $value) {
      $$key = $value;
    }
    /*Aquí solo necesitamos pasar dos parametros: $Planta_repartida y $Fecha_repartida es todo!!!*/
    $Planta_viva = $Cantidad - $Planta_repartida;

    $this->query = "UPDATE Detalles SET Planta_viva = $Planta_viva, Planta_repartida = '$Planta_repartida', Fecha_repartida = '$Fecha_repartida', Ultima_actualizacion = CURRENT_TIME WHERE id_detalle = $id";
    return $this->query;
  }
  
  private function matar($data){
    foreach ($data as $key => $value) {
      $$key = $value;
    }

    $Planta_viva = $Cantidad - $Planta_muerta;

    $this->query = "UPDATE Detalles SET Planta_viva = $Planta_viva, Planta_muerta = $Planta_muerta, Ultima_actualizacion = CURRENT_TIME WHERE id_detalle = $id";
    return $this->query;
  }
  
  private function todo($data){
    foreach ($data as $key => $value) {
      $$key = $value;
      $this->query = "SELECT det.id_detalle, det.Planta_viva, det.Planta_sembrada, det.Planta_repartida, det.Planta_muerta, det.Fecha_siembra, det.Fecha_repartida, det.Ultima_actualizacion, cac.Cac, arb.Planta, viv.Tipo FROM detalles AS det INNER JOIN arboles AS arb INNER JOIN cac AS cac INNER JOIN viveros as viv ON det.id_arbol = arb.id_arbol AND cac.id_cac = arb.cac AND det.vivero = viv.id_vivero WHERE det.id_arbol = $id ORDER BY det.Fecha_siembra DESC";
      return $this->query;
    }
  }
  
  private function vivero($data){
    foreach ($data as $key => $value) {
      $$key = $value;
    }
    $this->query = "SELECT det.id_detalle, det.Planta_viva, det.Planta_sembrada, det.Planta_repartida, det.Planta_muerta, det.Fecha_siembra, det.Fecha_repartida, det.Ultima_actualizacion, cac.Cac, arb.Planta, viv.Tipo FROM detalles AS det INNER JOIN arboles AS arb INNER JOIN cac AS cac INNER JOIN viveros as viv ON det.id_arbol = arb.id_arbol AND cac.id_cac = arb.cac AND det.vivero = viv.id_vivero WHERE det.id_arbol = $id AND det.Vivero = $Vivero ORDER BY det.Fecha_siembra DESC";
    return $this->query;
  }

  protected function get_cantidad($id){
    $this->query = "SELECT Planta_viva FROM detalles WHERE id_detalle = $id";
    
    $this->get_query();
    $cantidad = $this->rows[0]["Planta_viva"];
    return $cantidad;
  }

}