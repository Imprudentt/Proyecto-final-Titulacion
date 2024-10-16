
<?php

include('coneccion.php');
$con = connection();

$sql = "SELECT * FROM producto";
$query = mysqli_query($con, $sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arma tu PC</title>
    <link rel="stylesheet" href="../ccs/styles.css">
</head>
<body>
    <header>
        <h1>Arma tu PC</h1>
        <nav>
            <ul>
                <li><a href="#">Procesadores</a></li>
                <li><a href="#">Tarjetas Madre</a></li>
                <li><a href="#">RAM</a></li>
                <li><a href="#">Almacenamiento</a></li>
            </ul>
        </nav>
    </header>

    <section class="products">
        <?php
        $conn = new mysqli("localhost", "root", "", "armatu_pc");

        if ($conn->connect_error) {
            die("Conexión fallida: " . $conn->connect_error);
        }

        $sql = "SELECT * FROM componentes";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "
                <div class='product-card'>
                    <h2>{$row['nombre']}</h2>
                    <p>Categoría: {$row['categoria']}</p>
                    <p>Precio: $ {$row['precio']}</p>
                    <form method='POST' action='carrito.php'>
                        <input type='hidden' name='id' value='{$row['id']}'>
                        <button type='submit'>Añadir</button>
                    </form>
                </div>";
            }
        } else {
            echo "<p>No hay productos disponibles.</p>";
        }

        $conn->close();
        ?>
    </section>

    <footer>
        <p>CyberCraft &copy; 2024</p>
    </footer>
</body>
</html>
