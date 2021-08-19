<?php

class VIveroModel extends Model{
  protected function create(){
    /*pendiente...*/
  }

  protected function update(){
    /*pendiente...*/
  }
  
  protected function delete() {  
    /*pendiente...*/
  }

  protected function read(){
    $this->query = "SELECT * FROM viveros";
    $this->get_query();
    
    $array = [];
    
    foreach ($this->rows as $key => $value) {
      array_push($array, $value);
    }
    
    return $array;
  }
}