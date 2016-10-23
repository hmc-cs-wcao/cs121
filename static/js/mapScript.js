
	function initialize() {
		var centerlatlng = new google.maps.LatLng(34.096680, -117.719780);
		var myOptions = {
			zoom: 15,
			center: centerlatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

		var latlng = new google.maps.LatLng(34.101850, -117.717470);
		var img = new google.maps.MarkerImage('http://chart.apis.google.com/chart?cht=mm&chs=12x16&chco=FFFFFF,FF0000,000000&ext=.png');
		var marker = new google.maps.Marker({
		icon: img,
		position: latlng
		});
		marker.setMap(map);

lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107860, -117.718270),
new google.maps.LatLng(34.107630, -117.718400),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3d0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103530, -117.722430),
new google.maps.LatLng(34.102740, -117.722450),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1a350d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100630, -117.716660),
new google.maps.LatLng(34.101620, -117.716680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#70e03'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096820, -117.719980),
new google.maps.LatLng(34.096590, -117.719940),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1c390e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101960, -117.707010),
new google.maps.LatLng(34.102040, -117.707030),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#356a1a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104510, -117.710090),
new google.maps.LatLng(34.104520, -117.711020),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285014",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106200, -117.711090),
new google.maps.LatLng(34.105970, -117.711090),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#274e13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101210, -117.712450),
new google.maps.LatLng(34.101200, -117.712650),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#19330c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097390, -117.711110),
new google.maps.LatLng(34.097580, -117.711190),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#274f13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103160, -117.709530),
new google.maps.LatLng(34.103110, -117.710380),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295214",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100690, -117.727600),
new google.maps.LatLng(34.100790, -117.729020),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#34681a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102070, -117.729050),
new google.maps.LatLng(34.101640, -117.729060),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3b761d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100650, -117.718460),
new google.maps.LatLng(34.101610, -117.718440),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#70f03'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105160, -117.707140),
new google.maps.LatLng(34.105160, -117.707140),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#376e1b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100790, -117.725390),
new google.maps.LatLng(34.100870, -117.725270),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285114",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.110030, -117.719060),
new google.maps.LatLng(34.109840, -117.719290),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5415",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.110190, -117.714930),
new google.maps.LatLng(34.110040, -117.714950),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2c5816",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102000, -117.708490),
new google.maps.LatLng(34.102030, -117.708490),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2d5b16",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098420, -117.725420),
new google.maps.LatLng(34.098580, -117.725410),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2c5816",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098080, -117.719390),
new google.maps.LatLng(34.098310, -117.719580),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#152b0a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108400, -117.719380),
new google.maps.LatLng(34.108930, -117.719400),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#224511",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.093130, -117.713030),
new google.maps.LatLng(34.093170, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#316318",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099560, -117.704220),
new google.maps.LatLng(34.099590, -117.705920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#448922",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099640, -117.720230),
new google.maps.LatLng(34.101620, -117.720220),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#122409",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094690, -117.717140),
new google.maps.LatLng(34.094660, -117.716420),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244912",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099660, -117.709870),
new google.maps.LatLng(34.099710, -117.712630),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285014",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097840, -117.719300),
new google.maps.LatLng(34.098080, -117.719390),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#162c0b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102580, -117.729050),
new google.maps.LatLng(34.101640, -117.729060),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3b761d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102040, -117.707030),
new google.maps.LatLng(34.102040, -117.707400),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#356a1a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109120, -117.722990),
new google.maps.LatLng(34.109120, -117.722070),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2e5d17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099930, -117.724140),
new google.maps.LatLng(34.100140, -117.724140),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234611",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098140, -117.716370),
new google.maps.LatLng(34.098440, -117.716410),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#132709",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101320, -117.705930),
new google.maps.LatLng(34.101330, -117.707020),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3a751d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102800, -117.714910),
new google.maps.LatLng(34.102610, -117.714910),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#d1b06'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108650, -117.723040),
new google.maps.LatLng(34.108810, -117.723050),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2c5916",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095610, -117.717910),
new google.maps.LatLng(34.096610, -117.717880),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1f3f0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104680, -117.709320),
new google.maps.LatLng(34.105300, -117.709310),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2b5715",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100630, -117.720230),
new google.maps.LatLng(34.101620, -117.720220),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#f1e07'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097960, -117.709280),
new google.maps.LatLng(34.098280, -117.709660),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2e5c17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103770, -117.707110),
new google.maps.LatLng(34.103220, -117.707100),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#356b1a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104400, -117.726820),
new google.maps.LatLng(34.102570, -117.726830),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#316218",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102030, -117.710200),
new google.maps.LatLng(34.101980, -117.710350),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254a12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101620, -117.711450),
new google.maps.LatLng(34.101540, -117.711680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3d0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100560, -117.726830),
new google.maps.LatLng(34.101610, -117.726800),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#306018",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097590, -117.714940),
new google.maps.LatLng(34.098640, -117.714930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#19320c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106530, -117.727180),
new google.maps.LatLng(34.106540, -117.726830),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#366d1b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094270, -117.721810),
new google.maps.LatLng(34.094310, -117.722020),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2c5916",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099210, -117.723740),
new google.maps.LatLng(34.099620, -117.723310),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#224511",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096680, -117.709060),
new google.maps.LatLng(34.096940, -117.708940),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#326419",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105490, -117.710750),
new google.maps.LatLng(34.105490, -117.710890),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264d13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108080, -117.725890),
new google.maps.LatLng(34.107660, -117.725950),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#356a1a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103360, -117.714910),
new google.maps.LatLng(34.102800, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#f1e07'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098700, -117.709700),
new google.maps.LatLng(34.098730, -117.709720),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5515",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105340, -117.712320),
new google.maps.LatLng(34.105380, -117.712420),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1f3f0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.093730, -117.721420),
new google.maps.LatLng(34.093720, -117.721170),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2e5c17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105380, -117.714930),
new google.maps.LatLng(34.104410, -117.714930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#162c0b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097050, -117.711080),
new google.maps.LatLng(34.097220, -117.711100),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285114",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094690, -117.714920),
new google.maps.LatLng(34.094690, -117.714940),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264d13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094510, -117.714960),
new google.maps.LatLng(34.094590, -117.715680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#274f13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098640, -117.714950),
new google.maps.LatLng(34.098640, -117.715810),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#14290a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100930, -117.705920),
new google.maps.LatLng(34.101320, -117.705930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3b761d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095730, -117.709380),
new google.maps.LatLng(34.095660, -117.709430),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#336719",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095660, -117.709680),
new google.maps.LatLng(34.095790, -117.709690),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#326519",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099640, -117.709250),
new google.maps.LatLng(34.099640, -117.709340),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2b5615",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098650, -117.713830),
new google.maps.LatLng(34.098660, -117.716570),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#18310c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099180, -117.714800),
new google.maps.LatLng(34.099640, -117.714930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#132609",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096510, -117.723290),
new google.maps.LatLng(34.096980, -117.723170),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285014",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099670, -117.709340),
new google.maps.LatLng(34.099660, -117.711510),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5515",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098650, -117.714950),
new google.maps.LatLng(34.099180, -117.714800),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#14290a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105380, -117.712550),
new google.maps.LatLng(34.105390, -117.713180),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3d0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099650, -117.709250),
new google.maps.LatLng(34.099650, -117.709340),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2b5615",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.092260, -117.712430),
new google.maps.LatLng(34.092210, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#376e1b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105930, -117.709040),
new google.maps.LatLng(34.105940, -117.709430),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2f5f17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104950, -117.713180),
new google.maps.LatLng(34.104400, -117.713180),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1a350d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095790, -117.712220),
new google.maps.LatLng(34.095740, -117.712200),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285114",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102980, -117.732620),
new google.maps.LatLng(34.102710, -117.731720),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#4d9a26",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105460, -117.712550),
new google.maps.LatLng(34.105390, -117.713180),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1f3e0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104520, -117.711020),
new google.maps.LatLng(34.104390, -117.711020),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234711",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105920, -117.711380),
new google.maps.LatLng(34.105920, -117.711380),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254a12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098390, -117.725630),
new google.maps.LatLng(34.098420, -117.725420),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2d5a16",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098650, -117.715480),
new google.maps.LatLng(34.098640, -117.716110),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#132609",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109100, -117.720160),
new google.maps.LatLng(34.108220, -117.720270),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#274e13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101570, -117.709480),
new google.maps.LatLng(34.101620, -117.710910),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285114",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106050, -117.720260),
new google.maps.LatLng(34.106050, -117.720260),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#19330c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094690, -117.714940),
new google.maps.LatLng(34.095620, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264d13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099640, -117.714930),
new google.maps.LatLng(34.100610, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#112208",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.093020, -117.715600),
new google.maps.LatLng(34.093340, -117.715600),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2e5c17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098440, -117.716410),
new google.maps.LatLng(34.098660, -117.716570),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#122409",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.092470, -117.721400),
new google.maps.LatLng(34.093730, -117.721420),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#336719",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106820, -117.710320),
new google.maps.LatLng(34.106720, -117.710320),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2c5816",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104390, -117.711020),
new google.maps.LatLng(34.104390, -117.711480),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234611",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096140, -117.711120),
new google.maps.LatLng(34.096580, -117.711150),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2b5715",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108930, -117.719400),
new google.maps.LatLng(34.108980, -117.719470),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254a12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096400, -117.711670),
new google.maps.LatLng(34.096520, -117.711960),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285114",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099710, -117.712630),
new google.maps.LatLng(34.099640, -117.714930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1a350d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104400, -117.714280),
new google.maps.LatLng(34.104410, -117.714930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#14290a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095730, -117.722050),
new google.maps.LatLng(34.096530, -117.722020),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264d13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105610, -117.711500),
new google.maps.LatLng(34.105490, -117.711690),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234711",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098640, -117.716110),
new google.maps.LatLng(34.098660, -117.716570),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#112308",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109120, -117.722070),
new google.maps.LatLng(34.109120, -117.720520),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2b5715",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106990, -117.725570),
new google.maps.LatLng(34.106990, -117.724590),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#306118",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109100, -117.719520),
new google.maps.LatLng(34.109100, -117.720160),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264c13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105320, -117.723450),
new google.maps.LatLng(34.105320, -117.722450),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234611",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096390, -117.719300),
new google.maps.LatLng(34.096610, -117.719300),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1d3a0e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103220, -117.707100),
new google.maps.LatLng(34.102620, -117.707050),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#356a1a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103100, -117.710800),
new google.maps.LatLng(34.102700, -117.711470),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#224511",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101650, -117.713150),
new google.maps.LatLng(34.101620, -117.716680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#162c0b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101090, -117.703810),
new google.maps.LatLng(34.100690, -117.703800),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#458b22",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095930, -117.723360),
new google.maps.LatLng(34.096510, -117.723290),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5515",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100850, -117.703940),
new google.maps.LatLng(34.100820, -117.705640),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#458a22",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109880, -117.715920),
new google.maps.LatLng(34.109890, -117.716110),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295314",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106370, -117.712650),
new google.maps.LatLng(34.106190, -117.713180),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#214310",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105940, -117.709430),
new google.maps.LatLng(34.105990, -117.709820),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2e5c17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104360, -117.720250),
new google.maps.LatLng(34.103450, -117.720240),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#132609",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098280, -117.709660),
new google.maps.LatLng(34.098560, -117.709500),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2b5715",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100650, -117.722430),
new google.maps.LatLng(34.101610, -117.722410),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1a340d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105680, -117.707930),
new google.maps.LatLng(34.105540, -117.707930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#34681a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099710, -117.724160),
new google.maps.LatLng(34.099930, -117.724140),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234711",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108670, -117.718630),
new google.maps.LatLng(34.108560, -117.718520),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234611",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104400, -117.713210),
new google.maps.LatLng(34.104400, -117.713880),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#19320c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094640, -117.711460),
new google.maps.LatLng(34.094700, -117.711750),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2f5f17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094310, -117.722020),
new google.maps.LatLng(34.094640, -117.722000),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2c5916",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094700, -117.711750),
new google.maps.LatLng(34.094690, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2e5d17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107170, -117.720240),
new google.maps.LatLng(34.107020, -117.720230),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3d0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103360, -117.713170),
new google.maps.LatLng(34.103370, -117.714280),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#172e0b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100590, -117.713940),
new google.maps.LatLng(34.100610, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#132609",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102050, -117.709970),
new google.maps.LatLng(34.102030, -117.709970),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264c13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102600, -117.716660),
new google.maps.LatLng(34.101620, -117.716680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#50b02'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102980, -117.731620),
new google.maps.LatLng(34.102710, -117.731720),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#489024",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103310, -117.709530),
new google.maps.LatLng(34.103300, -117.710380),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295214",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096580, -117.720670),
new google.maps.LatLng(34.096590, -117.719940),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1f3e0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102630, -117.710360),
new google.maps.LatLng(34.102610, -117.711470),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244812",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105920, -117.707860),
new google.maps.LatLng(34.105930, -117.708110),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#356a1a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096510, -117.712880),
new google.maps.LatLng(34.096430, -117.713080),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234711",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101420, -117.712630),
new google.maps.LatLng(34.101570, -117.712730),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#18310c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099560, -117.703790),
new google.maps.LatLng(34.099560, -117.704220),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#468d23",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109050, -117.723720),
new google.maps.LatLng(34.108520, -117.723720),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#306118",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098660, -117.716570),
new google.maps.LatLng(34.099630, -117.716660),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#102108",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101110, -117.729050),
new google.maps.LatLng(34.101640, -117.729060),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3b761d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105490, -117.711500),
new google.maps.LatLng(34.105490, -117.711690),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234711",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097220, -117.711100),
new google.maps.LatLng(34.097390, -117.711110),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285014",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102000, -117.707620),
new google.maps.LatLng(34.102000, -117.708030),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#326419",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.110090, -117.716980),
new google.maps.LatLng(34.110090, -117.716980),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5415",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095730, -117.711880),
new google.maps.LatLng(34.095650, -117.712510),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5415",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103730, -117.710640),
new google.maps.LatLng(34.103760, -117.710790),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244812",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104390, -117.711480),
new google.maps.LatLng(34.104400, -117.713210),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#214210",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103400, -117.718400),
new google.maps.LatLng(34.102510, -117.718430),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#91204'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108810, -117.723050),
new google.maps.LatLng(34.109070, -117.723040),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2d5a16",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106470, -117.729060),
new google.maps.LatLng(34.106440, -117.727950),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3f7f1f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095750, -117.712620),
new google.maps.LatLng(34.095760, -117.712650),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#274f13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097620, -117.712580),
new google.maps.LatLng(34.097600, -117.713820),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#204110",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107020, -117.720230),
new google.maps.LatLng(34.107010, -117.720230),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1d3b0e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099390, -117.725590),
new google.maps.LatLng(34.099380, -117.724700),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2b5615",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107350, -117.716680),
new google.maps.LatLng(34.107350, -117.716680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1c380e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104400, -117.713880),
new google.maps.LatLng(34.104400, -117.714280),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#162c0b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095270, -117.711870),
new google.maps.LatLng(34.095340, -117.711900),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2c5816",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106980, -117.722880),
new google.maps.LatLng(34.106980, -117.722370),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264c13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097620, -117.713170),
new google.maps.LatLng(34.097600, -117.713820),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3d0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097610, -117.714400),
new google.maps.LatLng(34.097590, -117.714940),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1a350d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098650, -117.714810),
new google.maps.LatLng(34.098650, -117.714950),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#152a0a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106500, -117.725910),
new google.maps.LatLng(34.106240, -117.725420),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#316218",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105970, -117.711090),
new google.maps.LatLng(34.105920, -117.711380),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264d13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100610, -117.722720),
new google.maps.LatLng(34.100650, -117.722430),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1b370d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109610, -117.719370),
new google.maps.LatLng(34.109300, -117.719390),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285114",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106240, -117.723480),
new google.maps.LatLng(34.106170, -117.723190),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254b12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105710, -117.707510),
new google.maps.LatLng(34.105700, -117.707630),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#366c1b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098620, -117.727330),
new google.maps.LatLng(34.098640, -117.726910),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#34691a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108520, -117.718270),
new google.maps.LatLng(34.107860, -117.718270),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#224411",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104490, -117.708360),
new google.maps.LatLng(34.104070, -117.708350),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#306018",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106200, -117.710570),
new google.maps.LatLng(34.106200, -117.711090),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295314",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104950, -117.708400),
new google.maps.LatLng(34.104070, -117.708350),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#306118",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097060, -117.720890),
new google.maps.LatLng(34.097060, -117.720130),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3c0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.092940, -117.716690),
new google.maps.LatLng(34.092960, -117.715660),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2d5b16",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107370, -117.718430),
new google.maps.LatLng(34.106950, -117.718440),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1c390e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097340, -117.727380),
new google.maps.LatLng(34.098620, -117.727330),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#376f1b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102570, -117.726830),
new google.maps.LatLng(34.101610, -117.726800),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2f5f17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108980, -117.719470),
new google.maps.LatLng(34.109030, -117.719510),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254b12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102620, -117.707050),
new google.maps.LatLng(34.102560, -117.708100),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#356a1a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098640, -117.714390),
new google.maps.LatLng(34.098650, -117.715480),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#162d0b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105300, -117.709310),
new google.maps.LatLng(34.105250, -117.710070),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2d5a16",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098650, -117.711230),
new google.maps.LatLng(34.098650, -117.711230),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234711",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.093340, -117.715600),
new google.maps.LatLng(34.093170, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2c5816",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095760, -117.712650),
new google.maps.LatLng(34.095740, -117.713180),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#274f13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103930, -117.731780),
new google.maps.LatLng(34.103420, -117.731640),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#499324",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096590, -117.719940),
new google.maps.LatLng(34.096610, -117.719290),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1d3b0e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095150, -117.720010),
new google.maps.LatLng(34.095310, -117.720000),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244912",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101640, -117.729060),
new google.maps.LatLng(34.101610, -117.726800),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3b761d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095610, -117.718600),
new google.maps.LatLng(34.095610, -117.717910),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#204010",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097600, -117.717130),
new google.maps.LatLng(34.098050, -117.717120),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#152b0a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095180, -117.722020),
new google.maps.LatLng(34.095730, -117.722050),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295214",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099650, -117.709340),
new google.maps.LatLng(34.099660, -117.709780),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5515",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109440, -117.718630),
new google.maps.LatLng(34.108980, -117.718650),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#274e13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105920, -117.718460),
new google.maps.LatLng(34.105390, -117.718440),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#152a0a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101330, -117.707020),
new google.maps.LatLng(34.101750, -117.707010),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#356a1a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104450, -117.731230),
new google.maps.LatLng(34.104450, -117.731800),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#478e23",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101610, -117.725690),
new google.maps.LatLng(34.101610, -117.724680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295314",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102160, -117.722390),
new google.maps.LatLng(34.101610, -117.722410),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#19320c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099180, -117.714930),
new google.maps.LatLng(34.099640, -117.714930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#122509",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100080, -117.725610),
new google.maps.LatLng(34.100360, -117.725530),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5415",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104090, -117.709360),
new google.maps.LatLng(34.104020, -117.709360),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5515",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106470, -117.727470),
new google.maps.LatLng(34.106530, -117.727180),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#38701c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101610, -117.722410),
new google.maps.LatLng(34.101620, -117.720220),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#19320c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105140, -117.706370),
new google.maps.LatLng(34.105160, -117.707140),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3b761d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100690, -117.703800),
new google.maps.LatLng(34.100570, -117.703790),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#458b22",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097590, -117.719300),
new google.maps.LatLng(34.097840, -117.719300),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#172f0b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103490, -117.710490),
new google.maps.LatLng(34.103300, -117.710380),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244912",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106960, -117.714930),
new google.maps.LatLng(34.105380, -117.714930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1d3a0e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095860, -117.712350),
new google.maps.LatLng(34.095840, -117.712300),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285014",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106990, -117.724590),
new google.maps.LatLng(34.106980, -117.722880),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2c5916",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102050, -117.724700),
new google.maps.LatLng(34.101610, -117.724680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244912",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096650, -117.715670),
new google.maps.LatLng(34.096630, -117.716370),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1c380e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103610, -117.710490),
new google.maps.LatLng(34.103300, -117.710380),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244912",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106980, -117.714300),
new google.maps.LatLng(34.106960, -117.714930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3d0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099660, -117.711510),
new google.maps.LatLng(34.099640, -117.714930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#204010",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101930, -117.720240),
new google.maps.LatLng(34.101620, -117.720220),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#e1c07'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108820, -117.716660),
new google.maps.LatLng(34.108860, -117.717000),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234711",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105470, -117.709100),
new google.maps.LatLng(34.105470, -117.709300),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2e5d17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.092150, -117.717300),
new google.maps.LatLng(34.092210, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#316218",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106540, -117.726830),
new google.maps.LatLng(34.106530, -117.726120),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#356a1a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105620, -117.709300),
new google.maps.LatLng(34.105480, -117.710020),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2d5b16",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094650, -117.711190),
new google.maps.LatLng(34.094640, -117.711460),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#306118",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104400, -117.713180),
new google.maps.LatLng(34.103370, -117.713170),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#19320c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099010, -117.725090),
new google.maps.LatLng(34.099390, -117.725210),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295214",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105970, -117.710590),
new google.maps.LatLng(34.105970, -117.711090),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285114",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098570, -117.725220),
new google.maps.LatLng(34.098570, -117.723980),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5515",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096580, -117.720260),
new google.maps.LatLng(34.096590, -117.719940),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3c0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.090470, -117.714940),
new google.maps.LatLng(34.090980, -117.714900),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3b761d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101620, -117.720220),
new google.maps.LatLng(34.101610, -117.718440),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#e1c07'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108500, -117.723160),
new google.maps.LatLng(34.108540, -117.723070),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2c5916",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106550, -117.720210),
new google.maps.LatLng(34.106050, -117.720260),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1b370d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103440, -117.719110),
new google.maps.LatLng(34.103400, -117.718400),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#b1705'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096580, -117.711150),
new google.maps.LatLng(34.097050, -117.711080),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295314",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098050, -117.717120),
new google.maps.LatLng(34.098600, -117.717130),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#132609",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108760, -117.717310),
new google.maps.LatLng(34.108720, -117.717350),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234611",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098650, -117.713180),
new google.maps.LatLng(34.098640, -117.716110),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1b360d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098660, -117.718400),
new google.maps.LatLng(34.099300, -117.718430),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#102108",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106940, -117.717500),
new google.maps.LatLng(34.107000, -117.716700),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#19330c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105440, -117.708830),
new google.maps.LatLng(34.105470, -117.709100),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2f5f17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105470, -117.709810),
new google.maps.LatLng(34.105490, -117.710750),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2b5615",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095840, -117.712250),
new google.maps.LatLng(34.095790, -117.712220),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285114",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107890, -117.720410),
new google.maps.LatLng(34.107170, -117.720380),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#224411",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100610, -117.714920),
new google.maps.LatLng(34.101620, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#e1c07'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096640, -117.717110),
new google.maps.LatLng(34.096630, -117.716370),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1a350d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101590, -117.723660),
new google.maps.LatLng(34.101610, -117.718440),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1f3f0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107820, -117.714950),
new google.maps.LatLng(34.107330, -117.714940),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#214210",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096370, -117.727380),
new google.maps.LatLng(34.096440, -117.725400),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#39731c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096650, -117.712690),
new google.maps.LatLng(34.096510, -117.712880),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244812",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100810, -117.724350),
new google.maps.LatLng(34.100680, -117.724130),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234611",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.092760, -117.714950),
new google.maps.LatLng(34.093170, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#306018",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106170, -117.722430),
new google.maps.LatLng(34.103530, -117.722430),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#214310",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.090980, -117.714900),
new google.maps.LatLng(34.091410, -117.714860),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#38711c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098570, -117.725630),
new google.maps.LatLng(34.098570, -117.725220),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2c5916",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104390, -117.718410),
new google.maps.LatLng(34.103400, -117.718400),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#d1b06'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101750, -117.707020),
new google.maps.LatLng(34.102040, -117.707030),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#356a1a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094670, -117.715670),
new google.maps.LatLng(34.094660, -117.716420),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254b12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105310, -117.729070),
new google.maps.LatLng(34.104420, -117.729070),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3d7b1e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098640, -117.726910),
new google.maps.LatLng(34.098570, -117.725630),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#326519",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103420, -117.731640),
new google.maps.LatLng(34.103180, -117.731600),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#489124",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106190, -117.713180),
new google.maps.LatLng(34.105830, -117.713170),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1f3e0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100080, -117.714000),
new google.maps.LatLng(34.100100, -117.713980),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#132709",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096010, -117.709730),
new google.maps.LatLng(34.096070, -117.709790),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#316218",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107000, -117.716700),
new google.maps.LatLng(34.105390, -117.716660),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1a350d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094610, -117.720660),
new google.maps.LatLng(34.094630, -117.720010),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285014",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101610, -117.724680),
new google.maps.LatLng(34.101590, -117.723660),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244912",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096540, -117.721510),
new google.maps.LatLng(34.096570, -117.720670),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#224411",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105250, -117.710070),
new google.maps.LatLng(34.104510, -117.710090),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295314",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098570, -117.723600),
new google.maps.LatLng(34.098570, -117.722390),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234611",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096940, -117.708940),
new google.maps.LatLng(34.097090, -117.708950),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#326419",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102610, -117.714930),
new google.maps.LatLng(34.101620, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#d1b06'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.093730, -117.716850),
new google.maps.LatLng(34.093720, -117.717260),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295314",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105590, -117.707390),
new google.maps.LatLng(34.105660, -117.707430),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#366d1b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.092210, -117.716680),
new google.maps.LatLng(34.092940, -117.716690),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#316218",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099390, -117.724490),
new google.maps.LatLng(34.099540, -117.724310),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254b12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106370, -117.723980),
new google.maps.LatLng(34.106300, -117.723770),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285014",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108340, -117.720410),
new google.maps.LatLng(34.107890, -117.720410),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244812",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096070, -117.709790),
new google.maps.LatLng(34.096120, -117.709880),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#316218",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105390, -117.713180),
new google.maps.LatLng(34.104950, -117.713180),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1c380e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107400, -117.717430),
new google.maps.LatLng(34.107350, -117.716680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1c380e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101750, -117.707010),
new google.maps.LatLng(34.101960, -117.707010),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#356a1a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101590, -117.725690),
new google.maps.LatLng(34.101610, -117.722410),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295314",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.093660, -117.716660),
new google.maps.LatLng(34.093730, -117.716850),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295314",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107660, -117.725950),
new google.maps.LatLng(34.107090, -117.725950),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#34681a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105390, -117.718440),
new google.maps.LatLng(34.104390, -117.718410),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#122509",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097600, -117.713820),
new google.maps.LatLng(34.097590, -117.714400),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1c390e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.090410, -117.716660),
new google.maps.LatLng(34.092210, -117.716680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3a741d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107010, -117.720350),
new google.maps.LatLng(34.106050, -117.720260),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3c0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105700, -117.707630),
new google.maps.LatLng(34.105670, -117.707660),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#356b1a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097020, -117.720030),
new google.maps.LatLng(34.096970, -117.720000),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1b370d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103530, -117.722440),
new google.maps.LatLng(34.102740, -117.722450),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1a350d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105470, -117.709300),
new google.maps.LatLng(34.105470, -117.709810),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2d5b16",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.093720, -117.717260),
new google.maps.LatLng(34.093720, -117.717630),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295214",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096610, -117.719300),
new google.maps.LatLng(34.097590, -117.719300),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1c380e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096140, -117.719300),
new google.maps.LatLng(34.096390, -117.719300),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3d0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109300, -117.719390),
new google.maps.LatLng(34.109120, -117.719520),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#274e13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096140, -117.712280),
new google.maps.LatLng(34.095860, -117.712350),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#274e13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104400, -117.725820),
new google.maps.LatLng(34.104380, -117.722430),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2c5916",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102440, -117.724640),
new google.maps.LatLng(34.102050, -117.724700),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244912",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101270, -117.712250),
new google.maps.LatLng(34.101210, -117.712450),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1a350d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100630, -117.725590),
new google.maps.LatLng(34.100790, -117.725390),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295314",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098510, -117.719880),
new google.maps.LatLng(34.098640, -117.719530),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#152a0a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107750, -117.718660),
new google.maps.LatLng(34.108220, -117.719260),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3d0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094200, -117.719260),
new google.maps.LatLng(34.094680, -117.719250),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285014",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100790, -117.729020),
new google.maps.LatLng(34.101370, -117.729060),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3b761d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105930, -117.708370),
new google.maps.LatLng(34.105940, -117.709430),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#326519",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101310, -117.723620),
new google.maps.LatLng(34.101590, -117.723660),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1f3e0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099620, -117.723310),
new google.maps.LatLng(34.099670, -117.722410),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1f3f0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105300, -117.731830),
new google.maps.LatLng(34.104450, -117.731800),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#4b9625",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.092960, -117.715660),
new google.maps.LatLng(34.092980, -117.715610),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2e5c17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.091410, -117.714860),
new google.maps.LatLng(34.092210, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#366d1b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105930, -117.708790),
new google.maps.LatLng(34.105940, -117.709430),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#306118",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102030, -117.708490),
new google.maps.LatLng(34.102050, -117.709970),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2d5b16",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109120, -117.719520),
new google.maps.LatLng(34.109100, -117.719520),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264d13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096630, -117.716370),
new google.maps.LatLng(34.097610, -117.716380),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1b360d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104410, -117.714930),
new google.maps.LatLng(34.103360, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#122409",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108720, -117.717350),
new google.maps.LatLng(34.108510, -117.717600),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234611",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101040, -117.723550),
new google.maps.LatLng(34.101310, -117.723620),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1f3e0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100370, -117.703750),
new google.maps.LatLng(34.100290, -117.703750),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#468c23",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106160, -117.707920),
new google.maps.LatLng(34.106180, -117.709720),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#356a1a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106950, -117.713170),
new google.maps.LatLng(34.106190, -117.713170),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#224411",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103370, -117.713170),
new google.maps.LatLng(34.101650, -117.713150),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#172e0b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105490, -117.711690),
new google.maps.LatLng(34.105460, -117.712550),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#224511",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109840, -117.719290),
new google.maps.LatLng(34.109610, -117.719370),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295314",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102000, -117.708030),
new google.maps.LatLng(34.102000, -117.708490),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#306018",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095610, -117.719300),
new google.maps.LatLng(34.095870, -117.719300),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#214210",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105540, -117.707150),
new google.maps.LatLng(34.105590, -117.707390),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#376f1b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103510, -117.726820),
new google.maps.LatLng(34.101610, -117.726800),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#306018",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098640, -117.715810),
new google.maps.LatLng(34.098660, -117.716570),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#122409",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096480, -117.712290),
new google.maps.LatLng(34.096650, -117.712690),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264c13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103360, -117.714920),
new google.maps.LatLng(34.102800, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#f1e07'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097590, -117.717880),
new google.maps.LatLng(34.098600, -117.717840),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#152b0a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096980, -117.723170),
new google.maps.LatLng(34.097360, -117.723070),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264c13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100680, -117.724130),
new google.maps.LatLng(34.100890, -117.723900),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#224411",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.092190, -117.717990),
new google.maps.LatLng(34.092190, -117.719210),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#316218",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102030, -117.709970),
new google.maps.LatLng(34.102030, -117.710200),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264c13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098390, -117.725220),
new google.maps.LatLng(34.098420, -117.725420),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2b5615",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106710, -117.709300),
new google.maps.LatLng(34.106820, -117.710320),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#306018",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106180, -117.709910),
new google.maps.LatLng(34.105960, -117.710330),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2c5816",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103360, -117.716680),
new google.maps.LatLng(34.102600, -117.716660),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#81104'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101980, -117.710350),
new google.maps.LatLng(34.101990, -117.710980),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244812",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098510, -117.722800),
new google.maps.LatLng(34.098570, -117.722390),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#204010",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107010, -117.720210),
new google.maps.LatLng(34.106050, -117.720260),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1d3b0e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094660, -117.716420),
new google.maps.LatLng(34.095610, -117.716370),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254a12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102040, -117.707400),
new google.maps.LatLng(34.102020, -117.707400),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#336619",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096120, -117.709880),
new google.maps.LatLng(34.096130, -117.709990),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#306118",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104080, -117.709060),
new google.maps.LatLng(34.104090, -117.709360),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2c5816",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094970, -117.719300),
new google.maps.LatLng(34.095610, -117.719300),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244812",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099540, -117.724310),
new google.maps.LatLng(34.099710, -117.724160),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244912",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098650, -117.714930),
new google.maps.LatLng(34.099180, -117.714930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#14290a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102800, -117.714920),
new google.maps.LatLng(34.102410, -117.714910),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#d1b06'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102610, -117.714910),
new google.maps.LatLng(34.102410, -117.714910),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#d1b06'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.093720, -117.721170),
new google.maps.LatLng(34.093730, -117.719260),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2d5b16",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101540, -117.711680),
new google.maps.LatLng(34.101410, -117.711990),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1d3b0e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109880, -117.717000),
new google.maps.LatLng(34.108860, -117.717000),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295214",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100890, -117.705870),
new google.maps.LatLng(34.100930, -117.705920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3b761d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095150, -117.720000),
new google.maps.LatLng(34.095310, -117.720000),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244912",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099590, -117.705920),
new google.maps.LatLng(34.099610, -117.707070),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3c781e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.091410, -117.712580),
new google.maps.LatLng(34.091410, -117.714860),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3a751d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103450, -117.720240),
new google.maps.LatLng(34.101620, -117.720220),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#102008",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107010, -117.720230),
new google.maps.LatLng(34.106550, -117.720210),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1d3b0e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.093660, -117.717970),
new google.maps.LatLng(34.093730, -117.719260),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295314",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101620, -117.710910),
new google.maps.LatLng(34.101620, -117.711450),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#214210",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.110040, -117.714950),
new google.maps.LatLng(34.109370, -117.714930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2b5715",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103370, -117.714280),
new google.maps.LatLng(34.103360, -117.714910),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#122409",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101200, -117.712650),
new google.maps.LatLng(34.101420, -117.712630),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#18310c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107240, -117.713230),
new google.maps.LatLng(34.107330, -117.714940),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#224511",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098580, -117.725220),
new google.maps.LatLng(34.098570, -117.724330),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5515",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104430, -117.707130),
new google.maps.LatLng(34.104490, -117.708360),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#366c1b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105380, -117.712420),
new google.maps.LatLng(34.105380, -117.712550),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1f3e0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104380, -117.715590),
new google.maps.LatLng(34.104400, -117.716680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#102008",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099640, -117.709340),
new google.maps.LatLng(34.099660, -117.709870),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5515",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097840, -117.707030),
new google.maps.LatLng(34.099600, -117.707070),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#39721c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102600, -117.709300),
new google.maps.LatLng(34.102630, -117.710360),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295314",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097610, -117.716380),
new google.maps.LatLng(34.097910, -117.716380),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#162c0b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098690, -117.709690),
new google.maps.LatLng(34.098700, -117.709700),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5515",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101620, -117.716680),
new google.maps.LatLng(34.101620, -117.717470),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#40802'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107530, -117.718430),
new google.maps.LatLng(34.107370, -117.718430),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1d3a0e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100140, -117.724120),
new google.maps.LatLng(34.100680, -117.724130),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234611",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101990, -117.711050),
new google.maps.LatLng(34.101930, -117.711060),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#204110",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104380, -117.722430),
new google.maps.LatLng(34.103530, -117.722440),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1c380e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102610, -117.711470),
new google.maps.LatLng(34.101620, -117.711450),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3d0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105330, -117.711500),
new google.maps.LatLng(34.105340, -117.712320),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234611",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095810, -117.711340),
new google.maps.LatLng(34.095730, -117.711880),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2b5715",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109890, -117.716110),
new google.maps.LatLng(34.109880, -117.717000),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295314",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096610, -117.719290),
new google.maps.LatLng(34.097090, -117.719300),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1c380e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100870, -117.725270),
new google.maps.LatLng(34.100910, -117.725160),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285014",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096490, -117.723740),
new google.maps.LatLng(34.096510, -117.723290),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5415",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094680, -117.718610),
new google.maps.LatLng(34.094670, -117.717910),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254a12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095610, -117.717120),
new google.maps.LatLng(34.095610, -117.716370),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1f3f0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097720, -117.722930),
new google.maps.LatLng(34.098510, -117.722800),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#224511",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095610, -117.716370),
new google.maps.LatLng(34.096630, -117.716370),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#204010",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101610, -117.718440),
new google.maps.LatLng(34.101620, -117.717470),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#50a02'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105930, -117.708110),
new google.maps.LatLng(34.105930, -117.708370),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#34681a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.090870, -117.719280),
new google.maps.LatLng(34.092190, -117.719210),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#38711c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109420, -117.715930),
new google.maps.LatLng(34.109880, -117.715920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#274e13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099760, -117.727280),
new google.maps.LatLng(34.098620, -117.727330),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#336619",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105310, -117.727960),
new google.maps.LatLng(34.105280, -117.726850),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#38701c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102410, -117.714910),
new google.maps.LatLng(34.101620, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#d1a06'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108980, -117.718650),
new google.maps.LatLng(34.108670, -117.718630),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244912",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106170, -117.723190),
new google.maps.LatLng(34.106170, -117.722430),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244912",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106980, -117.722370),
new google.maps.LatLng(34.107000, -117.720810),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244812",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098600, -117.717130),
new google.maps.LatLng(34.098660, -117.716570),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#102108",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096520, -117.711960),
new google.maps.LatLng(34.096520, -117.712080),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#274e13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101620, -117.714920),
new google.maps.LatLng(34.101620, -117.716680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#d1a06'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098720, -117.729030),
new google.maps.LatLng(34.100790, -117.729050),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3d7a1e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105920, -117.718440),
new google.maps.LatLng(34.105390, -117.718440),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#152a0a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099300, -117.718430),
new google.maps.LatLng(34.099630, -117.718440),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#d1b06'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098600, -117.723980),
new google.maps.LatLng(34.098820, -117.723940),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254a12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100880, -117.724560),
new google.maps.LatLng(34.100810, -117.724350),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244812",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103050, -117.732860),
new google.maps.LatLng(34.102980, -117.732620),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#4e9d27",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103530, -117.729060),
new google.maps.LatLng(34.102930, -117.729060),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3b771d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104020, -117.709360),
new google.maps.LatLng(34.104020, -117.709890),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5515",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105440, -117.724130),
new google.maps.LatLng(34.105360, -117.723800),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264d13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099630, -117.716660),
new google.maps.LatLng(34.100630, -117.716660),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#c1806'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099780, -117.726640),
new google.maps.LatLng(34.099760, -117.727280),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2f5f17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106720, -117.710320),
new google.maps.LatLng(34.106730, -117.710560),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2c5816",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096610, -117.717880),
new google.maps.LatLng(34.097590, -117.717880),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1a350d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105830, -117.713080),
new google.maps.LatLng(34.105830, -117.713170),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3c0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106190, -117.710320),
new google.maps.LatLng(34.105960, -117.710330),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5515",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103940, -117.710080),
new google.maps.LatLng(34.103890, -117.710640),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#274e13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106440, -117.727950),
new google.maps.LatLng(34.106470, -117.727470),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3a741d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099380, -117.724700),
new google.maps.LatLng(34.099390, -117.724490),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264d13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099610, -117.707070),
new google.maps.LatLng(34.099650, -117.709250),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#366c1b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096630, -117.713200),
new google.maps.LatLng(34.096620, -117.714000),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#224411",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096210, -117.708550),
new google.maps.LatLng(34.096680, -117.709060),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#356b1a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105360, -117.719150),
new google.maps.LatLng(34.105390, -117.718440),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#132709",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094680, -117.719250),
new google.maps.LatLng(34.094760, -117.719300),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254b12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106240, -117.725420),
new google.maps.LatLng(34.105600, -117.724510),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2e5c17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105540, -117.707930),
new google.maps.LatLng(34.105550, -117.708590),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#34681a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101990, -117.710980),
new google.maps.LatLng(34.101990, -117.711050),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#214210",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097480, -117.709170),
new google.maps.LatLng(34.097720, -117.709090),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2f5f17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101610, -117.726800),
new google.maps.LatLng(34.101610, -117.725690),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2f5f17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102770, -117.720230),
new google.maps.LatLng(34.101620, -117.720220),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#e1d07'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100180, -117.726040),
new google.maps.LatLng(34.100080, -117.725610),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2c5916",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107170, -117.720380),
new google.maps.LatLng(34.107010, -117.720350),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3d0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108520, -117.725370),
new google.maps.LatLng(34.108400, -117.725580),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#34691a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101930, -117.711450),
new google.maps.LatLng(34.101620, -117.711450),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3d0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103530, -117.729070),
new google.maps.LatLng(34.102580, -117.729060),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3b771d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106530, -117.726120),
new google.maps.LatLng(34.106500, -117.725910),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#326419",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098600, -117.717840),
new google.maps.LatLng(34.098660, -117.718400),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#102108",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096130, -117.709990),
new google.maps.LatLng(34.096150, -117.710630),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#306018",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104520, -117.710650),
new google.maps.LatLng(34.104520, -117.711020),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254a12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098730, -117.709720),
new google.maps.LatLng(34.098650, -117.711230),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5515",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095870, -117.719300),
new google.maps.LatLng(34.096140, -117.719300),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1f3f0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104450, -117.731800),
new google.maps.LatLng(34.103930, -117.731780),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#4a9425",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107330, -117.714940),
new google.maps.LatLng(34.107350, -117.716680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3d0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106990, -117.722370),
new google.maps.LatLng(34.107010, -117.720350),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244812",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095330, -117.719300),
new google.maps.LatLng(34.095610, -117.719300),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#224511",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096480, -117.723870),
new google.maps.LatLng(34.096490, -117.723620),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5515",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098560, -117.709500),
new google.maps.LatLng(34.098690, -117.709690),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2b5715",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099590, -117.706160),
new google.maps.LatLng(34.099600, -117.707070),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3a751d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096530, -117.722020),
new google.maps.LatLng(34.096540, -117.721510),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234711",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104400, -117.724560),
new google.maps.LatLng(34.104370, -117.722430),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264c13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.110170, -117.718230),
new google.maps.LatLng(34.110170, -117.717780),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5515",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106300, -117.723770),
new google.maps.LatLng(34.106170, -117.723190),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#274e13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107890, -117.720260),
new google.maps.LatLng(34.107010, -117.720210),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#214310",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102740, -117.722450),
new google.maps.LatLng(34.102460, -117.722450),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#19330c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094670, -117.717910),
new google.maps.LatLng(34.095610, -117.717910),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244912",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103230, -117.709300),
new google.maps.LatLng(34.103160, -117.709530),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5415",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103500, -117.724560),
new google.maps.LatLng(34.103450, -117.720240),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254a12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096620, -117.714000),
new google.maps.LatLng(34.096610, -117.714860),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#204010",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100790, -117.723130),
new google.maps.LatLng(34.100610, -117.722720),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1d3a0e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105550, -117.708590),
new google.maps.LatLng(34.105440, -117.708830),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#316218",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095740, -117.712200),
new google.maps.LatLng(34.095730, -117.712110),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295214",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102020, -117.707620),
new google.maps.LatLng(34.102000, -117.707620),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#326419",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095900, -117.709680),
new google.maps.LatLng(34.096010, -117.709730),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#316318",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105360, -117.723800),
new google.maps.LatLng(34.105320, -117.723450),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244912",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101640, -117.712870),
new google.maps.LatLng(34.101650, -117.713150),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#172e0b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095730, -117.712110),
new google.maps.LatLng(34.095730, -117.711880),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295214",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096970, -117.720000),
new google.maps.LatLng(34.096820, -117.719980),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1c380e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.093880, -117.714930),
new google.maps.LatLng(34.094510, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5515",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096430, -117.713080),
new google.maps.LatLng(34.096430, -117.713170),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234711",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106990, -117.715590),
new google.maps.LatLng(34.107000, -117.716700),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1b370d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095990, -117.708520),
new google.maps.LatLng(34.096210, -117.708550),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#366d1b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.093170, -117.714920),
new google.maps.LatLng(34.093880, -117.714930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2e5c17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098570, -117.722390),
new google.maps.LatLng(34.099670, -117.722410),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3c0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108540, -117.714980),
new google.maps.LatLng(34.107820, -117.714950),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244812",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095660, -117.709430),
new google.maps.LatLng(34.095660, -117.709680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#336719",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100650, -117.713360),
new google.maps.LatLng(34.100610, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#152b0a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105320, -117.720250),
new google.maps.LatLng(34.104360, -117.720250),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#162d0b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.110170, -117.717780),
new google.maps.LatLng(34.110090, -117.716980),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5415",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108220, -117.719260),
new google.maps.LatLng(34.108400, -117.719380),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#214310",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098940, -117.726920),
new google.maps.LatLng(34.098640, -117.726910),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#326419",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105030, -117.710880),
new google.maps.LatLng(34.105300, -117.710890),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254a12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103770, -117.706160),
new google.maps.LatLng(34.103770, -117.707110),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3a751d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096610, -117.714860),
new google.maps.LatLng(34.097590, -117.714940),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1d3b0e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104410, -117.714280),
new google.maps.LatLng(34.104410, -117.714930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#14290a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097090, -117.708950),
new google.maps.LatLng(34.097480, -117.709170),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#316318",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105900, -117.707140),
new google.maps.LatLng(34.105920, -117.707860),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#38711c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097910, -117.716380),
new google.maps.LatLng(34.098140, -117.716370),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#14290a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102160, -117.708030),
new google.maps.LatLng(34.102000, -117.708030),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#306018",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105950, -117.710590),
new google.maps.LatLng(34.105920, -117.711380),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285114",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095670, -117.712570),
new google.maps.LatLng(34.095750, -117.712620),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285014",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101570, -117.712730),
new google.maps.LatLng(34.101640, -117.712870),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#18300c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109370, -117.714930),
new google.maps.LatLng(34.108780, -117.714940),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285014",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097610, -117.718610),
new google.maps.LatLng(34.097590, -117.717880),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#162c0b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105960, -117.710330),
new google.maps.LatLng(34.105950, -117.710590),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5415",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105830, -117.713170),
new google.maps.LatLng(34.104400, -117.713210),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1d3b0e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108560, -117.718520),
new google.maps.LatLng(34.108520, -117.718270),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#224511",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107000, -117.720810),
new google.maps.LatLng(34.107010, -117.720350),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1f3e0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095630, -117.720670),
new google.maps.LatLng(34.095610, -117.719300),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234711",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100400, -117.707070),
new google.maps.LatLng(34.099600, -117.707070),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#356b1a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104350, -117.720480),
new google.maps.LatLng(34.104360, -117.720250),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#132709",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105670, -117.707660),
new google.maps.LatLng(34.105680, -117.707930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#356b1a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097580, -117.711190),
new google.maps.LatLng(34.097620, -117.711390),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264d13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096640, -117.714000),
new google.maps.LatLng(34.096610, -117.714860),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1f3f0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097360, -117.723070),
new google.maps.LatLng(34.097720, -117.722930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244912",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098910, -117.724340),
new google.maps.LatLng(34.098570, -117.724330),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264c13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103370, -117.715570),
new google.maps.LatLng(34.103360, -117.716680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#c1806'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105300, -117.710890),
new google.maps.LatLng(34.105330, -117.711500),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254b12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101410, -117.711990),
new google.maps.LatLng(34.101270, -117.712250),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1c380e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095650, -117.712510),
new google.maps.LatLng(34.095670, -117.712570),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285014",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105380, -117.715580),
new google.maps.LatLng(34.105390, -117.716660),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#14280a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100150, -117.713950),
new google.maps.LatLng(34.100590, -117.713940),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#132709",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104750, -117.707150),
new google.maps.LatLng(34.104430, -117.707130),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#366d1b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098640, -117.719530),
new google.maps.LatLng(34.098660, -117.718400),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#132609",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103350, -117.711490),
new google.maps.LatLng(34.103360, -117.713170),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1f3e0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103800, -117.709300),
new google.maps.LatLng(34.103230, -117.709300),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5515",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094760, -117.719300),
new google.maps.LatLng(34.094970, -117.719300),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254a12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102930, -117.729060),
new google.maps.LatLng(34.101640, -117.729060),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3b761d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109070, -117.723040),
new google.maps.LatLng(34.109120, -117.722990),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2e5d17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099630, -117.718440),
new google.maps.LatLng(34.100650, -117.718460),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#c1806'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096440, -117.725400),
new google.maps.LatLng(34.096490, -117.723740),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#306118",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105320, -117.722450),
new google.maps.LatLng(34.105320, -117.720250),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3d0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097590, -117.714400),
new google.maps.LatLng(34.097590, -117.714940),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1a350d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.092980, -117.715610),
new google.maps.LatLng(34.093020, -117.715600),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2e5c17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095440, -117.708250),
new google.maps.LatLng(34.095900, -117.708400),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#39721c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.092830, -117.717300),
new google.maps.LatLng(34.092150, -117.717300),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2e5c17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096430, -117.725400),
new google.maps.LatLng(34.096480, -117.723870),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#306118",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106260, -117.712400),
new google.maps.LatLng(34.106340, -117.712650),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#224411",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100060, -117.714340),
new google.maps.LatLng(34.100080, -117.714000),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#122409",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109050, -117.725610),
new google.maps.LatLng(34.108520, -117.725370),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#376e1b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103110, -117.710380),
new google.maps.LatLng(34.103110, -117.710380),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244912",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109120, -117.720520),
new google.maps.LatLng(34.108340, -117.720410),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285014",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.093730, -117.719260),
new google.maps.LatLng(34.094200, -117.719260),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5415",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098820, -117.723940),
new google.maps.LatLng(34.099210, -117.723740),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244812",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106180, -117.709720),
new google.maps.LatLng(34.106180, -117.709910),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2d5a16",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095300, -117.708220),
new google.maps.LatLng(34.095440, -117.708250),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#39731c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.110410, -117.715030),
new google.maps.LatLng(34.110190, -117.714930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2d5a16",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106340, -117.712650),
new google.maps.LatLng(34.106370, -117.712650),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#214310",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.093730, -117.717260),
new google.maps.LatLng(34.093660, -117.717970),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295214",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094820, -117.709600),
new google.maps.LatLng(34.095900, -117.709680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#356b1a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105390, -117.716660),
new google.maps.LatLng(34.104400, -117.716670),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#122509",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108520, -117.723720),
new google.maps.LatLng(34.108500, -117.723160),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2e5d17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108220, -117.720270),
new google.maps.LatLng(34.107890, -117.720260),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234611",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105480, -117.710020),
new google.maps.LatLng(34.105610, -117.711500),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5415",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097060, -117.720130),
new google.maps.LatLng(34.097020, -117.720030),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1b370d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102460, -117.722450),
new google.maps.LatLng(34.101610, -117.722410),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#19330c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103310, -117.710790),
new google.maps.LatLng(34.103100, -117.710800),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#224511",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103300, -117.710380),
new google.maps.LatLng(34.103310, -117.710790),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244912",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094630, -117.720010),
new google.maps.LatLng(34.095150, -117.720000),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#274e13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095620, -117.714920),
new google.maps.LatLng(34.096610, -117.714860),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#224411",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105660, -117.707430),
new google.maps.LatLng(34.105710, -117.707510),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#366d1b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098580, -117.725410),
new google.maps.LatLng(34.098580, -117.725220),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2b5715",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103180, -117.731600),
new google.maps.LatLng(34.102980, -117.731620),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#489024",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100100, -117.713980),
new google.maps.LatLng(34.100150, -117.713950),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#132709",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094510, -117.714920),
new google.maps.LatLng(34.094510, -117.714960),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#274f13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095600, -117.715670),
new google.maps.LatLng(34.095610, -117.716370),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#214210",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095090, -117.708210),
new google.maps.LatLng(34.095300, -117.708220),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3a741d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102260, -117.730460),
new google.maps.LatLng(34.101640, -117.729060),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#428421",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109580, -117.723720),
new google.maps.LatLng(34.108520, -117.723720),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#326519",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102020, -117.707400),
new google.maps.LatLng(34.102020, -117.707620),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#336619",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107630, -117.718400),
new google.maps.LatLng(34.107530, -117.718430),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1d3b0e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096970, -117.723150),
new google.maps.LatLng(34.097720, -117.722930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264c13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095790, -117.709690),
new google.maps.LatLng(34.095900, -117.709680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#326419",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106730, -117.710560),
new google.maps.LatLng(34.106200, -117.710570),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2b5615",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105900, -117.707130),
new google.maps.LatLng(34.105900, -117.707140),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#38711c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105600, -117.724510),
new google.maps.LatLng(34.105440, -117.724130),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285114",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100360, -117.725530),
new google.maps.LatLng(34.100630, -117.725590),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295314",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100820, -117.705640),
new google.maps.LatLng(34.100850, -117.705760),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3c791e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108860, -117.717000),
new google.maps.LatLng(34.108760, -117.717310),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234711",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095740, -117.713180),
new google.maps.LatLng(34.095620, -117.714920),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264c13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.107090, -117.725950),
new google.maps.LatLng(34.106990, -117.725570),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#326519",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104020, -117.709890),
new google.maps.LatLng(34.103940, -117.710080),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285014",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108400, -117.725580),
new google.maps.LatLng(34.108080, -117.725890),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#356a1a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094620, -117.721780),
new google.maps.LatLng(34.094610, -117.720660),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2a5515",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.090450, -117.718010),
new google.maps.LatLng(34.090450, -117.719280),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3a741d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099660, -117.709780),
new google.maps.LatLng(34.099640, -117.714930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285114",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105940, -117.712570),
new google.maps.LatLng(34.105830, -117.713080),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#204110",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095840, -117.712300),
new google.maps.LatLng(34.095840, -117.712250),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#285014",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104420, -117.719130),
new google.maps.LatLng(34.104390, -117.718410),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#f1f07'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097600, -117.715690),
new google.maps.LatLng(34.097610, -117.716380),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#172e0b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096490, -117.723620),
new google.maps.LatLng(34.096510, -117.723290),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295314",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108510, -117.717600),
new google.maps.LatLng(34.107400, -117.717430),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#214310",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095650, -117.711140),
new google.maps.LatLng(34.096580, -117.711150),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2d5a16",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097720, -117.709090),
new google.maps.LatLng(34.097960, -117.709280),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2f5f17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103760, -117.710790),
new google.maps.LatLng(34.103310, -117.710790),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234611",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102510, -117.718430),
new google.maps.LatLng(34.101610, -117.718440),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#50b02'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105990, -117.709820),
new google.maps.LatLng(34.105960, -117.710330),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2c5816",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106190, -117.713170),
new google.maps.LatLng(34.105390, -117.713180),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1f3e0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099670, -117.722410),
new google.maps.LatLng(34.100650, -117.722430),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1b370d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095880, -117.708700),
new google.maps.LatLng(34.095990, -117.708520),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#366c1b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099600, -117.707070),
new google.maps.LatLng(34.099640, -117.709250),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#366c1b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098650, -117.712590),
new google.maps.LatLng(34.098650, -117.713180),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1d3b0e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098310, -117.719580),
new google.maps.LatLng(34.098510, -117.719880),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#152a0a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104370, -117.722430),
new google.maps.LatLng(34.104350, -117.720480),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1c380e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100790, -117.729050),
new google.maps.LatLng(34.101110, -117.729050),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3b761d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.090450, -117.719280),
new google.maps.LatLng(34.090800, -117.719220),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3a751d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096430, -117.713170),
new google.maps.LatLng(34.096630, -117.713200),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234611",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100890, -117.723900),
new google.maps.LatLng(34.101040, -117.723550),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#214210",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096520, -117.712080),
new google.maps.LatLng(34.096480, -117.712290),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264d13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102710, -117.731720),
new google.maps.LatLng(34.102210, -117.730480),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#489124",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.092190, -117.719210),
new google.maps.LatLng(34.093730, -117.719260),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#326419",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098570, -117.723980),
new google.maps.LatLng(34.098570, -117.723600),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254a12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104420, -117.729070),
new google.maps.LatLng(34.103530, -117.729060),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3c791e",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101930, -117.711060),
new google.maps.LatLng(34.101930, -117.711450),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#204110",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106950, -117.718440),
new google.maps.LatLng(34.105920, -117.718440),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1a340d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098640, -117.714930),
new google.maps.LatLng(34.098650, -117.714930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#14290a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095340, -117.711900),
new google.maps.LatLng(34.095730, -117.711880),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2b5715",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102460, -117.722420),
new google.maps.LatLng(34.102160, -117.722390),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#19320c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.110650, -117.714580),
new google.maps.LatLng(34.110190, -117.714930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2f5e17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.093720, -117.717630),
new google.maps.LatLng(34.093660, -117.717970),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295214",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100430, -117.724130),
new google.maps.LatLng(34.100680, -117.724130),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#224511",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104910, -117.706820),
new google.maps.LatLng(34.104750, -117.707150),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#38711c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095310, -117.720000),
new google.maps.LatLng(34.095330, -117.719300),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234711",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098640, -117.714810),
new google.maps.LatLng(34.098640, -117.714950),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#152a0a",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095900, -117.708400),
new google.maps.LatLng(34.095990, -117.708520),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#376e1b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096150, -117.710630),
new google.maps.LatLng(34.096140, -117.711120),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2d5a16",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099390, -117.725210),
new google.maps.LatLng(34.099380, -117.724700),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#295214",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.092210, -117.714920),
new google.maps.LatLng(34.092760, -117.714950),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#326519",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.090800, -117.719220),
new google.maps.LatLng(34.090870, -117.719280),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#39721c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108780, -117.714940),
new google.maps.LatLng(34.108540, -117.714980),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254b12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.106190, -117.714290),
new google.maps.LatLng(34.105380, -117.714280),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1b360d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.101370, -117.729060),
new google.maps.LatLng(34.101640, -117.729060),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3b761d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104400, -117.716680),
new google.maps.LatLng(34.103360, -117.716680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#d1b06'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100570, -117.703790),
new google.maps.LatLng(34.100370, -117.703750),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#468c23",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105380, -117.714280),
new google.maps.LatLng(34.105380, -117.714930),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#18300c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097090, -117.719300),
new google.maps.LatLng(34.097590, -117.719300),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1a340d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.097620, -117.711390),
new google.maps.LatLng(34.097620, -117.712580),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#254b12",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104400, -117.716670),
new google.maps.LatLng(34.103360, -117.716680),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#d1b06'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098570, -117.724330),
new google.maps.LatLng(34.098570, -117.723600),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264d13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.103890, -117.710640),
new google.maps.LatLng(34.103730, -117.710640),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#244812",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105280, -117.726850),
new google.maps.LatLng(34.104400, -117.726820),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#326519",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096570, -117.720670),
new google.maps.LatLng(34.096580, -117.720260),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1f3e0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102560, -117.708100),
new google.maps.LatLng(34.102160, -117.708030),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2f5f17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102700, -117.711470),
new google.maps.LatLng(34.102700, -117.711470),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1e3d0f",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105490, -117.710890),
new google.maps.LatLng(34.105490, -117.711500),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264c13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100060, -117.703790),
new google.maps.LatLng(34.099560, -117.703790),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#468c23",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.095250, -117.711480),
new google.maps.LatLng(34.095270, -117.711870),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2d5a16",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.109030, -117.719510),
new google.maps.LatLng(34.109100, -117.719520),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264c13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094590, -117.715680),
new google.maps.LatLng(34.094660, -117.716420),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#264c13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.104070, -117.708350),
new google.maps.LatLng(34.104080, -117.709060),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2f5f17",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.094640, -117.722000),
new google.maps.LatLng(34.094620, -117.721780),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2b5615",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100140, -117.724140),
new google.maps.LatLng(34.100430, -117.724130),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#234611",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102620, -117.730310),
new google.maps.LatLng(34.102260, -117.730460),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#418320",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.099630, -117.718420),
new google.maps.LatLng(34.100650, -117.718460),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#c1806'",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102580, -117.729060),
new google.maps.LatLng(34.102070, -117.729050),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3b761d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.105810, -117.707140),
new google.maps.LatLng(34.105900, -117.707130),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#38701c",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100850, -117.705760),
new google.maps.LatLng(34.100890, -117.705870),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#3b771d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.098650, -117.714390),
new google.maps.LatLng(34.098650, -117.714810),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#162d0b",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.096620, -117.718600),
new google.maps.LatLng(34.096610, -117.717880),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#1b360d",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100290, -117.703750),
new google.maps.LatLng(34.100060, -117.703790),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#468c23",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.100910, -117.725160),
new google.maps.LatLng(34.100880, -117.724560),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#274f13",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.102210, -117.730480),
new google.maps.LatLng(34.101640, -117.729060),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#428421",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


lineSymbol = {
path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};
var PolylineCoordinates = [
new google.maps.LatLng(34.108540, -117.723070),
new google.maps.LatLng(34.108650, -117.723040),
];

var Path = new google.maps.Polyline({
clickable: false,
geodesic: true,
path: PolylineCoordinates,
icons: [{
icon:lineSymbol,
offset: "100%" 
}],
strokeColor: "#2c5816",
strokeOpacity: 1.000000,
strokeWeight: 4.000000
});

Path.setMap(map);


	}
