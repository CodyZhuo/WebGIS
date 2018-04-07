$.get("../../After/PHP/RandomPlants.php",function(data,status){
     myArr = JSON.parse(data);   

     alert(typeof(myArr));     
    
    //Plant_1
     document.getElementById("Plant_1").innerHTML = myArr[0].name;
     document.getElementById("Plant_2").innerHTML = myArr[1].name;
     document.getElementById("Plant_3").innerHTML = myArr[2].name; 
     document.getElementById("Plant_4").innerHTML = myArr[3].name;
     document.getElementById("Plant_5").innerHTML = myArr[4].name;
     document.getElementById("Plant_6").innerHTML = myArr[5].name;
     document.getElementById("Plant_7").innerHTML = myArr[6].name;
     document.getElementById("Plant_8").innerHTML = myArr[7].name;
     document.getElementById("Plant_9").innerHTML = myArr[8].name;
     document.getElementById("Plant_10").innerHTML = myArr[9].name;

     document.getElementById("Plant_11").innerHTML = myArr[10].name;
     document.getElementById("Plant_12").innerHTML = myArr[11].name;
     document.getElementById("Plant_13").innerHTML = myArr[12].name;
     document.getElementById("Plant_14").innerHTML = myArr[13].name;
     document.getElementById("Plant_15").innerHTML = myArr[14].name;
     document.getElementById("Plant_16").innerHTML = myArr[15].name;
     document.getElementById("Plant_17").innerHTML = myArr[16].name;
     document.getElementById("Plant_18").innerHTML = myArr[17].name;
     document.getElementById("Plant_19").innerHTML = myArr[18].name;
     document.getElementById("Plant_20").innerHTML = myArr[19].name;

     document.getElementById("Plant_21").innerHTML = myArr[20].name;
     document.getElementById("Plant_22").innerHTML = myArr[21].name;
     document.getElementById("Plant_23").innerHTML = myArr[22].name;
     document.getElementById("Plant_24").innerHTML = myArr[23].name;
     document.getElementById("Plant_25").innerHTML = myArr[24].name;
     document.getElementById("Plant_26").innerHTML = myArr[25].name;
     document.getElementById("Plant_27").innerHTML = myArr[26].name;
     document.getElementById("Plant_28").innerHTML = myArr[27].name;
     document.getElementById("Plant_29").innerHTML = myArr[28].name;
     document.getElementById("Plant_30").innerHTML = myArr[29].name;

     document.getElementById("Plant_31").innerHTML = myArr[30].name;
     document.getElementById("Plant_32").innerHTML = myArr[31].name;
     document.getElementById("Plant_33").innerHTML = myArr[32].name;
     document.getElementById("Plant_34").innerHTML = myArr[33].name;
     document.getElementById("Plant_35").innerHTML = myArr[34].name;
     document.getElementById("Plant_36").innerHTML = myArr[35].name;
     document.getElementById("Plant_37").innerHTML = myArr[36].name;
     document.getElementById("Plant_38").innerHTML = myArr[37].name;
     document.getElementById("Plant_39").innerHTML = myArr[38].name;
     document.getElementById("Plant_40").innerHTML = myArr[39].name;

     document.getElementById("Plant_41").innerHTML = myArr[40].name;
     document.getElementById("Plant_42").innerHTML = myArr[41].name;
     document.getElementById("Plant_43").innerHTML = myArr[42].name;
     document.getElementById("Plant_44").innerHTML = myArr[43].name;
     document.getElementById("Plant_45").innerHTML = myArr[44].name;
     document.getElementById("Plant_46").innerHTML = myArr[45].name;
     document.getElementById("Plant_47").innerHTML = myArr[46].name;
     document.getElementById("Plant_48").innerHTML = myArr[47].name;




   	//Plant Picture
     var elm1 = document.getElementById('PP1');
     var elm2 = document.getElementById('PP2');
     var elm3 = document.getElementById('PP3'); 
     var elm4 = document.getElementById('PP4'); 
     var elm5 = document.getElementById('PP5'); 
     var elm6 = document.getElementById('PP6'); 
     var elm7 = document.getElementById('PP7'); 
     var elm8 = document.getElementById('PP8'); 
     var elm9 = document.getElementById('PP9'); 
     var elm10 = document.getElementById('PP10'); 

     var elm11 = document.getElementById('PP11');
     var elm12 = document.getElementById('PP12');
     var elm13 = document.getElementById('PP13'); 
     var elm14 = document.getElementById('PP14'); 
     var elm15 = document.getElementById('PP15'); 
     var elm16 = document.getElementById('PP16'); 
     var elm17 = document.getElementById('PP17'); 
     var elm18 = document.getElementById('PP18'); 
     var elm19 = document.getElementById('PP19'); 
     var elm20 = document.getElementById('PP20'); 

     var elm21 = document.getElementById('PP21');
     var elm22 = document.getElementById('PP22');
     var elm23 = document.getElementById('PP23'); 
     var elm24 = document.getElementById('PP24'); 
     var elm25 = document.getElementById('PP25'); 
     var elm26 = document.getElementById('PP26'); 
     var elm27 = document.getElementById('PP27'); 
     var elm28 = document.getElementById('PP28'); 
     var elm29 = document.getElementById('PP29'); 
     var elm30 = document.getElementById('PP30'); 

     var elm31 = document.getElementById('PP31');
     var elm32 = document.getElementById('PP32');
     var elm33 = document.getElementById('PP33'); 
     var elm34 = document.getElementById('PP34'); 
     var elm35 = document.getElementById('PP35'); 
     var elm36 = document.getElementById('PP36'); 
     var elm37 = document.getElementById('PP37'); 
     var elm38 = document.getElementById('PP38'); 
     var elm39 = document.getElementById('PP39'); 
     var elm40 = document.getElementById('PP40'); 

     var elm41 = document.getElementById('PP41');
     var elm42 = document.getElementById('PP42');
     var elm43 = document.getElementById('PP43'); 
     var elm44 = document.getElementById('PP44'); 
     var elm45 = document.getElementById('PP45'); 
     var elm46 = document.getElementById('PP46'); 
     var elm47 = document.getElementById('PP47'); 
     var elm48 = document.getElementById('PP48'); 

   




     elm1.style.background = "url("+myArr[0].picture.split(",")[0]+")";  //引号括起来的地方都当作是字符串
     elm2.style.background = "url("+myArr[1].picture.split(",")[0]+")";         
     elm3.style.background = "url("+myArr[2].picture.split(",")[0]+")"; 
     elm4.style.background = "url("+myArr[3].picture.split(",")[0]+")"; 
     elm5.style.background = "url("+myArr[4].picture.split(",")[0]+")"; 
     elm6.style.background = "url("+myArr[5].picture.split(",")[0]+")"; 
     elm7.style.background = "url("+myArr[6].picture.split(",")[0]+")"; 
     elm8.style.background = "url("+myArr[7].picture.split(",")[0]+")"; 
     elm9.style.background = "url("+myArr[8].picture.split(",")[0]+")"; 
     elm10.style.background = "url("+myArr[9].picture.split(",")[0]+")"; 

     elm11.style.background = "url("+myArr[10].picture.split(",")[0]+")";  //引号括起来的地方都当作是字符串
     elm12.style.background = "url("+myArr[11].picture.split(",")[0]+")"; 
     elm13.style.background = "url("+myArr[12].picture.split(",")[0]+")"; 
     elm14.style.background = "url("+myArr[13].picture.split(",")[0]+")"; 
     elm15.style.background = "url("+myArr[14].picture.split(",")[0]+")"; 
     elm16.style.background = "url("+myArr[15].picture.split(",")[0]+")"; 
     elm17.style.background = "url("+myArr[16].picture.split(",")[0]+")"; 
     elm18.style.background = "url("+myArr[17].picture.split(",")[0]+")"; 
     elm19.style.background = "url("+myArr[18].picture.split(",")[0]+")"; 
     elm20.style.background = "url("+myArr[19].picture.split(",")[0]+")"; 

     elm21.style.background = "url("+myArr[20].picture.split(",")[0]+")";  //引号括起来的地方都当作是字符串
     elm22.style.background = "url("+myArr[21].picture.split(",")[0]+")"; 
     elm23.style.background = "url("+myArr[22].picture.split(",")[0]+")"; 
     elm24.style.background = "url("+myArr[23].picture.split(",")[0]+")"; 
     elm25.style.background = "url("+myArr[24].picture.split(",")[0]+")"; 
     elm26.style.background = "url("+myArr[25].picture.split(",")[0]+")"; 
     elm27.style.background = "url("+myArr[26].picture.split(",")[0]+")"; 
     elm28.style.background = "url("+myArr[27].picture.split(",")[0]+")"; 
     elm29.style.background = "url("+myArr[28].picture.split(",")[0]+")"; 
     elm30.style.background = "url("+myArr[29].picture.split(",")[0]+")"; 

     elm31.style.background = "url("+myArr[30].picture.split(",")[0]+")";  //引号括起来的地方都当作是字符串
     elm32.style.background = "url("+myArr[31].picture.split(",")[0]+")"; 
     elm33.style.background = "url("+myArr[32].picture.split(",")[0]+")"; 
     elm34.style.background = "url("+myArr[33].picture.split(",")[0]+")"; 
     elm35.style.background = "url("+myArr[34].picture.split(",")[0]+")"; 
     elm36.style.background = "url("+myArr[35].picture.split(",")[0]+")"; 
     elm37.style.background = "url("+myArr[36].picture.split(",")[0]+")"; 
     elm38.style.background = "url("+myArr[37].picture.split(",")[0]+")"; 
     elm39.style.background = "url("+myArr[38].picture.split(",")[0]+")"; 
     elm40.style.background = "url("+myArr[39].picture.split(",")[0]+")"; 

     elm41.style.background = "url("+myArr[40].picture.split(",")[0]+")";  //引号括起来的地方都当作是字符串
     elm42.style.background = "url("+myArr[41].picture.split(",")[0]+")"; 
     elm43.style.background = "url("+myArr[42].picture.split(",")[0]+")"; 
     elm44.style.background = "url("+myArr[43].picture.split(",")[0]+")"; 
     elm45.style.background = "url("+myArr[44].picture.split(",")[0]+")"; 
     elm46.style.background = "url("+myArr[45].picture.split(",")[0]+")"; 
     elm47.style.background = "url("+myArr[46].picture.split(",")[0]+")"; 
     elm48.style.background = "url("+myArr[47].picture.split(",")[0]+")"; 



     elm1.style.backgroundSize = "100% 100%";
     elm2.style.backgroundSize = "100% 100%";
     elm3.style.backgroundSize = "100% 100%";
     elm4.style.backgroundSize = "100% 100%";
     elm5.style.backgroundSize = "100% 100%";
     elm6.style.backgroundSize = "100% 100%";
     elm7.style.backgroundSize = "100% 100%";
     elm8.style.backgroundSize = "100% 100%";
     elm9.style.backgroundSize = "100% 100%";
     elm10.style.backgroundSize = "100% 100%";

     elm11.style.backgroundSize = "100% 100%";
     elm12.style.backgroundSize = "100% 100%";
     elm13.style.backgroundSize = "100% 100%";
     elm14.style.backgroundSize = "100% 100%";
     elm15.style.backgroundSize = "100% 100%";
     elm16.style.backgroundSize = "100% 100%";
     elm17.style.backgroundSize = "100% 100%";
     elm18.style.backgroundSize = "100% 100%";
     elm19.style.backgroundSize = "100% 100%";
     elm20.style.backgroundSize = "100% 100%";

     elm21.style.backgroundSize = "100% 100%";
     elm22.style.backgroundSize = "100% 100%";
     elm23.style.backgroundSize = "100% 100%";
     elm24.style.backgroundSize = "100% 100%";
     elm25.style.backgroundSize = "100% 100%";
     elm26.style.backgroundSize = "100% 100%";
     elm27.style.backgroundSize = "100% 100%";
     elm28.style.backgroundSize = "100% 100%";
     elm29.style.backgroundSize = "100% 100%";
     elm30.style.backgroundSize = "100% 100%";

     elm31.style.backgroundSize = "100% 100%";
     elm32.style.backgroundSize = "100% 100%";
     elm33.style.backgroundSize = "100% 100%";
     elm34.style.backgroundSize = "100% 100%";
     elm35.style.backgroundSize = "100% 100%";
     elm36.style.backgroundSize = "100% 100%";
     elm37.style.backgroundSize = "100% 100%";
     elm38.style.backgroundSize = "100% 100%";
     elm39.style.backgroundSize = "100% 100%";
     elm40.style.backgroundSize = "100% 100%";

     elm41.style.backgroundSize = "100% 100%";
     elm42.style.backgroundSize = "100% 100%";
     elm43.style.backgroundSize = "100% 100%";
     elm44.style.backgroundSize = "100% 100%";
     elm45.style.backgroundSize = "100% 100%";
     elm46.style.backgroundSize = "100% 100%";
     elm47.style.backgroundSize = "100% 100%";
     elm48.style.backgroundSize = "100% 100%";


    
  });
	