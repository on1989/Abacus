if($('#map').length){
	google.maps.event.addDomListener(window, 'load', init);
	var mapCoordinatesLat = $('#map').data('lat'),
		mapCoordinatesLng = $('#map').data('lng');

	function init() {
		var mapOptions = {
			zoom: 11,
			center: new google.maps.LatLng(+mapCoordinatesLat,+mapCoordinatesLng),
			styles: [{
				"featureType": "landscape.man_made",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f7f1df"
				}]
			}, {
				"featureType": "landscape.natural",
				"elementType": "geometry",
				"stylers": [{
					"color": "#d0e3b4"
				}]
			}, {
				"featureType": "landscape.natural.terrain",
				"elementType": "geometry",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "poi",
				"elementType": "labels",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "poi.business",
				"elementType": "all",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "poi.medical",
				"elementType": "geometry",
				"stylers": [{
					"color": "#fbd3da"
				}]
			}, {
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [{
					"color": "#bde6ab"
				}]
			}, {
				"featureType": "road",
				"elementType": "geometry.stroke",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "road",
				"elementType": "labels",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#F0BC5E"
				}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [{
					"color": "#efd151"
				}]
			}, {
				"featureType": "road.arterial",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#ffffff"
				}]
			}, {
				"featureType": "road.local",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "black"
				}]
			}, {
				"featureType": "transit.station.airport",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#cfb2db"
				}]
			}, {
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [{
					"color": "#a2daf2"
				}]
			}]
		};
		var mapElement = document.getElementById('map');
		var map = new google.maps.Map(mapElement, mapOptions);
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(+mapCoordinatesLat, +mapCoordinatesLng),
			map: map,
			icon:'../icons/marker.svg'
		});
	}
}
