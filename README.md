# Leaflet.Marker.ColorFilter
A leaflet plugin that helps change the color of markers and some other filter properties.

This plugin is heavily ispired by [xtk93x/Leaflet.TileLayer.ColorFilter](https://github.com/xtk93x/Leaflet.TileLayer.ColorFilter) and [bbecquet/Leaflet.RotatedMarker](https://github.com/bbecquet/Leaflet.RotatedMarker)

I needed the same functionality with markers and this plugin was born.

## Demo
Click [here](https://ozturkkl.github.io/Leaflet.Marker.ColorFilter/demo/) to view the demo.

## Usage
Fist download the [source file](https://raw.githubusercontent.com/ozturkkl/Leaflet.Marker.ColorFilter/master/src/leaflet-marker-filter.js) and include it in your project after Leaflet.
```html
<link rel="stylesheet" href="leaflet.css">
<script src="leaflet.js"></script>
<script src="leaflet-marker-filter.js"></script>
```

Use it while initializing the marker:
```js
const marker = L.marker(CINCINNATI_LAT_LNG, {
    icon: custom_icon,
    filter: {
        blur: "0px",
        brightness: "100%",
        contrast: "0%",
        dropShadow: "0 0 0 black",
        grayscale: "0%",
        hueRotate: "0deg",
        invert: "0%",
        opacity: "100%",
        saturate: "100%",
        sepia: "0%",
    }
}).addTo(map);
```

Use it after the initialization with the method setFilter():
```js
marker.setFilter({
    blur: "0px",
    brightness: "100%",
    contrast: "0%",
    dropShadow: "0 0 0 black",
    grayscale: "0%",
    hueRotate: "0deg",
    invert: "0%",
    opacity: "100%",
    saturate: "100%",
    sepia: "0%",
});
```

Other useful functions: 
```js
console.log(marker.getFilter())     // Will return the filter object currently applied.
marker.resetFilter()                // Will reset the marker to its original glory.
```

## API
Send a js object containing one or more of these attributes like shown above in `Usage` section.
| Filter Name | Example Value | Default Value |
| --- | --- | --- |
| **blur** | "2px" | **"0px"** |
| **brightness** | "200%" | **"100%"** |
| **contrast** | "50%" | **"0%"** |
| **dropShadow** | "5px 5px 5px black" | **"0 0 0 black"** |
| **grayscale** | "50%" | **"0%"** |
| **hueRotate** | "60deg" | **"0deg"** |
| **invert** | "100%" | **"0%"** |
| **opacity** | "70%" | **"100%"** |
| **saturate** | "200%" | **"100%"** |
| **sepia** | "30%" | **"0%"** |

## License
This project is licensed under the MIT License.