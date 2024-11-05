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
var format_PlannedCases_1 = new ol.format.GeoJSON();
var features_PlannedCases_1 = format_PlannedCases_1.readFeatures(json_PlannedCases_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlannedCases_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlannedCases_1.addFeatures(features_PlannedCases_1);
var lyr_PlannedCases_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlannedCases_1, 
                style: style_PlannedCases_1,
                popuplayertitle: "Planned Cases",
                interactive: true,
    title: 'Planned Cases<br />\
    <img src="styles/legend/PlannedCases_1_0.png" /> unknown number of households<br />\
    <img src="styles/legend/PlannedCases_1_1.png" /> 1 - 25 households<br />\
    <img src="styles/legend/PlannedCases_1_2.png" /> 25 - 100 households<br />\
    <img src="styles/legend/PlannedCases_1_3.png" /> 100 - 500 households<br />\
    <img src="styles/legend/PlannedCases_1_4.png" /> 500 - 1000 households<br />\
    <img src="styles/legend/PlannedCases_1_5.png" /> 1000 - 3000 households<br />'
        });
var format_ImplementedCases_2 = new ol.format.GeoJSON();
var features_ImplementedCases_2 = format_ImplementedCases_2.readFeatures(json_ImplementedCases_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImplementedCases_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImplementedCases_2.addFeatures(features_ImplementedCases_2);
var lyr_ImplementedCases_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImplementedCases_2, 
                style: style_ImplementedCases_2,
                popuplayertitle: "Implemented Cases",
                interactive: true,
    title: 'Implemented Cases<br />\
    <img src="styles/legend/ImplementedCases_2_0.png" /> unknown number of households<br />\
    <img src="styles/legend/ImplementedCases_2_1.png" /> 1 - 25 households<br />\
    <img src="styles/legend/ImplementedCases_2_2.png" /> 25 - 100 households<br />\
    <img src="styles/legend/ImplementedCases_2_3.png" /> 100 - 500 households<br />\
    <img src="styles/legend/ImplementedCases_2_4.png" /> 500 - 1000 households<br />\
    <img src="styles/legend/ImplementedCases_2_5.png" /> 1000 - 3000 households<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_PlannedCases_1.setVisible(true);lyr_ImplementedCases_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PlannedCases_1,lyr_ImplementedCases_2];
lyr_PlannedCases_1.set('fieldAliases', {'Location': 'Location', 'Country': 'Country', 'Info': 'Info', 'Status': 'Status', 'Housholds': 'Housholds', 'Link': 'Link', 'id': 'id', });
lyr_ImplementedCases_2.set('fieldAliases', {'Location': 'Location', 'Country': 'Country', 'Info': 'Info', 'Status': 'Status', 'Housholds': 'Housholds', 'Link': 'Link', 'id': 'id', });
lyr_PlannedCases_1.set('fieldImages', {'Location': 'TextEdit', 'Country': 'TextEdit', 'Info': 'TextEdit', 'Status': 'TextEdit', 'Housholds': 'TextEdit', 'Link': 'TextEdit', 'id': 'TextEdit', });
lyr_ImplementedCases_2.set('fieldImages', {'Location': 'TextEdit', 'Country': 'TextEdit', 'Info': 'TextEdit', 'Status': 'TextEdit', 'Housholds': 'TextEdit', 'Link': 'TextEdit', 'id': 'TextEdit', });
lyr_PlannedCases_1.set('fieldLabels', {'Location': 'inline label - always visible', 'Country': 'inline label - always visible', 'Info': 'inline label - always visible', 'Status': 'inline label - always visible', 'Housholds': 'inline label - always visible', 'Link': 'inline label - always visible', 'id': 'hidden field', });
lyr_ImplementedCases_2.set('fieldLabels', {'Location': 'inline label - always visible', 'Country': 'inline label - always visible', 'Info': 'inline label - always visible', 'Status': 'inline label - always visible', 'Housholds': 'inline label - always visible', 'Link': 'inline label - visible with data', 'id': 'hidden field', });
lyr_ImplementedCases_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});