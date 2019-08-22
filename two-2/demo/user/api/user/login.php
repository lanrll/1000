<?php
  include('../config.php');
  $username = $_GET['username'];
  $password = $_GET['password'];
  $sql = "select * from db where username='$username' and password='$password'";
  $res = mysql_query($sql);
  $num = mysql_num_rows($res);
  // echo $sql;
  // echo $res;
  // echo $num;
  if($num > 0){
    echo json_encode(array(
      "code" => 200,
      "body" => array(
        "msg" => "登录成功"
      )
    ));
  }else{
    echo json_encode(array(
      "code" => 201,
      "body" => array(
        "msg" => "用户名或密码错误"
      )
    ));
  }
?>