var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_GDPPerCapita_1 = new ol.format.GeoJSON();
var features_GDPPerCapita_1 = format_GDPPerCapita_1.readFeatures(json_GDPPerCapita_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GDPPerCapita_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GDPPerCapita_1.addFeatures(features_GDPPerCapita_1);
var lyr_GDPPerCapita_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GDPPerCapita_1, 
                style: style_GDPPerCapita_1,
                interactive: true,
    title: 'GDP Per Capita<br />\
    <img src="styles/legend/GDPPerCapita_1_0.png" /> -0.1 - -0.05%<br />\
    <img src="styles/legend/GDPPerCapita_1_1.png" /> -0.05 - 0%<br />\
    <img src="styles/legend/GDPPerCapita_1_2.png" /> 0 - 0.02%<br />\
    <img src="styles/legend/GDPPerCapita_1_3.png" /> 0.02 - 0.7%<br />\
    <img src="styles/legend/GDPPerCapita_1_4.png" /> Achieved Goal<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_GDPPerCapita_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GDPPerCapita_1];
lyr_GDPPerCapita_1.set('fieldAliases', {'ST': 'ST', 'STATE': 'STATE', 'ST_ABBR': 'ST_ABBR', 'STCNTY': 'STCNTY', 'COUNTY': 'COUNTY', 'FIPS': 'FIPS', 'LOCATION': 'LOCATION', 'AREA_SQMI': 'AREA_SQMI', 'E_TOTPOP': 'E_TOTPOP', 'E_PCI': 'E_PCI', 'EP_PCI': 'EP_PCI', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', 'e_pci_2': 'e_pci_2', 'Avg_Gdp': 'Avg GDP Per Capita Growth', });
lyr_GDPPerCapita_1.set('fieldImages', {'ST': 'Hidden', 'STATE': 'Hidden', 'ST_ABBR': 'Hidden', 'STCNTY': 'Hidden', 'COUNTY': 'Hidden', 'FIPS': 'Hidden', 'LOCATION': 'TextEdit', 'AREA_SQMI': 'Hidden', 'E_TOTPOP': 'Hidden', 'E_PCI': 'Hidden', 'EP_PCI': 'Hidden', 'Shape_STAr': 'Hidden', 'Shape_STLe': 'Hidden', 'e_pci_2': 'Hidden', 'Avg_Gdp': 'TextEdit', });
lyr_GDPPerCapita_1.set('fieldLabels', {'LOCATION': 'header label', 'Avg_Gdp': 'inline label', });
lyr_GDPPerCapita_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});