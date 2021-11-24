<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Formulario</title>
    </head>
    <body>
    <?php
if (isset($_POST['enviar']) && $_POST['numeroA'] != "" && $_POST['numeroB'] != "" && !empty($_POST['operacion'])) {
    $numeroA = $_POST['numeroA'];
    $numeroB = $_POST['numeroB'];
    $operacion = $_POST['operacion'];
    if ($operacion == "suma") {
        echo '<p>' . $numeroA . " + " . $numeroB . " = " . ($numeroA + $numeroB) . "</p>";
    } elseif ($operacion == "resta") {
        echo '<p>' . $numeroA . " - " . $numeroB . " = " . ($numeroA - $numeroB) . "</p>";
    }
} else {
    ?>
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            <label for="numeroA">Numero A:</label><br />
            <input type="text" name="numeroA" value="<?php if (isset($_POST['numeroA'])) {
        echo $_POST['numeroA'];
    }
    ?>" />
<?php
if (isset($_POST['enviar']) && $_POST['numeroA'] == "") {
        echo " <span class='error'>Debe introducir un valor</span>";
    }
    ?>
            <br />
            <label for="numeroB">Numero B:</label><br />
            <input type="text" name="numeroB" value="<?php if (isset($_POST['numeroB'])) {
        echo $_POST['numeroB'];
    }
    ?>" />
<?php
if (isset($_POST['enviar']) && $_POST['numeroB'] == "") {
        echo " <span class='error'>Debe introducir un valor</span>";
    }
    ?><br />
            <label for="operacion">Operación:</label>
            <select name="operacion">
                <option value=""></option>
                <option value="suma" <?php if (isset($_POST['operacion']) && $_POST['operacion'] == "suma") {
        echo "selected";
    }
    ?> >Suma</option>
                <option value="resta" <?php if (isset($_POST['operacion']) && $_POST['operacion'] == "resta") {
        echo "selected";
    }
    ?> >Resta</option>
            </select><?php
if (isset($_POST['enviar']) && empty($_POST['operacion'])) {
        echo " <span class='error'>Debe seleccionar una operación</span>";
    }
    ?><br />
            <input type="submit" value="Enviar" name="enviar"/>
        </form>
    <?php }?>
    </body>
</html>