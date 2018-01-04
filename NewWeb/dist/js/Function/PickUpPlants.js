 $(".desc").click(function(){
 	// var hope = JSON.stringify(this.innerHTML);
 	
 	
 	$.ajax({
      type:'POST',  //POST,GET必须大写
      url:"../../After/PHP/PickUpPlants.php",
      // data:{name:this.innerHTML}  
      data:{name:this.innerHTML},
      dataType:'json',   //如果以json形式传输加上声明，否则容易出现问题
      success: function(data){      	
        alert(data);
        index = data[0].name_id;
        var url = "Plants.html?index="+index;
        window.open(url);
   





    						 }
  })  
});