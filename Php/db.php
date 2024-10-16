<?php
$host = "localhost";  // Servidor de la base de datos
$user = "root";        // Usuario de MySQL (por defecto es "root")
$password = "";        // Contraseña (en XAMPP por defecto es vacía)
$dbname = "armatu_pc"; // Nombre de tu base de datos

// Crear la conexión
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
