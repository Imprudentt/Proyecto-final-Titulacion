<?php
include 'db.php';  // Incluir conexión

session_start(); // Iniciar sesión


echo "<h1>Carrito de Compras</h1>";
if (!empty($_SESSION['carrito'])) {
    echo "<ul>";
    foreach ($_SESSION['carrito'] as $item) {
        echo "<li>{$item['nombre']} - $ {$item['precio']}</li>";
    }
    echo "</ul>";

    $total = array_sum(array_column($_SESSION['carrito'], 'precio'));
    echo "<p>Total: $" . number_format($total, 0, ',', '.') . "</p>";
} else {
    echo "<p>El carrito está vacío.</p>";
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $producto = [
        'nombre' => $_POST['nombre'],
        'precio' => $_POST['precio']
    ];

    if (!isset($_SESSION['carrito'])) {
        $_SESSION['carrito'] = [];
    }

    $_SESSION['carrito'][] = $producto;

    // Devuelve la sesión actual como respuesta JSON para verificar
    echo json_encode([
        'status' => 'success',
        'message' => 'Producto añadido al carrito',
        'carrito' => $_SESSION['carrito']
    ]);
    exit();


    
}
?>