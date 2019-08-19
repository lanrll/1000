<?php
  $config = array(
    "host" => "localhost",
    "user" => "root",
    "password" => "",
    "dbname" => "system"
  );
  mysql_connect($config['host'],$config['user'],$config['password']);
  mysql_select_db($config['dbname']);
  mysql_query("set charset 'utf8'");
  mysql_query("set character set 'utf8'");

  // $sql1 = "select * from db";
  // $res = mysql_query($sql);
  // $arr = array();
  // while ($row = mysql_fetch_assoc($res)) {
  //   array_push($arr, $row);
  // };
  // echo json_encode($arr);

  $username = $_POST['username'];
  $password = $_POST['password'];
  $age = $_POST['age'];
  $sql = "insert into db (username,password,age) values ('$username','$password','$age')";
  $isSicc = mysql_query($sql);
  echo '<meta charset="utf8">';
  if($isSicc){
    echo '<h1>ture</h1>';
    $sql = "select * from db";
    $res = mysql_query($sql);
    $arr = array();
    while ($row = mysql_fetch_assoc($res)) {
      array_push($arr, $row);
    };
    echo json_encode($arr);
  }else{
    echo '<h1>fals</h1>';
  }

  
?>