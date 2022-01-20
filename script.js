var map = L.map('mapid').setView([38.6, -90.1], 10);

 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
}).addTo(map);

var marker = L.marker([38.6, -90.1]).addTo(map);
var marker = L.marker([38.627, -90.199]).addTo(map);

var circle = L.circle([38.627, -90.199], {
    color: 'green',
    fillColor: '#097969',
    fillOpacity: 0.5,
    radius: 3000
}).addTo(map);

var polygon = L.polygon([
    [38.6, -90.199],
    [38.7, -90.25],
    [38.6, -90.1]
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

/*
var popup = L.popup()
    .setLatLng([38.6, -90.1])
    .setContent("I am a standalone popup.")
    .openOn(map);
 */

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
