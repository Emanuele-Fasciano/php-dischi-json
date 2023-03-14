<?php

// importo dal file json i dati
$data = file_get_contents(__DIR__ . "/../data/dischi.json");

// dico al browser che gli sto passando un file json
header("Content-Type: application/json");
echo $data;