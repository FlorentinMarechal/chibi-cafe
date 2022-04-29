const mymap = L.map('mapid').setView([48.8588897, 2.320041], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 100
    }).addTo(mymap);

    
    const chibiIcon = L.icon({
        iconUrl: './bubbltea-cursor.png',
        
        iconSize:     [400, 200], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
    });

    L.icon = function (chibiIcon) {
        return new L.Icon(chibiIcon);
    };

    const marker = L.marker([48.8588897, 2.320041], {icon: chibiIcon}).addTo(mymap).bindPopup("CHIBI - CAFE");