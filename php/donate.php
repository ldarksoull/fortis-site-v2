<?php
$url = 'https://fortis-rp.ru/donate';
$secret = ''; // код который должен совпадать с кодом на основном апи
$_POST["secret"] = $secret;
$postdata = json_encode($_POST);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postdata);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_exec($ch);

die("OK");
?>