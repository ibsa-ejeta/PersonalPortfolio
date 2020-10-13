let lastPara = document.createElement("P");
lastPara.classList.add('copyright');
let today = new Date().toDateString();
lastPara.innerHTML = today + ' Ibsa Ejeta. All rights reserved.'; 
document.querySelector(".bottom-container").appendChild(lastPara);

function initMap() {
    // The location of Antrim
    var antrim = {lat: 43.771943, lng: -79.287951};
    // The map, centered at Antrim
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 6, center: antrim});
    // The marker, positioned at Antrim
    var marker = new google.maps.Marker({position: antrim, map: map});
  }
