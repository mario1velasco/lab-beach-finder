const mapsAPI = new APIMaps();
// const handlerAPI = new APIHandler("http://localhost:3000");

function startMap() {
  // mapsAPI.startMap();
  mapsAPI.initMap();
}

$(document).ready(() => {
  $('#btn-search').on('click', (event) => {
    console.log(event);
    var input = /** @type {!HTMLInputElement} */ (
      document.getElementById('pac-input'));


    var autocomplete = new google.maps.places.Autocomplete(input);
    console.log(autocomplete);
    console.log(map);
    
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
    });
  });



  //   $('#form-new-bookstore').on('submit', (event) => {
  //     event.preventDefault();
  //     let $inputs = $('#form-new-bookstore :input');
  //     let values = {};
  //     $inputs.each(function () {
  //       values[this.name] = $(this).val();
  //     });
  //     handlerAPI.createOneRegister(values);
  //   });

  //   $('#tbody-store').on('click', '.show-bookstore', (event)=> {
  //     let td = event.target.parentElement;
  //     let lat = td.getAttribute("lat");
  //     let lng = td.getAttribute("lng");
  //     mapsAPI.myMarker(parseFloat(lat),parseFloat(lng));   
  // });
  //   $('#tbody-store').on('click', '.delete-bookstore', (event)=> {
  //     let td = event.target.parentElement;
  //     td = td.parentElement;
  //     handlerAPI.deleteOneRegister(td.className);
  // });
});




















// function startMap() {
//   let map;
//   let currentMarker;
//   let ironhackBCN = {
//     lat: 41.3977381,
//     lng: 2.190471916
//   };
//   map = new google.maps.Map(
//     document.getElementById('map'), {
//       zoom: 15,
//       center: ironhackBCN
//     }
//   );
//   currentMarker= myMarker(map);
//   getPosition(map, currentMarker);
// }

// function myMarker(map) {
//   return new google.maps.Marker({
//     position: {
//       lat: 41.3977381,
//       lng: 2.190471916
//     },
//     map: map,
//     title: "I'm here"
//   });
// };

// function getPosition(map, currentMarker) {
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