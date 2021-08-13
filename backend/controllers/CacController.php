<?php
/* 
require "models/PlantasModel.php";
require "RespuestasController.php";
 */

class CacController extends CacModel {

  public function get_cac () {
    $respuestas  = new RespuestasController();
    return $this->read();
    if (empty($get)){
      return $respuestas->error_406();
    }else{
      return $get;
    }
  } 
   
  public function post_cac ($data) {
    $session = new AuthController;
    $respuestas  = new RespuestasController();
    $json = json_decode($data, true);
    $auth = $session->verificar_user($json);
    
    if (
      !isset($json["Cac"]) 
      || !isset($json["Ubicacion"]) 
      || !isset($json["Tipo"])
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
          return $respuestas->error_401("Error al insertar cac");
        }
      }else{
        return $respuestas->error_403();
      }
    }
  }
  
  public function put_cac ($data) {
    $session = new AuthController;
    $respuestas  = new RespuestasController();
    $json = json_decode($data, true);
    $auth = $session->verificar_user($json);

    if (
    !isset($json["id"])
    || !isset($json["Cac"])
    || !isset($json["Ubicacion"]) 
    || !isset($json["Tipo"])
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
          return $respuestas->error_401("Error al actualizar cac");
        }
      }else{
        return $respuestas->error_403();
      }
    }
  }
  
  public function delete_cac($data){
    $session = new AuthController;
    $respuestas  = new RespuestasController();
    $json = json_decode($data, true);
    $auth = $session->verificar_user($json);

    if (
    !isset($json['id']) 
    || !isset($json['Correo']) 
    || !isset($json['Password'])
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
          return $respuestas->error_401("Error al eliminar cac");
        }
      }else{
        return $respuestas->error_403();
      }
    }
  }







}