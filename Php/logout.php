<?php
session_start();
session_destroy(); // Destruir todas las variables de sesión
header('Location: ../index.html'); // Redirigir al inicio después de cerrar sesión
exit();
?>
