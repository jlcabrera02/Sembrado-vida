<?php

class AuthModel extends Model {
  protected function create($data = array()){
    foreach ($data as $key => $value) {
      $$key = $value;
    }

    $this->query  = "INSERT INTO user (Correo, Nombre, Apellido_paterno, Apellido_materno, Password) VALUES ('$Correo', '$Nombre', '$Apellido_paterno', '$Apellido_materno', MD5('$Password'))";
    
    $this->set_query();
  }

  protected function read($data = array()){
    foreach ($data as $key => $value) {
      $$key = $value;
    }

    $this->query  = "SELECT * FROM user WHERE Correo = '$Correo' AND Password = MD5('$Password')";
    
    $this->get_query();

    $array = [];

    foreach ($this->rows as $key => $value) {
      $array = $value;
    }


    return $array;
  }
  
  
  protected function update($data = array()){
    foreach ($data as $key => $value) {
      $$key = $value;
    }
    
    $this->query  = "UPDATE Password = '$Password', Nombre = '$Nombre', Apellido_paterno = '$Apellido_paterno', Apellido_materno = '$Apellido_materno' FROM user WHERE Correo = '$Correo' AND Password = MD5('$Password')";

    $this->set_query();
  }

  Protected function get_user($data = array()){
    foreach ($data as $key => $value) {
      $$key = $value;
    }

    $this->query  = "SELECT Correo, Password FROM user WHERE Correo = '$Correo' AND Password = '$Password'";

    $this->get_query();
 
    $array = [];

    foreach ($this->rows as $key => $value) {
      array_push($array, $value);
    }

    return $array;
  
  }
}