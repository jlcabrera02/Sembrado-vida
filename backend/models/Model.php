<?php
abstract class Model 
{
  private static $server = "localhost";
  private static $user = "root";
  private static $password = "";
  private static $db = "nucleo";
  private static $db_charset = "UTF-8";
  private $connect;
  protected $rows = array();
  protected $query;
  protected $affectedRows;
  protected $insertId;

  abstract protected function create();
  abstract protected function read();
  abstract protected function update();

  private function open_db(){
    $this->connect = new mysqli(
      self::$server,
      self::$user,
      self::$password,
      self::$db
    );

    $this->connect->set_charset(self::$db_charset);
  }

  private function close_db(){
    $this->connect->close();
  }

  protected function set_query(){
    $this->open_db();
    $this->connect->query($this->query);
    $this->affectedRows = $this->connect->affected_rows;
    $this->insertId = $this->connect->insert_id;
    $this->close_db();
  }

  protected function get_query(){
    $this->open_db();
    $result = $this->connect->query($this->query);
    while ($this->rows[] = $result->fetch_assoc());
    $result->close();
    $this->close_db();

    return array_pop($this->rows);
  }
}