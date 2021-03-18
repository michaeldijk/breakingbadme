// Default value
const mymap = L.map('mapid').setView([35.11811482487477, -106.59887670136685], 10);


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
const marker1 = L.marker([35.12640132916876, -106.53660537438093]);
// Hooligan's Tavern
const marker2 = L.marker([35.13027443181194, -106.53227049369545]);
// Octopus Car-wash
const marker3 = L.marker([35.10839191045314, -106.53554975903837]);
// Delta Linen Supplies
const marker4 = L.marker([35.115922947341325, -106.62677721868599]);
// Pinkman Residence
const marker5 = L.marker([35.087774916654794, -106.66558720134941]);
// Java Joe's
const marker6 = L.marker([35.085380206048555, -106.65798340134944]);
// Crossroads Motel
const marker7 = L.marker([35.08314441158377, -106.63553090134943]);
// Ace Metals 
const marker8 = L.marker([34.99894143114057, -106.65983904552925]);
// Twisters Restaurant
const marker9 = L.marker([35.014653639060676, -106.68630100621041]);
// To'hajiilee Indian Reservation 
const marker10 = L.marker([35.09894971787363, -107.11137546291717]);


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
        const marker = marker1.addTo(mymap);
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
        const marker = marker2.addTo(mymap);
        marker.bindPopup('<p>9800 Montgomery Blvd</p><p>Albuquerque</p><p>NM 87111</p>').openPopup();
        marker.flyTo;
        placesText.innerHTML = `<p>Saul Goodman's business, the outside at least, was recorded in front of Hooligan's Tavern, when you visit it now, you can can grab a beer and pay homage to the sleaziest lawyer in the Southwest. This was where the exterior of Saul's office was shot.</p>`;
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
        const marker = marker3.addTo(mymap);
        marker.bindPopup('<p>9516 Snow Heights Cir NE</p><p>Albuquerque</p><p>NM 87112</p>').openPopup();
        marker.flyTo;
        placesText.innerHTML = `<p>While Walt and Skyler might have been using their A1A Car Wash to clean dirty cash, the real life counterpart, focuses primarily on cars. Nowadays, it's called Mister Car Wash, and before this, it was called Octopus Car-wash. From messages on the internet, they have a signed image, from mister Heisenberg himself!</p>`;
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
        const marker = marker4.addTo(mymap);
        marker.bindPopup('<p>1617 Candelaria Rd NW</p><p>Albuquerque</p><p>NM 87107</p>').openPopup();
        marker.flyTo;
        placesText.innerHTML = `<p>Used by the famous Gustavo Fring, to cook up the blue meth, in real life, it's just a regular washing company, washing dirtly laundry, I presume mostly from hotel chains.</p>`;
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
        const marker = marker5.addTo(mymap);
        marker.bindPopup('<p>322 16th St SW</p><p>Albuquerque</p><p>NM 87104</p>').openPopup();
        marker.flyTo;
        placesText.innerHTML = `<p>The Pinkman residence is the external filming location of Jesse Pinkman's home. It has appeared in every season of the series, and is a favorite spot to visit among fans of the show. After or during season two, Jesse's family decided to sell the place, and Jesse had to move to an apartment. Where it unfortunately all went wrong big-time.</p>`;
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
        const marker = marker6.addTo(mymap);
        marker.bindPopup('<p>322 16th St SW</p><p>Albuquerque</p><p>NM 87104</p>').openPopup();
        marker.flyTo;
        placesText.innerHTML = `<p>Tuco's Headquarters, was recorded actually near/in-front of Java Joe's. The coffee shop is still open, and serves breakfast, baked goods and live music to go with the coffee</p><p>Unfortunately, there is no meth sales going on, and no spooky deals beeing handled above the building on the first floor</p>`;
        placesImage.innerHTML = `<img
        src="https://atlas-assets.roadtrippers.com/uploads/place_image/image/6822090/place_image-image-1d18cd66-c286-4b7b-a5b4-78ab78f1a06a.jpg"
        alt="Java Joe's" class="placesImage">`;
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
        const marker = marker7.addTo(mymap);
        marker.bindPopup('<p>322 16th St SW</p><p>Albuquerque</p><p>NM 87104</p>').openPopup();
        marker.flyTo;
        placesText.innerHTML = `<p>The Crossroads Motel, was nicknamed by Hank Schrader "The Crystal Palace", and was mostly populated by Junkies.</p><p>The place itself was most notably synonymous with the character of Wendy, a prostitute who lives in the motel, and "works" the parking lot during the day hours, providing favors for money.`;
        placesImage.innerHTML = `<img
        src="https://atlas-assets.roadtrippers.com/uploads/place_image/image/2537147/place_image-image-3dff38ec-e207-4932-a12c-ec3e222bc4f3.jpg"
        alt="The Crossroads Motel" class="placesImage">`;
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
        const marker = marker8.addTo(mymap);
        marker.bindPopup('<p>5711 Broadway Boulevard Southeast</p><p>Albuquerque</p><p>NM 87105</p>').openPopup();
        marker.flyTo;
        placesText.innerHTML = `<p>There were a handful of separate locations used to make up Joe’s Salvage throughout the series, but only one bore witness to the end of Walt's RV: Ace Metals. This location is still an operational metal recycling facility.</p>`;
        placesImage.innerHTML = `<img
        src="https://atlas-assets.roadtrippers.com/uploads/place_image/image/3302340/place_image-image-7678b683-3e35-437b-9323-07ad40fcbc32.jpg"
        alt="Ace Metals" class="placesImage">`;
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
        const marker = marker9.addTo(mymap);
        marker.bindPopup('<p>4257 Isleta Boulevard Southwest</p><p>Albuquerque</p><p>NM 87105</p>').openPopup();
        marker.flyTo;
        placesText.innerHTML = `<p>The manager of local burrito joint Twisters counts between 30 to 40 fans a day who pull up in cars and cabs, sometimes straight from the airport, all of them curious to meet the real-life Gus Fring.</p>
        <p>The popularity of Breaking Bad has been great for business, as interest in the restaurant has brought in extra customers and profit. Fans are excited to sit in the most coveted seat in the place: “Walt’s Booth." When you visit, be sure to have someone snap your picture next to the huge Los Pollos Hermanos mural.</p>`;
        placesImage.innerHTML = `<img
        src="https://static.wikia.nocookie.net/breakingbad/images/6/67/Los_Pollos_Hermanos.png"
        alt="Twisters Restaurant" class="placesImage">`;
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
        const marker = marker10.addTo(mymap);
        marker.bindPopup('<p>Canoncito Indian Reservation</p><p>Bernalillo West</p><p>NM</p>').openPopup();
        marker.flyTo;
        placesText.innerHTML = `<p>To’hajiilee Reservation is the first place Walt and Jesse parked the rolling meth lab, and it was prominently featured at the climax of the series.</p><p>Formerly known as the Canoncito Reservation, To’hajiilee is a section of the Navajo Nation between three of New Mexico’s southwestern counties. The dry, rocky terrain has a unique beauty.</p><p>Though production of the series has long been complete, the effect of Breaking Bad's success on Albuquerque is obvious everywhere you look. Packets of crystal-blue rock sugar, bakeries selling blue meth donuts, and a beauty salon offering a “Bathing Bad” line of bath salts are just a few of the local Heisenberg-themed attractions you can find.</p><p>For a place that was mostly known for its annual Balloon Fiesta, the dark and violent nature of the series hasn’t stopped Albuquerque, or its residents, from embracing all the attention Breaking Bad has brought to the city whole-heartedly.</p>`;
        placesImage.innerHTML = `<img
        src="https://atlas-assets.roadtrippers.com/uploads/place_image/image/11843246/place_image-image-bac76409-a200-4c16-b328-a1de6002afc1.jpg"
        alt="Canoncito Indian Reservation" class="placesImage">`;
    }
}