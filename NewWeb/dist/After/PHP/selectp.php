<?php
$conn = pg_connect("host=localhost port=5432 dbname=Test user=postgres password=password");
$result = pg_query ($conn,"SELECT name,address  FROM hope666 WHERE name = '1'");
$Shuchu = pg_fetch_all ($result);
echo json_encode($Shuchu);
?>
