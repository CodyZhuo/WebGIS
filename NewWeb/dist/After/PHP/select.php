<?php
$conn = pg_connect("host=localhost  port=5432 dbname=Test user=postgres password=password");
$result = pg_query ($conn,"SELECT adress  FROM hope66 WHERE name_id = '1'");
$Shuchu = pg_fetch_all ($result);
echo json_encode($Shuchu);
?>
