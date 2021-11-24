<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Formulario POST</title>
</head>
<body>
<form name="input" action="procesa.php" method="post">
    <p>Número 1: <input type="number" name="numero1" /><br/></p>
    <p>Número 2: <input type="number" name="numero2" /><br/></p>
    <select name="operacion" id="operacion">
        <option value="" selected></option>
        <option value="sumar">Sumar</option>
        <option value="restar">Restar</option>
    </select><br/>
    <input type="hidden" name="ip" value="<?php echo $_SERVER['REMOTE_ADDR'];?>" />
    <input type="submit" value="Enviar" name="enviar"/>
</form>

</body>
</html>