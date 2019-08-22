<?php
  $id = $_GET['id'];
  $cb = $_GET['cb'];
  $arr = array(
    "id" => $id,
    "name" => "lanr",
    "age" => "20",
    "sex" => "man"
  );
  $resp = json_encode($arr);
  echo "$cb($resp)";
?>  