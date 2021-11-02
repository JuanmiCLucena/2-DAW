<?php
// TODO: Incluir el archivo de funciones
include 'funciones.php';
$productos = array();
if (isset($_POST['añadir']) && !empty($_POST['nombre']) && !empty($_POST['cantidad']) && !empty($_POST['precio'])) {
    $productos = array_merge($productos, recuperarProductos());
    $producto = array();
    $producto['nombre'] = $_POST['nombre'];
    $producto['cantidad'] =  $_POST['cantidad'];   
    $producto['precio'] = $_POST['precio'];
    calcularPrecioTotalProducto($producto);
    $productos[] = $producto;
 
} else {
    $productos = array_merge($productos, recuperarProductos());
}

if (isset($_POST['añadir']) && empty($_POST['nombre'])) {
    echo 'Debes introducir el nombre' . '<br/>';
} 

if (isset($_POST['añadir']) && empty($_POST['cantidad'])) {
    echo 'Debes introducir la cantidad' . '<br/>';
}
if (isset($_POST['añadir']) && empty($_POST['precio'])) {
    echo 'Debes introducir el precio' . '<br/>';
}

  
if (isset($_POST['borrar'])) {
    $productos = array_merge($productos, recuperarProductos());
    unset($productos[$_POST['producto']]);
}
?>
<html>
    <head>
        <title>Lista de la compra</title>
    </head>
    <body>
    
        
        <?php
        if (count($productos) > 0) {
        echo '<table border="1">';
        echo '<th>Nombre</th>';
        echo '<th>Cantidad</th>';
        echo '<th>Precio</th>';
        echo '<th>Total</th><br/>';
        //Añadimos cada producto al array.
        foreach ($productos as $producto) {
            echo '<tr>';
            echo '<td>' . $producto['nombre'] . '</td>';
            echo '<td>' . $producto['cantidad'] . '</td>';
            echo '<td>' . $producto['precio'] . '</td>';
            echo '<td>' . $producto['total'] . '</td>';
            echo '</tr>';
        }
        echo '</table>';
    }
        echo '<h2>Precio Total Compra</h2>';
        echo '<h3>' . calcularPrecioTotalCompra($productos) . '</h3>';    
    ?>

    
 
        <h2>Añadir producto</h2>
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method = "post">
            <p>Nombre: <input type="text" name="nombre" /><br/></p>
            <p>Cantidad: <input type="number" name="cantidad" /><br/></p>
            <p>Precio: <input type="number" name="precio" /><br/></p>
            <input type="submit" value="Añadir" name="añadir"/>
            <?php echo hiddenProductos($productos); ?>
        </form>
        <h2>Borrar producto</h2>
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method = "post">
        <select name="producto">
        <?php 
        //Recorremos el array productos mediante los índices y mostramos el nombre del elemento.
            foreach ($productos as $numero => $elemento) { ?>
                <option value="<?php echo $numero;?>">
                    <?php echo $elemento['nombre']; ?>
                </option>
           <?php } ?>
        
        </select>
        <input type="submit" value="borrar" name="borrar"/>
        <?php echo hiddenProductos($productos); ?>
        </form>
    </body>
</html>