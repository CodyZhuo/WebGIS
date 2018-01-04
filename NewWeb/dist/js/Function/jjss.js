$.get("../After/PHP/selectp.php",function(data,status){
     myArr = JSON.parse(data);     
     alert(myArr[0].address);     
     document.getElementById("ANM_1").innerHTML = myArr[0].name + "<br>";
     var elm = document.getElementById('PicA');
      // elm.style.backgroundImage = "../images/Animal_and_Plant_Resources/129.jpg"
     elm.style.background = "url("+myArr[0].address+")";  //引号括起来的地方都当作是字符串
     // document.getElementById("PicA").innerHTML = "<background:url(../images/Animal_and_Plant_Resources/129.jpg)";
  });
	