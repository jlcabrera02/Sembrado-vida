<?php

class RespuestasController{

    public  $response = [
        'status' => "Error",
        "result" => array()
    ];

    public function error_401($msg = "Necesitas una autenticación"){
        $this->response['result'] = array(
            "error_id" => "401",
            "error_msg" => $msg
        );
        return $this->response;
    }

    public function error_403($msg = "No posees los permisos"){
        $this->response['result'] = array(
            "error_id" => "403",
            "error_msg" => $msg
        );
        return $this->response;
    }

    public function error_405(){
        $this->response['result'] = array(
            "error_id" => "405",
            "error_msg" => "Metodo no permitido"
        );
        return $this->response;
    }

    public function error_200($valor = "Datos incorrectos"){
        $this->response['status'] = "error";
        $this->response['result'] = array(
            "error_id" => "200",
            "error_msg" => $valor
        );
        return $this->response;
    }


    public function error_400(){
        $this->response['status'] = "error";
        $this->response['result'] = array(
            "error_id" => "400",
            "error_msg" => "Datos enviados incompletos o con formato incorrecto"
        );
        return $this->response;
    }


    public function error_500($valor = "Error interno del servidor"){
        $this->response['status'] = "error";
        $this->response['result'] = array(
            "error_id" => "500",
            "error_msg" => $valor
        );
        return $this->response;
    }

    public function error_406(){
        $this->response['result'] = array(
            "error_id" => "406",
            "error_msg" => "No se encontro resultados"
        );
        return $this->response;
    }
    
    public function errorCorreo(){
        $this->response['status'] = "error";
        $this->response['result'] = array(
            "error_id" => "200",
            "error_msg" => "Usuario o Contraseña incorrectas"
        );
        return $this->response;
    }

    public function sin_parametros(){
      $this->response['status'] = "warning";
      $this->response['result'] = [
        "warning_msg" => "La peticion necesita un parametro"
      ];
      
      return $this->response;
    }


}