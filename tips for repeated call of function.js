setInterval(function(){
          navigator.geolocation.getCurrentPosition(function(position) {
            let userLoc = new google.maps.Marker({
                position: pos,
                icon: {
                    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                    scale:5
                },
                map: map,
                anchor: pos
            })
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
},1000)

// example of how to call a function repeatedly over certain time interval