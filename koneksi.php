<?php

$hostname = "localhost";
$userDataBase = "root";
$passwordUser = "";
$dataBaseName = "kuliah_pemograman_web";

$koneksi = mysqli_connect($hostname,$userDataBase,$passwordUser,$dataBaseName) or die (mysqli_connect_error());

// Lakukan sesuatu setelah koneksi berhasil
// Misalnya:
// echo "Koneksi berhasil!";

?>
