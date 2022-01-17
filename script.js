mapboxgl.accessToken = 'pk.eyJ1Ijoibm90dG9oYXZlIiwiYSI6ImNreWdzZ25jdDF3N3cybnFrdHJtYnI0Ym0ifQ.jks0bVFajopGhJmbreNzXQ';
const map = new mapboxgl.Map({
container: 'map', 
tilesize: 512,
style: 'mapbox://styles/mapbox/outdoors-v11', 
center: [-71.3110000, 41.480265], 
zoom: 15
});

var marker = new mapboxgl.Marker()
          .setLngLat([-71.3110000, 41.480265])
          .addTo(map);
