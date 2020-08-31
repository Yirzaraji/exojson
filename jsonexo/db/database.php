<?php

error_reporting(-1);
ini_set('display_errors', 'On');

function connectdb()
{

    define('DB_NAME', 'lfp');
    define('DB_USER', 'root');
    define('DB_PASSWORD', 'origins');
    define('DB_HOST', 'localhost');
    //define('DB_TABLE', 'dynamic_color');

    try {
        global $db;
        //echo 'connect db';
        $db = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8', DB_USER, DB_PASSWORD, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

    } catch (Exception $e) {
        // En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : ' . $e->getMessage());
    }

};
