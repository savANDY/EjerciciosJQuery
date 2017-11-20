<?php

  require_once "ARIK13conexion.php";

  public function __construct(){
    $this -> $link = Conectar::conexion();
    $this -> usuario = array();
  }

  public function get_ikasleak(){
    $sql = "SELECT * FROM ikaslea";
    $consulta = $this -> link -> query($sql);

    while ($row = mysqli_fech_array($consulta, MYSQL_ASSOC)){

    }
  }

?>
