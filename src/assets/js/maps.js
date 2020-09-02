function myMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibW9oYW1lZGloZWI5MSIsImEiOiJja2VpNnVpZWUxZzk4MnlveTZqajBoYWxvIn0.9jGmN6WGoXEOBGg9gk4dIA';
        var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/outdoors-v11', //stylesheet location
            center: [11.255, 43.77], // starting position
            zoom: 13 // starting zoom
        });
    
        map.addControl(new mapboxgl.FullscreenControl());
    