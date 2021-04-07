//const campground = require("../../models/campground");
// The above line will throw an "already declared" error but I choose
// to keep it here for historical purposes.

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10", // stylesheet location
    center: campground.geometry.coordinates, // starting at [lng, lat]
    zoom: 10
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
        .setHTML(
            `<h3>${campground.title}</h3><p>${campground.location}</p>`
        )
    )
    .addTo(map);