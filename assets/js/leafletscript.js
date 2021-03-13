let mymap = L.map('mapid').setView([35.11811482487477, -106.59887670136685], 10);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGlqa204OCIsImEiOiJja2x6OHhtcTAxdGwxMnZvMzQ0ZTdjaG9hIn0.s6yfZuBI6mhQIB-bhDQO4g', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGlqa204OCIsImEiOiJja2x6OHhtcTAxdGwxMnZvMzQ0ZTdjaG9hIn0.s6yfZuBI6mhQIB-bhDQO4g'
}).addTo(mymap);

// Default values:
// Walter White's House
let marker1 = L.marker([35.12640132916876, -106.53660537438093]);
// Hooligan's Tavern
let marker2 = L.marker([35.13027443181194, -106.53227049369545]);
// Octopus Car-wash
let marker3 = L.marker([35.10839191045314, -106.53554975903837]);
// Delta Linen Supplies
let marker4 = L.marker([35.115922947341325, -106.62677721868599]);
// Pinkman Residence
let marker5 = L.marker([35.087774916654794, -106.66558720134941]);
// Java Joe's
let marker6 = L.marker([35.085380206048555, -106.65798340134944]);
// Crossroads Motel
let marker7 = L.marker([35.08314441158377, -106.63553090134943]);
// Ace Metals 
let marker8 = L.marker([34.99894143114057, -106.65983904552925]);
// Twisters Restaurant
let marker9 = L.marker([35.014653639060676, -106.68630100621041]);
// To'hajiilee Indian Reservation 
let marker10 = L.marker([35.09894971787363, -107.11137546291717]);


const placesText = document.getElementById("mapsText");
const placesImage = document.getElementById("mapsImage");

function selectPlace(menu) {
    if (menu.value == '1') {
        marker10.remove();
        marker9.remove();
        marker8.remove();
        marker7.remove();
        marker6.remove();
        marker5.remove();
        marker4.remove();
        marker3.remove();
        marker2.remove();
        marker1.remove();
        let marker = marker1.addTo(mymap);
        marker.bindPopup('<p>3828 Piermont Dr NE</p><p>Albuquerque</p> <p>NM 87111</p>').openPopup();
        placesText.innerHTML = `<p>Generally speaking, standing outside Walter's house and snapping pictures would
        probably a bad idea. In Heisenberg’s Albuquerque, you would most likely find
        yourself dissolving in a plastic barrel, but lucky for us, it’s not such a big deal
        in real life.</p>
    <p>Frances Padilla had no idea what she was getting herself into when she agreed to let
        her home of 40 years become the fictional residence of the turbulent White family.
        On a monthly basis, well over 400 cars, filled to the brim with Breaking Bad fans,
        pull up to her curb and pile out just to take pictures of themselves wearing
        dad-sunglasses and black bowler hats.</p>`;
        placesImage.innerHTML = `<img
        src="https://atlas-assets.roadtrippers.com/uploads/place_image/image/40448570/place_image-image-2473f802-b225-44f0-9f9b-4f6b849fe5db.jpg"
        alt="White Family's House" class="placesImage">`;
    } else if (menu.value == '2') {
        marker10.remove();
        marker9.remove();
        marker8.remove();
        marker7.remove();
        marker6.remove();
        marker5.remove();
        marker4.remove();
        marker3.remove();
        marker2.remove();
        marker1.remove();
        let marker = marker2.addTo(mymap);
        marker.bindPopup('<p>9800 Montgomery Blvd</p><p>Albuquerque</p><p>NM 87111</p>').openPopup();
        marker.flyTo;
        placesText.innerHTML = `<p>Because no Breaking Bad pilgrimage would be complete without a nod to Saul Goodman, we made sure to include a location, Hooligan's Tavern, where you can grab a beer and pay homage to the sleaziest lawyer in the Southwest. This was where the exterior of Saul's office was shot.</p>`;
        placesImage.innerHTML = `<img
        src="https://static.wikia.nocookie.net/breakingbad/images/0/07/SaulOffice.png"
        alt="Better Caul Saul's Office" class="placesImage">`;
    } else if (menu.value == '3') {
        marker10.remove();
        marker9.remove();
        marker8.remove();
        marker7.remove();
        marker6.remove();
        marker5.remove();
        marker4.remove();
        marker3.remove();
        marker2.remove();
        marker1.remove();
        let marker = marker3.addTo(mymap);
        marker.bindPopup('<p>9516 Snow Heights Cir NE</p><p>Albuquerque</p><p>NM 87112</p>').openPopup();
        marker.flyTo;
        placesText.innerHTML = `<p>While Walt and Skyler might have been using their A1A Car Wash to clean dirty cash, the real life counterpart, Octopus Car Wash, focuses primarily on cars. You can pull in for a wash, or just snap some photos, as it’s open to the general public.</p>`;
        placesImage.innerHTML = `<img
        src="https://atlas-assets.roadtrippers.com/uploads/place_image/image/35017864/place_image-image-b592b300-2fc9-4eb4-983a-79fd385473ce.jpg"
        alt="A1A Car Wash" class="placesImage">`;
    } else if (menu.value == '4') {
        marker10.remove();
        marker9.remove();
        marker8.remove();
        marker7.remove();
        marker6.remove();
        marker5.remove();
        marker4.remove();
        marker3.remove();
        marker2.remove();
        marker1.remove();
        let marker = marker4.addTo(mymap);
        marker.bindPopup('<p>1617 Candelaria Rd NW</p><p>Albuquerque</p><p>NM 87107</p>').openPopup();
        marker.flyTo;
        placesText.innerHTML = `<p>There might not be a superlab located deep in the basement of this laundry facility, but you can still visit the location that set the stage for many tense moments between Heisenberg and Fring in Season 4's "Delta Linen Supply."</p>`;
        placesImage.innerHTML = `<img
        src="https://i.pinimg.com/originals/42/c8/9a/42c89ab7c6af2d5992fac46ce59ca29d.jpg"
        alt="Delta Linen Supply" class="placesImage">`;
    } else if (menu.value == '5') {
        marker10.remove();
        marker9.remove();
        marker8.remove();
        marker7.remove();
        marker6.remove();
        marker5.remove();
        marker4.remove();
        marker3.remove();
        marker2.remove();
        marker1.remove();
        let marker = marker5.addTo(mymap);
        marker.bindPopup('<p>322 16th St SW</p><p>Albuquerque</p><p>NM 87104</p>').openPopup();
        marker.flyTo;
        placesText.innerHTML = `<p>This place is on private property. Listing for informational purposes only. Please do not visit without express permission from the land owner. This private residence is the external filming location of Jesse Pinkman's home, on the television program 'Breaking Bad'. It has appeared in every season of the series, and is a favorite spot to visit among fans of the show.  This is a private residence, so please remember to observe respectfully from the road."</p>`;
        placesImage.innerHTML = `<img
        src="https://atlas-assets.roadtrippers.com/uploads/place_image/image/1026991796/place_image-image-f96dfd10-e061-4afc-892c-c2103a7b1a6d.jpg"
        alt="The Pinkman Residence" class="placesImage">`;
    } else if (menu.value == '6') { // ENTER FROM HERE ONWARDS
        marker10.remove();
        marker9.remove();
        marker8.remove();
        marker7.remove();
        marker6.remove();
        marker5.remove();
        marker4.remove();
        marker3.remove();
        marker2.remove();
        marker1.remove();
        let marker = marker6.addTo(mymap);
        marker.bindPopup('<p>322 16th St SW</p><p>Albuquerque</p><p>NM 87104</p>').openPopup();
        marker.flyTo;
        placesText.innerHTML = `<p>This place is on private property. Listing for informational purposes only. Please do not visit without express permission from the land owner. This private residence is the external filming location of Jesse Pinkman's home, on the television program 'Breaking Bad'. It has appeared in every season of the series, and is a favorite spot to visit among fans of the show.  This is a private residence, so please remember to observe respectfully from the road."</p>`;
        placesImage.innerHTML = `<img
        src="https://atlas-assets.roadtrippers.com/uploads/place_image/image/1026991796/place_image-image-f96dfd10-e061-4afc-892c-c2103a7b1a6d.jpg"
        alt="The Pinkman Residence" class="placesImage">`;
    } else if (menu.value == '7') {
        marker10.remove();
        marker9.remove();
        marker8.remove();
        marker7.remove();
        marker6.remove();
        marker5.remove();
        marker4.remove();
        marker3.remove();
        marker2.remove();
        marker1.remove();
        let marker = marker7.addTo(mymap);
        marker.bindPopup('<p>322 16th St SW</p><p>Albuquerque</p><p>NM 87104</p>').openPopup();
        marker.flyTo;
        placesText.innerHTML = `<p>This place is on private property. Listing for informational purposes only. Please do not visit without express permission from the land owner. This private residence is the external filming location of Jesse Pinkman's home, on the television program 'Breaking Bad'. It has appeared in every season of the series, and is a favorite spot to visit among fans of the show.  This is a private residence, so please remember to observe respectfully from the road."</p>`;
        placesImage.innerHTML = `<img
        src="https://atlas-assets.roadtrippers.com/uploads/place_image/image/1026991796/place_image-image-f96dfd10-e061-4afc-892c-c2103a7b1a6d.jpg"
        alt="The Pinkman Residence" class="placesImage">`;
    } else if (menu.value == '8') {
        marker10.remove();
        marker9.remove();
        marker8.remove();
        marker7.remove();
        marker6.remove();
        marker5.remove();
        marker4.remove();
        marker3.remove();
        marker2.remove();
        marker1.remove();
        let marker = marker8.addTo(mymap);
        marker.bindPopup('<p>322 16th St SW</p><p>Albuquerque</p><p>NM 87104</p>').openPopup();
        marker.flyTo;
        placesText.innerHTML = `<p>This place is on private property. Listing for informational purposes only. Please do not visit without express permission from the land owner. This private residence is the external filming location of Jesse Pinkman's home, on the television program 'Breaking Bad'. It has appeared in every season of the series, and is a favorite spot to visit among fans of the show.  This is a private residence, so please remember to observe respectfully from the road."</p>`;
        placesImage.innerHTML = `<img
        src="https://atlas-assets.roadtrippers.com/uploads/place_image/image/1026991796/place_image-image-f96dfd10-e061-4afc-892c-c2103a7b1a6d.jpg"
        alt="The Pinkman Residence" class="placesImage">`;
    } else if (menu.value == '9') {
        marker10.remove();
        marker9.remove();
        marker8.remove();
        marker7.remove();
        marker6.remove();
        marker5.remove();
        marker4.remove();
        marker3.remove();
        marker2.remove();
        marker1.remove();
        let marker = marker9.addTo(mymap);
        marker.bindPopup('<p>322 16th St SW</p><p>Albuquerque</p><p>NM 87104</p>').openPopup();
        marker.flyTo;
        placesText.innerHTML = `<p>This place is on private property. Listing for informational purposes only. Please do not visit without express permission from the land owner. This private residence is the external filming location of Jesse Pinkman's home, on the television program 'Breaking Bad'. It has appeared in every season of the series, and is a favorite spot to visit among fans of the show.  This is a private residence, so please remember to observe respectfully from the road."</p>`;
        placesImage.innerHTML = `<img
        src="https://atlas-assets.roadtrippers.com/uploads/place_image/image/1026991796/place_image-image-f96dfd10-e061-4afc-892c-c2103a7b1a6d.jpg"
        alt="The Pinkman Residence" class="placesImage">`;
    } else if (menu.value == '10') {
        marker10.remove();
        marker9.remove();
        marker8.remove();
        marker7.remove();
        marker6.remove();
        marker5.remove();
        marker4.remove();
        marker3.remove();
        marker2.remove();
        marker1.remove();
        let marker = marker10.addTo(mymap);
        marker.bindPopup('<p>322 16th St SW</p><p>Albuquerque</p><p>NM 87104</p>').openPopup();
        marker.flyTo;
        placesText.innerHTML = `<p>This place is on private property. Listing for informational purposes only. Please do not visit without express permission from the land owner. This private residence is the external filming location of Jesse Pinkman's home, on the television program 'Breaking Bad'. It has appeared in every season of the series, and is a favorite spot to visit among fans of the show.  This is a private residence, so please remember to observe respectfully from the road."</p>`;
        placesImage.innerHTML = `<img
        src="https://atlas-assets.roadtrippers.com/uploads/place_image/image/1026991796/place_image-image-f96dfd10-e061-4afc-892c-c2103a7b1a6d.jpg"
        alt="The Pinkman Residence" class="placesImage">`;
    }
}