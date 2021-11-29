<?php
// ejemplo4formulario.php
$bd = new PDO('mysql:host=localhost;dbname=dwes;charset=utf8', 'dwes', 'usuario');
?>
<html>

<head>
    <meta charset="utf8" />
    <script src="https://educacionadistancia.juntadeandalucia.es/centros/sevilla/pluginfile.php/1465397/mod_folder/content/0/ejercicio6.4/ejercicio6.4.js"></script>
</head>

<body>

    <form>
<label for="selPersonaje">Seleccione un usuario:</label>
        <select name="selPersonaje" onchange="mostrarPersonaje(this.value)">
            <option value="">Seleccione...</option>
<?php
$resultado = $bd->query('SELECT id, nombre FROM familyguy ORDER BY nombre ASC');
while ($personaje = $resultado->fetch()) {
    echo '<option value="' . $personaje['id'] . '">' . $personaje['nombre'] . '</option>';
}
?>
        </select>
    </form>
    <div id="ficha" style="display: none;">
    <h2><span id="spnNombre"></span> <span id="spnApellido"></span></h2>
    <p><strong>Profesión</strong>: <span id="spnTrabajo"></span></p>
    </div>

</body>

</html>