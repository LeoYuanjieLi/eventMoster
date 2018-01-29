"use strict";

// google maps
let map;
function initMap() {
  map = new google.maps.Map($('#map')[0], {
    center: {lat: 40.7128, lng: -74.0060},
    zoom: 10
  });

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(mapPos) {
      let pos = {
        lat: mapPos.coords.latitude,
        lng: mapPos.coords.longitude
      };

      console.log(pos.lat);
      let marker = new google.maps.Marker({
        position: {lat: pos.lat, lng: pos.lng},
        map: map
      });
      // infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}




// eventbrite URL
const EVENTBRITE_URL = `https://www.eventbriteapi.com/v3/events/search?`;
const KEY = `SRI3LI6YVCTBGKODWPPF`;
// eventbrite search
function search(){

  $('#js-search').submit(event =>{
    console.log("search ran!")
    event.preventDefault();
    let userInput = $("#searchBar input").val();
    $.ajax({
      //url: EVENTBRITE_URL+`location.address=${userInput}&location.within=1mi+token=${KEY}`,
      url: `${EVENTBRITE_URL}token=SRI3LI6YVCTBGKODWPPF`,
      method: 'GET',
      dataType: 'json',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${KEY}`
      }
    });
  })

}

$(search);