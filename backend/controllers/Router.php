<?php

class Router {
  
  public function getParam(){
    $url = explode('/', $_SERVER['REQUEST_URI']);

    $param = empty($url[4]) ? NULL : $url[4];

    return $param;
  }

}