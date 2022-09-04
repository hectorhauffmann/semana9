<?php
include 'conexion.php';

$inquilino = $_POST["inquilino"];
$monto = $_POST["monto"];
$pago_multa = $_POST["pago_multa"];
$gastos_comunes = $_POST["gastos_comunes"];
$fecha_creacion = $_POST["fecha_creacion"];

$insertar = "INSERT INTO pagos(inquilino,monto,pago_multa,gastos_comunes,fecha_creacion)VALUES ('$inquilino',
$monto',$pago_multa',$gastos_comunes','$fecha_creacion')";

$resultado = mysqli_query($conexion,$insertar);
if (!$resultado){
echo 'Error al registrarse';
}
else{
echo 'telefono registrado exitosamente';
}
mysqli_close($conexion);
