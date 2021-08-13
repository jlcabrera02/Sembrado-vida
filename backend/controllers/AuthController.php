<?php

class AuthController extends AuthModel {
  public function login($data){
    $respuesta = new RespuestasController;
    $json = json_decode($data, true);

    if (!isset($json['Correo']) || !isset($json['Password'])){
      return $respuesta->error_400();
    }else{
      $resp = $this->read($json);
      if(empty($resp)){
        return $respuesta->error_403('Usuario y contraseña incorrectas');
      }else{
        return $resp;
      }
    }
  }

  public function verificar_user($auth){
    $respuesta = new RespuestasController;
    $usuario = $this->get_user($auth);
    if (empty($usuario)){
      /*Retorna False si no coincide con un usuario*/
      return 0; 
    }else{ 
      /*Retorna True si encuentra un usuario*/
    return 1;
    }
  } 

}