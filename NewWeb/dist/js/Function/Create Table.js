



 // 这里利用AJAX的GET方法获取植物总数以及各类信息
 
  $.get("../../After/PHP/Create Table.php",function(data,status){
    
    var myArr = JSON.parse(data); 
    
    var Max = myArr[0];
    //alert(Max);
    var Table =document.getElementById("Table")
    for (var i = 0; i <= Max-1; i++) {

        var Row = Table.insertRow(i);
        var Id=Row.insertCell(0);
        var Name=Row.insertCell(1);
        var Name2 = Row.insertCell(2);
        var Huaguoqi = Row.insertCell(3);
        var Yongtu = Row.insertCell(4);
        


        Id.innerHTML=myArr[i+1].name_id;
        Name.innerHTML=myArr[i+1].name;
        Name2.innerHTML=myArr[i+1].name2;
        Huaguoqi.innerHTML=myArr[i+1].huaguoqi;
        Yongtu.innerHTML=myArr[i+1].use;

        Row.style.cursor="pointer";


      



       




    }

      //把总数传给介绍
        var ZS =document.getElementById("ZongShu");
        ZS.innerHTML = Max;
  });


//得用AJAX的POST把点击的植物传给服务器，最后返回结果并打开新网页


    $("table").on("click","tr",function(e){     //这的tr是动态生成的，而table是tr的父元素，绑定的是tr这个元素。
        var arr = []
        $(this).children().map(function(el){     //这里的this已经是tr了 ,对绑定了的this(tr)执行map函数
            arr.push($(this)[0].innerText)   
        })
        //alert(arr);
        var Key = arr[0];

       



    $.ajax({
      type:'POST',  //POST,GET必须大写
      url:"../../After/PHP/Click Table.php",
     
      data:{name:Key},
      dataType:'json',   //如果以json形式传输加上声明，否则容易出现问题
      success: function(data){          
        //alert(data);
        index = data[0].name_id;   
        var url = "Plants.html?index="+index;
        window.open(url); }
  }) 






    })
  






 


 

      