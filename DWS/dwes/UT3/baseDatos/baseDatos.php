<?php
    
    $version = $bd->getAttribute(PDO::ATTR_SERVER_VERSION);
    echo "Versión: $version";
?>