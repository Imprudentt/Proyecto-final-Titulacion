<?php
session_start(); // Iniciar la sesión

// Configuración de la conexión a la base de datos
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "usuarios"; 

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("<div class='error'>Conexión fallida: " . $conn->connect_error . "</div>");
}

$mensaje = "";
$enlace = "";
$textoEnlace = "";

// Verificar si se enviaron datos por POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Preparar la consulta SQL
    $stmt = $conn->prepare("SELECT * FROM registro WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            $_SESSION['user_name'] = $row['nombre']; // Guardar nombre en la sesión
            $mensaje = "<div class='success'>Inicio de sesión exitoso. Bienvenido, " . $row['nombre'] . "!</div>";
            $enlace = "../index.html";
            $textoEnlace = "Volver al inicio";
        } else {
            $mensaje = "<div class='error'>Contraseña incorrecta.</div>";
            $enlace = "../sesion.html";
            $textoEnlace = "Intentar nuevamente";
        }
    } else {
        $mensaje = "<div class='error'>No se encontró una cuenta con ese correo.</div>";
        $enlace = "../registro.html";
        $textoEnlace = "Crear una cuenta";
    }

    $stmt->close();
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio de Sesión - CyberCraft</title>
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
            margin: 0 auto;
            margin-top: 50px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

            /* Animación inicial */
            transform: translateY(-100%);
            opacity: 0;
            transition: transform 1s ease, opacity 1s ease;
        }

        .message-container div {
            font-size: 24px;
            margin-bottom: 10px;
        }

        .message-container a {
            font-size: 18px;
            color: #00bfff;
            text-decoration: none;
        }

        .message-container a:hover {
            text-decoration: underline;
        }

        .user-info {
            color: white;
            font-size: 20px;
            position: absolute;
            top: 20px;
            right: 20px;
        }
    </style>
</head>
<body>
    <div class="message-container" id="messageContainer">
        <?php echo $mensaje; ?>
        <a href="<?php echo $enlace; ?>"><?php echo $textoEnlace; ?></a>
    </div>

    <div class="user-info" id="userInfo"></div>

    <script>
        window.addEventListener('load', () => {
            const messageContainer = document.getElementById('messageContainer');
            messageContainer.style.transform = 'translateY(0)';
            messageContainer.style.opacity = '1';

            // Obtener el nombre del usuario desde PHP usando fetch
            fetch('../get_user.php')
                .then(response => response.json())
                .then(data => {
                    const userInfo = document.getElementById('userInfo');
                    if (data.user_name) {
                        userInfo.textContent = 'Hola, ' + data.user_name;
                    } else {
                        userInfo.textContent = 'Iniciar sesión';
                    }
                })
                .catch(error => console.error('Error:', error));
        });
    </script>
</body>
</html>
