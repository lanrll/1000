<?php
  include('../config.php');
  $username = $_GET['username'];
  $password = $_GET['password'];
  $sql = "insert into user (username,password) values ('$username','$password')";
  $res = mysql_query($sql);
  if($res){
    echo json_encode(array(
      "code" => 200,
      "body" => array(
        "msg" => "注册成功"
      )
    ));
  }else{
    echo json_encode(array(
      "code" => 201,
      "body" => array(
        "msg" => "注册失败"
      )
      ));
  }
?>