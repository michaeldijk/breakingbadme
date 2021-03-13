let mymap = L.map('mapid').setView([35.11811482487477, -106.59887670136685], 10);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGlqa204OCIsImEiOiJja2x6OHhtcTAxdGwxMnZvMzQ0ZTdjaG9hIn0.s6yfZuBI6mhQIB-bhDQO4g', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGlqa204OCIsImEiOiJja2x6OHhtcTAxdGwxMnZvMzQ0ZTdjaG9hIn0.s6yfZuBI6mhQIB-bhDQO4g'
}).addTo(mymap);

// Walter White's House
let marker1 = L.marker([35.12640132916876, -106.53660537438093]);
// Hooligan's Tavern
let marker2 = L.marker([35.13027443181194, -106.53227049369545]);
// Octopus Car-wash
let marker3 = L.marker([35.10839191045314, -106.53554975903837]);

function selectPlace(menu) {
    if (menu.value == '1') {
        marker3.remove();
        marker2.remove();
        marker1.remove();
        let marker = marker1.addTo(mymap);
        marker.bindPopup('<img src="https://na.rdcpix.com/625946635/a545dc497c1d4e1385851ca5e12f5a14w-c0xd-w640_h480_q80.jpg" width="100px" height="100px"><br><p>Walter Whites House</p>').openPopup();
    } else if (menu.value == '2') {
        marker3.remove();
        marker2.remove();
        marker1.remove();
        let marker = marker2.addTo(mymap);
        marker.bindPopup('<img src="https://na.rdcpix.com/625946635/a545dc497c1d4e1385851ca5e12f5a14w-c0xd-w640_h480_q80.jpg" width="100px" height="100px"><br><p>Walter Whites House</p>').openPopup();
        marker.flyTo;
    } else if (menu.value == '3') {
        marker3.remove();
        marker2.remove();
        marker1.remove();
        let marker = marker3.addTo(mymap);
        marker.bindPopup('<img src="https://na.rdcpix.com/625946635/a545dc497c1d4e1385851ca5e12f5a14w-c0xd-w640_h480_q80.jpg" width="100px" height="100px"><br><p>Walter Whites House</p>').openPopup();
        marker.flyTo;
    } else if (menu.value == '4') {
        let marker = marker3.addTo(mymap);
        let markerSecond = marker2.addTo(mymap);
        let markerThird = marker1.addTo(mymap);
        marker.bindPopup('<img src="https://na.rdcpix.com/625946635/a545dc497c1d4e1385851ca5e12f5a14w-c0xd-w640_h480_q80.jpg" width="100px" height="100px"><br><p>Walter Whites House</p>');
    }
}