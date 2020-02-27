# Leaflet.Marker.ColorFilter
A leaflet plugin that helps change the color of markers and some other filter properties.

This plugin is heavily ispired by [xtk93x/Leaflet.TileLayer.ColorFilter](https://github.com/xtk93x/Leaflet.TileLayer.ColorFilter) and [bbecquet/Leaflet.RotatedMarker](https://github.com/bbecquet/Leaflet.RotatedMarker)

I needed the same functionality with markers and this plugin was born.

## Demo
Click [here](https://ozturkkl.github.io/Leaflet.Marker.ColorFilter/demo/) to view the demo.

## Usage
Fist download the [source file](https://raw.githubusercontent.com/ozturkkl/Leaflet.Marker.ColorFilter/master/src/leaflet-marker-filter.js) and include it in your project after Leaflet.

Use it while initializing the marker:
```js
const marker = L.marker(CINCINNATI_LAT_LNG, {
    icon: custom_icon,
    filter: {
        blur: 0,
        contrast: 100,
        grayscale: 0,
        hueRotate: 0,
        brightness: 100,
        saturate: 100,
    }
}).addTo(map);
```

Use it after the initialization with the method setFilter()
```js
marker.setFilter({
    blur: 0,
    contrast: 100,
    grayscale: 0,
    hueRotate: 0,
    brightness: 100,
    saturate: 100,
});
```

Other useful functions: 
```js
console.log(marker.getFilter())     // Will return the filter object currently applied.
marker.resetFilter()                // Will reset the marker to its original glory.
```
