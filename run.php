<?php

$ch = curl_init('https://coderbyte.com/api/challenges/json/age-counting');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);
$data = curl_exec($ch);
curl_close($ch);

$data = json_decode($data, true);

$output = $data["data"];
$output = explode(", ", $output);
$count = 0;

for($i = 0; $i < count($output); $i++) {
    $element = $output[$i];
    if($element[0] === "a") {
        $furtherSplit = explode("=", $element);
        $age = (int)$furtherSplit[1];
        if($age >= 50) {
            $count++;
        }
    }
}
return $count;

?>
