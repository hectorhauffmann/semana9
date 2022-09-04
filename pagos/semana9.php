<?php
$host= "127.0.0.1";//La ip de nuestra maquina principal
$usuario="root";//usuario que configuramos MySQL Workbench
$clave="123123123";//contrasena que configuramos MySQL Workbench
$bd="semana9";//Nombre de Base de datos

$conexion= mysqli_connect($host,$usuario,$clave,$bd);
?>