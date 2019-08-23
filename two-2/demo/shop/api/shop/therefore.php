<?php
  include('../config.php');
  $sql = 'select * from product';
  $res = mysql_query($sql);
  $list = array();

  while ($row = mysql_fetch_assoc($res)) {
    array_push($list, $row);
  }

  if($res){
    echo json_encode(array(
      "code" => 200,
      "body" => array(
        "list" => $list
      )
    ));
  };
?>