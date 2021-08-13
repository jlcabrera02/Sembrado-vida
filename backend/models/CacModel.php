<?php

class CacModel extends Model{
  protected function create($data = array()){
  
    foreach ($data as $key => $value) {
      $$key = $value;
    }

    $this->query = "INSERT INTO cac (Cac, Ubicacion, Tipo) VALUES ('$Cac', '$Ubicacion', '$Tipo')";

    $this->set_query();
  }

  protected function update($data = array()){
    foreach ($data as $key => $value) {
      $$key = $value;
    }
  
    $this->query = "UPDATE cac SET Cac = '$Cac', Ubicacion = '$Ubicacion', Tipo = '$Tipo' WHERE id_cac = $id";

    $this->set_query();

  }
  
  protected function delete($id="") {  
    $this->query = "DELETE FROM cac WHERE id_cac = $id";
    $this->set_query();

    return $this->query;
  }

  protected function read() {
    $this->query = "SELECT cac.id_cac, cac.Cac, cac.Ubicacion, viv.Tipo FROM cac AS cac INNER JOIN viveros AS viv ON viv.id_vivero = cac.Tipo";
    $this->get_query();

    $array = [];

    foreach ($this->rows as $key => $value) {
      array_push($array, $value);
    }

    return $array;
  }
}