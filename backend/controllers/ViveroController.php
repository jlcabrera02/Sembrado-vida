<?php

class ViveroController extends ViveroModel {
  
  public function get_viv () {
    $respuestas  = new RespuestasController();
    $get = $this->read();
    if (empty($get)){
      return $respuestas->error_406();
    }else{
      return $get;
    }
  } 

  public function post_viv () {
    //pendiente
  }
  
  public function put_viv () {
    //pendiente
  }

  public function delete_viv(){
    //pendiente
  }
}