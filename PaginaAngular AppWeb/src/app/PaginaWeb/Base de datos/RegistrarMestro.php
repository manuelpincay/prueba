<?php
 header('Access-Control-Allow-Origin: *'); 
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

 $usuario = "root";
 $password = "";
 $servidor = "localhost";
 $basededatos ="prueba";

$conexion = mysqli_connect  ($servidor,$usuario,"") or die ("No se ha podido conectar con el servidor de Base de datos");
$db = mysqli_select_db($conexion, $basededatos) or die ("Upps! no se ha podido conectar a la Base de datos");
$jsonRegsitroMestro = json_decode(file_get_contents("php://input"));


$sql="INSERT INTO formtutor VALUES('$jsonRegsitroMestro->nombres','$jsonRegsitroMestro->apellidos','$jsonRegsitroMestro->asignatura','$jsonRegsitroMestro->email','$jsonRegsitroMestro->telf','$jsonRegsitroMestro->facul','$jsonRegsitroMestro->titulos')";
	
$ejecutar=mysqli_query($conexion, $sql);

if(!$ejecutar) {
    $response='error de registro';
    echo json_encode($response);
  }
  else{
    $response='registro exitoso';
    echo json_encode($response);
  }
  ?>