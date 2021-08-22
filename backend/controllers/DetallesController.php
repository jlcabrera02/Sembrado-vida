<?php

class DetallesController extends DetallesModel {
  
  public function get_det ($data) {
    $respuestas  = new RespuestasController();
    /*El parametro id hace referencia al CAC al que queremos consultar*/
      $get = $this->read($data);
      if (empty($get)){
        return $respuestas->error_406();
      }else{
        return $get;
      }
  } 

  public function post_det ($data) {
    $session = new AuthController;
    $respuestas  = new RespuestasController();
    $json = json_decode($data, true);
    $auth = $session->verificar_user($json);
    
    
    if (
      !isset($json["id_arbol"])
      || !isset($json["Planta_sembrada"])
      || !isset($json["Fecha_siembra"])
      || !isset($json["Correo"])
      || !isset($json["Password"])
      || !isset($json["Vivero"])
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
  
  public function put_det ($data) {
    $session = new AuthController;
    $respuestas  = new RespuestasController();
    $json = json_decode($data, true);
    $cantidad = $this->get_cantidad($json['id']);
    $auth = $session->verificar_user($json);
    $todo = array_merge($json, ["Cantidad" => $cantidad]);

    if (
      !isset($json["id"])
      || !isset($json["Correo"])
      || !isset($json["Password"])
      || !isset($json["Update"])
      ) {
        return $respuestas->error_400();
      }else{
        
        if($auth){
          $resp = $this->update($todo);
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
    
    public function delete_det($data){
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
}