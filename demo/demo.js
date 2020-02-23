/* INITIALIZATION */
const MAP_CONTAINER = "map"
const CINCINNATI_LAT_LNG = [39.1039, -84.5123]

const carto_layer = L.tileLayer(
    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    {
        attribution: `<a href="https://carto.com/location-data-services/basemaps/#/next" target="_blank" >Carto</a>`,
        maxNativeZoom: 18,
        maxZoom: 21,
    }
);

const map = L.map(MAP_CONTAINER, {
    center: CINCINNATI_LAT_LNG,
    zoom: 20,
});

const custom_icon = createLeafletIcon("leaflet1.6/images/units/car.png");

carto_layer.addTo(map);








/* ---------------------------- PLUGIN EXAMPLE---------------------------- */
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

marker.setFilter({
    blur: 0,
    contrast: 100,
    grayscale: 0,
    hueRotate: 0,
    brightness: 100,
    saturate: 100,
});

console.log(marker.getFilter())     // Will return the filter object currently applied.

marker.resetFilter()                // Will reset the marker to its original glory.








/* Context Menu & Hover Etc. */
let context_menu = createContextMenu();
document.querySelector('#' + MAP_CONTAINER).append(context_menu);
let unit_active = null;
let dragging = false;
marker.on("mouseover", (e) => {
    if (!dragging) {
        const hover_icon = createLeafletIcon(e.target.options.icon.options.iconUrl.slice(0, -4) + "_hover.png");
        e.target.setIcon(hover_icon);
        e.target.dragging.enable();
    }
})
marker.on("mouseout", (e) => {
    if (!dragging) {
        const icon = createLeafletIcon(e.target.options.icon.options.iconUrl.slice(0, -10) + ".png");
        e.target.setIcon(icon);
    }
})
marker.on("mousedown", (e) => {
    dragging = true;
})
marker.on("mouseup", (e) => {
    dragging = false;
})
marker.on("contextmenu", (e) => {
    setContextMenuLocation(context_menu, e);
    unit_active = e.target;
    context_menu.classList.add("active");
})
map.on("click", (e) => {
    context_menu.classList.remove("active");
})
map.on("contextmenu", (e) => {
    context_menu.classList.remove("active");
})
/* Functions */
function setContextMenuLocation(menu, e) {
    const mapX = map.getSize().x;
    const mapY = map.getSize().y;
    const menuX = menu.offsetWidth;
    const menuY = menu.offsetHeight;
    const mouseX = e.originalEvent.layerX - e.target.options.icon.options.iconAnchor[0];
    const mouseY = e.originalEvent.layerY - e.target.options.icon.options.iconAnchor[1];

    if (mouseX > mapX - menuX)
        menu.style.left = (mouseX - menuX) + "px";
    else
        menu.style.left = mouseX + "px";
    if (mouseY > mapY - menuY)
        menu.style.top = (mouseY - menuY) + "px";
    else
        menu.style.top = mouseY + "px";
}
function addLi(menu, itemLable) {
    let li = document.createElement("li")
    let text = document.createTextNode(itemLable)
    li.appendChild(text)
    menu.appendChild(li);
    return li;
}
function createLeafletIcon(url) {
    const icon = L.icon({
        iconUrl: url,

        iconAnchor: [30, 20], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -20] // point from which the popup should open relative to the iconAnchor
    });
    return icon;
}
function createContextMenu() {
    let context_menu = document.createElement("ul");
    context_menu.setAttribute("id", "context_menu");

    addLi(context_menu, "Change Color").addEventListener("click", (e) => {
        random_degree = Math.floor(Math.random()*360);
        marker.setFilter({
            hueRotate: random_degree,
        })
    });
    addLi(context_menu, "Increase Saturation to 200").addEventListener("click", (e) => {
        marker.setFilter({
            saturate: 200,
        })
    });
    addLi(context_menu, "Decrease Saturation to 50").addEventListener("click", (e) => {
        marker.setFilter({
            saturate: 50,
        })
    });
    addLi(context_menu, "Get Filters").addEventListener("click", (e) => {
        alert(JSON.stringify(marker.getFilter()))
    });
    addLi(context_menu, "Reset Filters").addEventListener("click", (e) => {
        marker.resetFilter()
    });
    addLi(context_menu, "Remove").addEventListener("click", (e) => {
        unit_active.remove();
        alert("Thanks for checking out this demo!")
    });

    return context_menu;
}

