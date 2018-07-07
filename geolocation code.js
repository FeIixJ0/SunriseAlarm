//asking geolocation

let map = null;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: monashUni,
        zoom: 17
        });
        // Geolocation detection
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            let pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              acc: position.coords.accuracy
            };
              monashUni.lat = pos.lat
              monashUni.lng = pos.lng

            map.setCenter(pos);
            
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        }

        else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }
}
