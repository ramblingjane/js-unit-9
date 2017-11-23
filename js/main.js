function initMap() {
    var monksLocation = {
        lat: 40.8054491,
        lng: -73.9654415
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        center: monksLocation,
        zoom: 12
    });

    var marker = new google.maps.Marker({
          position: monksLocation,
          map: map,
          title: "Monk's Cafe"
        });
}

initMap();
