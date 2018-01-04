<?php
$pram = $_POST['num'];
$conn = pg_connect("host=192.168.1.108 port=5432 dbname=Sanhuanpao user=postgres password=cxj0401");//连接数据库		
	$result= pg_query ($conn,"SELECT name,picture,shape,name2,phylum,class,mu,family,genus,huaguoqi FROM plants1 WHERE name_id = '$pram'");
	$arr = pg_fetch_all($result);

 	echo json_encode($arr);


?>