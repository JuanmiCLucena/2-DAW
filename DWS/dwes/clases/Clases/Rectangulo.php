<?php
namespace DWES;

class Rectangulo {
	public $ancho;
	public $alto;
	public $area;

public function __construct()
    {
        $this->alto = 4;
        $this->ancho = 5;
	$this->area = 0;

    }

public function areaRectangulo()
	{
	$this->area = $this->alto * $this->ancho;
	return $this->area;
	}

}
?>
