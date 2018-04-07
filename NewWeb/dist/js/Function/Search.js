$("#Search").click(function(){



    var Text =document.getElementById("InputText");
    var Key = Text.value;
    //alert(Key);
  
    $.ajax({
      type:'POST',  //POST,GET必须大写
      url:"../../After/PHP/Search.php",
     
      data:{name:Key},
      dataType:'json',   //如果以json形式传输加上声明，否则容易出现问题
      success: function(data){     
            
      	if (data==0) {
      		alert("没有找到相应的植物信息");
      	}
      	else
      		{index = data[0].name_id;   
      			var url = "Plant Info.html?index="+index;
      			window.open(url);
      		} 

    }
  }) 








  });