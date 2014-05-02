<?php
	header('Access-Control-Allow-Origin: *');
	
	$base = $_POST['base'];
	$altura = $_POST['altura'];
	
	$area=($base*$altura)/2;
	
	echo "La base del triángulo es de <b>$base</b> y la altura es de <b>$altura</b>, por lo que el área es de <b>$area</b>.";
?>
