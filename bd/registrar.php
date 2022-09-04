<?php
include 'conexion.php';

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$email = $_POST["email"];
$telefono = $_POST["telefono"];
$edificio_id = $_POST["edificio_id"];
$fecha_creacion = $_POST["fecha_creacion"];

$insertar = "INSERT INTO inquilinos(nombre,apellido,email,telefono,edificio_id,fecha_creacion)VALUES ('$nombre',
$apellido','$email','$telefono','$edificio_id','$fecha_creacion')";

$resultado = mysqli_query($conexion,$insertar);
if (!$resultado){
echo 'Error al registrarse';
}
else{
echo 'telefono registrado exitosamente';
}
mysqli_close($conexion);
