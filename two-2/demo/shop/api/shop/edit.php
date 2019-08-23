<?php
  include('../config.php');

  $id = $_GET['id'];
  $name = $_GET['name'];
  $num = $_GET['num'];
  $price = $_GET['price'];

  $sql = "update product set productname='$name',number=$num,unitprice=$price where Id=$id";

  $res = mysql_query($sql);

  if ($res) {
    echo json_encode(array(
      "code" => 200,
      "body" => array(
        "msg" => '更新成功'
      )
    ));
  } else {
    echo json_encode(array(
      "code" => 201,
      "body" => array(
        "msg" => '网络错误，请重试'
      )
    ));
  }

  
?>