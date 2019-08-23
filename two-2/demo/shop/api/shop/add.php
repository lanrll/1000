<?php
  include('../config.php');

  $name = $_GET['name'];
  $price = $_GET['price'];
  $num = $_GET['num'];

  $sql = "insert into product (productname,number,unitprice) values ('$name',$num,$price)";

  // echo $sql;

  $res = mysql_query($sql);
  // $res = false;
  if ($res) {
    echo json_encode(array(
      "code" => 200,
      "body" => array(
        "msg" => '新增商品成功'
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