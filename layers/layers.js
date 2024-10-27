var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Cases_1 = new ol.format.GeoJSON();
var features_Cases_1 = format_Cases_1.readFeatures(json_Cases_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cases_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cases_1.addFeatures(features_Cases_1);
var lyr_Cases_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cases_1, 
                style: style_Cases_1,
                popuplayertitle: "Cases",
                interactive: true,
                title: '<img src="styles/legend/Cases_1.png" /> Cases'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Cases_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Cases_1];
lyr_Cases_1.set('fieldAliases', {'id': 'id', 'Link': 'Link', 'Location': 'Location', 'Country': 'Country', 'Info': 'Info', 'Housholds': 'Housholds', 'Status': 'Status', });
lyr_Cases_1.set('fieldImages', {'id': '', 'Link': '', 'Location': '', 'Country': '', 'Info': '', 'Housholds': '', 'Status': '', });
lyr_Cases_1.set('fieldLabels', {'id': 'no label', 'Link': 'no label', 'Location': 'no label', 'Country': 'no label', 'Info': 'no label', 'Housholds': 'no label', 'Status': 'no label', });
lyr_Cases_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});