<?php
 $conn = pg_connect("host=localhost port=5432 dbname=Sanhuanpao user=postgres password=lily520");//连接数据库

$result= pg_query ($conn,"SELECT baohujibie,name,name2,name_id FROM plants where baohujibie is not null");      //查询结果是RESOURCE
$arr = pg_fetch_all($result);   //提取为数组




//使用自定义排序
$flag=array();
foreach($arr as $arr2){
    $flag[]=$arr2["baohujibie"];
    }
array_multisort($flag, SORT_ASC, $arr);

   



$ChangDu = count($arr);  //统计数组的长度
$CD = array($ChangDu);


$Kresult = array_merge((array)$CD,(array)$arr);

echo json_encode($Kresult);


?>