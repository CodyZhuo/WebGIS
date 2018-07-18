var myMap;
var MyGraphic;
require(["dojo/parser",
 "dojo/on",
 "dojo/dom",
 "esri/layers/ArcGISDynamicMapServiceLayer",
 "esri/graphic",
 "esri/layers/GraphicsLayer",
 "esri/map",
 "esri/tasks/FindTask",
 "esri/tasks/FindParameters",
 "esri/symbols/Symbol",
 "esri/symbols/PictureMarkerSymbol",
 "esri/tasks/QueryTask",
 "esri/toolbars/draw",
 "esri/tasks/query",
 "esri/layers/FeatureLayer",
 "esri/InfoTemplate",
 "esri/symbols/SimpleMarkerSymbol",
 "esri/toolbars/draw",
 "esri/symbols/SimpleLineSymbol",
 "esri/Color",
 "esri/geometry/Point",
 "esri/SpatialReference",
 "dijit/layout/BorderContainer",
 "dijit/layout/ContentPane",
 "dojo/domReady!"],
 function(parser,on,dom,ArcGISDynamicMapServiceLayer,Graphic,GraphicsLayer,Map,FindTask,FindParameters,Symbol,PictureMarkerSymbol,QueryTask, Draw, Query,FeatureLayer,InfoTemplate,SimpleMarkerSymbol,DrawSimpleLineSymbol, Color,Point, SpatialReference,)
 {
  parser.parse();
  var options = {logo:false,slider:true};
  myMap=new Map("mapDiv",options);
  var agoServiceURL="https://10.10.11.94:6443/arcgis/rest/services/HLJwetland/Heilongjiangwetland/MapServer";
  var agoLayer= new ArcGISDynamicMapServiceLayer(agoServiceURL);
  myMap.addLayer(agoLayer);
  var pp = new Point(77380 , 5192042,2347);
  stopSymbol = new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_X)
    .setSize(10);
    var graphics = new Graphic(pp,stopSymbol);
  myMap.graphics.add(
    new esri.Graphic(
      pp,
      stopSymbol
    )
  )
  myMap.centerAt(pp);








});
