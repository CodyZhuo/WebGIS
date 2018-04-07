<?php
// $arr=array();
// $count1=0;
// $count = 0;
// $return = array();
// while ($count < 10) 
//  {
//  $return[] = mt_rand(1, 10);
//  $return = array_flip(array_flip($return));
//  $count = count($return);
//  } 
// foreach($return as $value)
//  {
//  echo $value." ";
//  }
// echo "<br/>";
// $arr=array_values($return);// 获得数组的值 
// foreach($arr as $key)
// echo $key." ";



// --------------------------------------------------------------------------------------------------------------------------------
/** 
 * 生成不重复的随机数 
 * @param  int $start  需要生成的数字开始范围 
 * @param  int $end    结束范围 
 * @param  int $length 需要生成的随机数个数 
 * @return array       生成的随机数 
 */  
function get_rand_number($start=1,$end=10,$length=4){  
    $connt=0;  
    $temp=array();  
    while($connt<$length){  
        $temp[]=mt_rand($start,$end);  
        $data=array_unique($temp);  
        $connt=count($data);  
    }  
    sort($data);  
    return $data;  
}  
$conn = pg_connect("host=localhost port=5432 dbname=Sanhuanpao user=postgres password=lily520");//连接数据库
$hope = get_rand_number(1,300,48);
$Kresult = array();

 for ($i=0; $i < 48; $i++) { 
		
	$result= pg_query ($conn,"SELECT name,picture  FROM plants WHERE name_id = '$hope[$i]'");
	$arr = pg_fetch_all($result);//先提取为数组，再合并
	// $aarr = pg_fetch_all($rresult);
 	$Kresult = array_merge((array)$arr,(array)$Kresult);
	}


 // $Shuchu = pg_fetch_all($Kresult);
 echo json_encode($Kresult);
// print_r($Kresult)

?>