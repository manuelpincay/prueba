<?php
 header('Access-Control-Allow-Origin: *'); 
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

 $usuario = "root";
 $password = "";
 $servidor = "localhost";
 $basededatos ="prueba";

$conexion = mysqli_connect  ($servidor,$usuario,"") or die ("No se ha podido conectar con el servidor de Base de datos");
$db = mysqli_select_db($conexion, $basededatos) or die ("Upps! no se ha podido conectar a la Base de datos");
$jsonUsuario = json_decode(file_get_contents("php://input"));
$consulta = mysqli_query ($conexion, "SELECT * FROM datos WHERE correo = '$jsonUsuario->correo' AND contrasena = '$jsonUsuario->contrasena'");
if($user = mysqli_fetch_assoc($consulta)) {
    $response='inicio exitoso';
    echo json_encode($response);
  }
  else{
    $response='error de inicio';
    echo json_encode($response);
  }
  ?>
  