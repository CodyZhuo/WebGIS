   pram = window.location.href.split("=")[1];      
   alert(pram);    


   $.ajax({
      type:'POST',  //POST,GET必须大写
      url:"../../After/PHP/Plants.php",
      // data:{name:this.innerHTML}  
      data:{num:pram},
      dataType:'json',   //如果以json形式传输加上声明，否则容易出现问题
      success: function(data){  
      // myArr = JSON.parse(data);  
      alert(data);
       document.getElementById("P_Name").innerHTML = "&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;"+ data[0].name;     
       var elm1 = document.getElementById('Pic'); 
       elm1.src = data[0].picture;
       elm1.width = "500";
       
    

       document.getElementById("PlArt").innerHTML = "&#12288;&#12288;"+data[0].name+"，又名："+data[0].name2+"。"+data[0].phylum+"、"+data[0].class+"、"+data[0].mu+"、"+data[0].family+"、"+data[0].genus+"。"+data[0].shape+"花果期："+data[0].huaguoqi+"。"; 
       






  }
})  
