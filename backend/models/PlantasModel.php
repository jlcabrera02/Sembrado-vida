<?php
/* 
require "Model.php"; */

class PlantasModel extends Model{
  protected function create($data = array()){
  
    foreach ($data as $key => $value) {
      $$key = $value;
    }

    if (isset($data['Perfil'])){
      $this->query = "INSERT INTO arboles (Planta, Ncientifico, Categoria, Cac, Perfil) VALUES ('$Planta', '$Ncientifico', '$Categoria', '$Cac', '$Perfil')";
    }else{
      $this->query = "INSERT INTO arboles (Planta, Ncientifico, Categoria, Cac) VALUES ('$Planta', '$Ncientifico', '$Categoria', '$Cac')";
    }

    $this->set_query();
  }

  protected function update($data = array()){
    foreach ($data as $key => $value) {
      $$key = $value;
    }
    
    if (isset($data['Perfil'])){
    $this->query = "UPDATE arboles SET Planta = '$Planta', Ncientifico = '$Ncientifico', Categoria = '$Categoria', Cac = '$Cac', Perfil = '$Perfil' WHERE id_arbol = $id";
  }else{
      $this->query = "UPDATE arboles SET Planta = '$Planta', Ncientifico = '$Ncientifico', Categoria = '$Categoria', Cac = '$Cac' WHERE id_arbol = $id";
    }

    $this->set_query();

  }
  
  protected function delete($id="") {  
    $this->query = "DELETE FROM arboles WHERE id_arbol = $id";
    $this->set_query();

    return $this->query;
  }

  public function read($id = ""){
    $this->query = "SELECT * FROM arboles WHERE id_arbol = $id";
    $this->get_query();
    
    $array = [];
    
    foreach ($this->rows as $key => $value) {
      array_push($array, $value);
    }
    
    return $array;
  }

  protected function get_data($id = "") {
    $this->query = "SELECT arb.id_arbol, arb.Planta, arb.Ncientifico, arb.Categoria, arb.Perfil, SUM(det.Planta_viva) as Total, cac.cac FROM arboles AS arb INNER JOIN detalles AS det INNER JOIN cac AS cac ON det.id_arbol = arb.id_arbol AND arb.cac = cac.id_cac WHERE arb.Cac = $id GROUP BY (arb.id_arbol)";

    $this->get_query();
    
    $array = [];
    
    foreach ($this->rows as $key => $value) {
      array_push($array, $value);
    }
    
    return $array;
  }

  protected function get_planta_cac($id = ""){
    $this->query = "SELECT arb.*, cac.Cac FROM arboles AS arb INNER JOIN cac as cac WHERE arb.Cac = $id";

    $this->get_query();

    $array = [];

    foreach ($this->rows as $key => $value) {
      array_push($array, $value);
    }
    
    return $array;
    
  }
}