<?php
session_start(); // Iniciar la sesión

// Configuración de la conexión a la base de datos
$servername = "localhost"; // Cambia si es necesario
$username = "root"; // Cambia por tu usuario de MySQL, por defecto en XAMPP es 'root'
$password = ""; // Cambia por tu contraseña de MySQL, por defecto en XAMPP es vacío
$dbname = "usuarios"; // Nombre de la base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$mensaje = ""; // Variable para almacenar mensajes

// Verificar si se enviaron datos por POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los valores del formulario
    $nombre = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm-password'];

    // Validar que las contraseñas coincidan
    if ($password !== $confirm_password) {
        $mensaje = "<div class='error'>Las contraseñas no coinciden.</div>";
    } else {
        // Verificar si el email ya está registrado
        $stmt = $conn->prepare("SELECT * FROM registro WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        // Si el email ya existe, mostrar un mensaje
        if ($result->num_rows > 0) {
            $mensaje = "<div class='error'>El correo electrónico ya está registrado.</div>";
        } else {
            // Antes de ejecutar la consulta, hashea la contraseña
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);

            // Insertar el nuevo registro
            $stmt = $conn->prepare("INSERT INTO registro (nombre, email, password) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $nombre, $email, $hashed_password);

            // Ejecutar la declaración
            if ($stmt->execute()) {
                $mensaje = "<div class='success'>Registro exitoso.</div>";
                // Guardar nombre en la sesión
                $_SESSION['user_name'] = $nombre;
            } else {
                $mensaje = "<div class='error'>Error: " . $stmt->error . "</div>";
            }

            // Cerrar la declaración
            $stmt->close();
        }
    }
}

// Cerrar la conexión
$conn->close();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro - CyberCraft</title>
    <style>
        body {
            background-image: url('https://guerreroilustradora.wordpress.com/wp-content/uploads/2020/07/paisaje_guerrero_ilustradora_madrid_espac3b1a_disec3b1o_illustrator_2.jpg?w=1024');
            background-size: cover;
            background-position: center;
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .message-container {
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            max-width: 400px;
            margin: 50px auto;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        }
        .success { color: green; }
        .error { color: red; }
    </style>
</head>
<body>
    <div class="message-container">
        <?php echo $mensaje; ?>
        <?php if (isset($_SESSION['user_name'])): ?>
            <a href="../index.html">Volver al inicio</a>
        <?php else: ?>
            <a href="../sesion.html">Iniciar sesión</a>
        <?php endif; ?>
    </div>
</body>
</html>
