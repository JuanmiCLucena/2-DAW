<?php
// ejemplo4formulario.php
$bd = new PDO('mysql:host=localhost;dbname=dwes;charset=utf8', 'dwes', 'usuario');
?>
<html>

<head>
    <meta charset="utf8" />
    <script src="ejercicio6.7.js"></script>
</head>

<body>

    <form>
<label for="selProducto">Seleccione un producto:</label>
        <select name="selProducto" onchange="mostrarProducto(this.value)">
            <option value="">Seleccione...</option>
<?php
$resultado = $bd->query('SELECT cod, nombre_corto FROM producto ORDER BY nombre_corto ASC');
while ($producto = $resultado->fetch()) {
    echo '<option value="' . $producto['cod'] . '">' . $producto['nombre_corto'] . '</option>';
}
?>
        </select>
    </form>
    <div id="ficha" style="display: none;">
    <h2><span id="spnNombre"></span></h2>
    <p><strong>Código</strong>: <span id="spnCodigo"></span></p>
    <p><strong>PVP</strong>: <span id="spnPVP"></span></p>
    <p><strong>Familia</strong>: <span id="spnFamilia"></span></p>
    <p><strong>Descripción</strong>:</p>
    <p id="pDescripcion"></p>
    </div>

</body>

</html>