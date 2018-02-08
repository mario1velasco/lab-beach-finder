class APIMaps {
  constructor() {
    this.map;
    this.currentMarker;
  }
  startMap() {
    var ironhackBCN = {
      lat: 41.3977381,
      lng: 2.190471916
    };
    this.map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 15,
        center: ironhackBCN
      }
    );
    // this.myMarker(ironhackBCN.lat, ironhackBCN.lng);
    // this.getPosition(this.map,this.currentMarker);
  }
  initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13
    });
    // var input = $('#pac-input')[0];

    var input = /** @type {!HTMLInputElement} */(
        document.getElementById('pac-input'));

    // var types = document.getElementById('type-selector');
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function() {
      infowindow.close();
      marker.setVisible(false);
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);  // Why 17? Because it looks good.
      }
      marker.setIcon(/** @type {google.maps.Icon} */({
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(35, 35)
      }));
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      var address = '';
      if (place.address_components) {
        address = [
          (place.address_components[0] && place.address_components[0].short_name || ''),
          (place.address_components[1] && place.address_components[1].short_name || ''),
          (place.address_components[2] && place.address_components[2].short_name || '')
        ].join(' ');
      }

      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
      infowindow.open(map, marker);
    });

    // Sets a listener on a radio button to change the filter type on Places
    // Autocomplete.
    function setupClickListener(id, types) {
      var radioButton = document.getElementById(id);
      radioButton.addEventListener('click', function() {
        autocomplete.setTypes(types);
      });
    }

    setupClickListener('changetype-all', []);
    setupClickListener('changetype-address', ['address']);
    setupClickListener('changetype-establishment', ['establishment']);
    setupClickListener('changetype-geocode', ['geocode']);
  }
  // myMarker(lat,lng) {
  //   (this.currentMarker)?this.currentMarker.setMap(null):"";    
  //   this.currentMarker= new google.maps.Marker({
  //     position: {
  //       lat: lat,
  //       lng: lng
  //     },
  //     map: this.map,
  //     title: "I'm here"
  //   });
  // };

  // getPosition(map, currentMarker) {
  //   google.maps.event.addListener(map, "click", function (e) {
  //     currentMarker.setMap(null);
  //     currentMarker = new google.maps.Marker({
  //       position: e.latLng,
  //       map: map,
  //       title: "I'm here"
  //     });
  //     $('#lat').val(e.latLng.lat);
  //     $('#lng').val(e.latLng.lng);
  //   });
  // }

  // showInMap(lat, lng){
  //   return new google.maps.Marker({
  //     position: {
  //       lat: lat,
  //       lng: lng
  //     },
  //     map: map,
  //     title: "I'm here"
  //   });
  // }
}