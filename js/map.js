var mymap = L.map('map').setView([4.629, -74.111], 7);

var OpenStreetMap = L.tileLayer.provider('OpenStreetMap').addTo(mymap);

var baseMaps = {
	"OpenStreetMap": OpenStreetMap
};
var overlayMaps = {
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(mymap);

var layers = {};
var db_path = 'sqlite/prueba.sqlite';

//layers from spatialite db
var departamentos = execute_query(db_path,"select AsGeoJSON(geom), dpto_cnmbr from departamentos",mymap,'Departamentos',['#query-output',false],depto_style);




