<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<div>
    <div id="servMc">
        <h2>Statut du serveur</h2>
        <?php
        $data = json_decode(file_get_contents("https://panel.omgserv.com/json/349492/status"));
        $status = $data->status->online ? "En ligne" : "Hors ligne";
        $cpu = $data->status->online ? $data->status->cpu : "N/C";
        $ram = $data->status->online ? round($data->status->ram / 1024) : "N/C";
        $players = $data->status->online ? $data->status->players->online." / ".$data->status->players->max : "N/C";
        ?>
        <ul>
            <li>Statut : <?= $status ?></li>
            <li>CPU : <?= $cpu ?>%</li>
            <li>RAM : <?= $ram ?>Mo</li>
            <li>Connectés : <?= $players ?></li>
        </ul>
    </div>
</div>




</body>
</html>