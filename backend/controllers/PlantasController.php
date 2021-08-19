<?php

class PlantasController extends PlantasModel {
  
  public function get_plantas ($id) {
    $respuestas  = new RespuestasController();
    /*El parametro id hace referencia al CAC al que queremos consultar*/
    $get = $this->read($id);
    if (empty($get)){
      return $respuestas->error_406();
    }else{
      return $get;
    }
  }

  public function post_plantas ($data) {
    $session = new AuthController;
    $respuestas  = new RespuestasController();
    $json = json_decode($data, true);
    $auth = $session->verificar_user($json);
    
    
    if (
      !isset($json["Planta"])
      || !isset($json["Ncientifico"])
      || !isset($json["Categoria"])
      || !isset($json["Cac"])
      || !isset($json["Correo"])
      || !isset($json["Password"])
    ) {
      return $respuestas->error_400();
    }else{

      if($auth){
        $resp = $this->create($json);
        if ($this->affectedRows > 0) {
          return $respuestas->response = [
            "status" => "ok",
            "affected_rows" => $this->affectedRows,
            "insert_id" => $this->insertId
          ];
        }else{
          return $respuestas->error_401("Error al insertar planta");
        }
      }else {
        return $respuestas->error_403();
      }

    }
  }
  
  public function put_plantas ($data) {
    $session = new AuthController;
    $respuestas  = new RespuestasController();
    $json = json_decode($data, true);
    $auth = $session->verificar_user($json);
    
    if (
      !isset($json["id"])
      || !isset($json["Planta"])
      || !isset($json["Ncientifico"])
      || !isset($json["Categoria"])
      || !isset($json["Cac"])
      || !isset($json["Correo"])
      || !isset($json["Password"])
      ) {
        return $respuestas->error_400();
      }else{
        
        if($auth){
          $resp = $this->update($json);
          if ($this->affectedRows > 0) {
            return $respuestas->response = [
              "status" => "ok",
              "affected_rows" => $this->affectedRows,
              "affected_id" => $json["id"]
            ];
          }else{
            return $respuestas->error_401("Error al actulizar planta");
          }
        }else{
          return $respuestas->error_403();
        }

      }
    }
    
    public function delete_plantas($data){
      $session = new AuthController;
      $respuestas  = new RespuestasController();
      $json = json_decode($data, true);
      $auth = $session->verificar_user($json);

    if (
    !isset($json["id"]) 
    || !isset($json["Correo"])
    || !isset($json["Password"]) 
    ) {
      return $respuestas->error_400();
    }else{
      if($auth){
        $resp = $this->delete($json['id']);
        if ($this->affectedRows > 0) {
          return $respuestas->response = [
            "status" => "ok",
            "affected_rows" => $this->affectedRows,
            "affected_id" => $json["id"]
          ];
        }else{
          return $respuestas->error_401("Error al eliminar planta");
        }
      }else{
        return $respuestas->error_403();
      }
    }
  }

  /*Funciones extras*/
  public function data($id){
    $respuestas  = new RespuestasController();
    /*El parametro id traera el total de cada planta que hay en el cac selecionado por el id*/
    $get = $this->get_data($id);
    if (empty($get)){
      return $respuestas->error_406();
    }else{
      return $get;
    }
  }
  
  public function data_planta($id){
    /*Obtiene las plantas totales de cada Cac*/
    $respuestas  = new RespuestasController();
    $get = $this->get_planta_cac($id);
    if (empty($get)){
      return $respuestas->error_406();
    }else{
      return $get;
    }
    
  }
}