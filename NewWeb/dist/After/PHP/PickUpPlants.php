<?php

	$name = $_POST['name'];
	
	$conn = pg_connect("host=192.168.1.108 port=5432 dbname=Sanhuanpao user=postgres password=cxj0401");//连接数据库		
	$result= pg_query ($conn,"SELECT name_id  FROM plants1 WHERE name = '$name'");
	$arr = pg_fetch_all($result);
    echo json_encode($arr);

 ?>