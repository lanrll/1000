<?php
  include('../config.php');

  $id = $_GET['id'];

  $sql = "delete from product where Id=$id";

  $res = mysql_query($sql);

  if ($res) {
    echo json_encode(array(
      "code" => 200,
      "body" => array(
        "msg" => '删除成功'
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