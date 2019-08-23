<?php
  $config = array(
    "host" => "localhost",
    "user" => "root",
    "password" => "",
    "dbname" => "shop"
  );
  mysql_connect($config['host'], $config['user'], $config['password']);
  mysql_select_db($config['dbname']);
  mysql_query("set charset 'utf8'");
  mysql_query("set character 'utf8'");
?>