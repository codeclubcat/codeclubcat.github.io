(function() {

window.CodeClubWorld = {};


  CodeClubWorld.api_token = '94a865b31f8235c499f195a37edb7925da902bf3e2da16818b9695feaf20957b';
  CodeClubWorld.country_code = 'es';
  
  CodeClubWorld.api = 'https://api.codeclubworld.org';
  CodeClubWorld.api_version = '2';
  
CodeClubWorld.makeMap = function() {
  var el = document.getElementById('map');
  if (!el) return;

  $.ajax({
    method      : 'GET',
    url         : CodeClubWorld.api + '/clubs?in_country=' + CodeClubWorld.country_code,
    contentType : 'application/json',
    headers     : { 'Authorization': 'Bearer ' + CodeClubWorld.api_token, 'Accept': 'application/vnd.codeclubworld.v'+CodeClubWorld.api_version }
  })
  .done( function(data) {
    var clubs = data,
        markers = [];

    var map = new google.maps.Map(el, {
      zoom: 6,
      center: new google.maps.LatLng(40, 3),
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    $.each(clubs, function(i, club) {
      var address = club.venue.address;
      if (!address) return;

      var lat = address.latitude,
          lng = address.longitude;

      if (lat === null || lng === null) return;
      // update only clubs from Catalunya
      if (lng < 0.3) return;
      

      var latLng = new google.maps.LatLng(lat, lng),
          marker = new google.maps.Marker({
            position: latLng,
            icon: '/img/map/marker.png'
          });

      markers.push(marker);

      google.maps.event.addListener(marker, 'click', function() {
        var infobox = CodeClubWorld.infobox;

        infobox.close();

        var content = [];

        content.push('<h5 class="name">' + club.name  +'</h5>');

        if (club.venue.address.city) {
          content.push('<p class="city">' + club.venue.address.city + '</p>');
        }

        if (club.venue.address.country.name) {
          content.push('<p class="country">' + club.venue.address.country.name + '</p>');
        }

        if (club.url) {
          content.push(
            '<a class="website" href="' + club.url + '">' +
              club.url +
            '</a>'
          );
        }

        content = content.join('');

        infobox.setContent(content);
        infobox.open(map, marker);
      });
    });

    $('.counter').append(clubs.length);

    // TODO: I've commented out the styles section to make
    // this work in jsbin. Leave the styles section of the 
    // mcOptions "as is"
    var mcOptions = {
      gridSize: 30,     
    };

    var markerCluster = new MarkerClusterer(map, markers, mcOptions);
  });
};

CodeClubWorld.infobox = new InfoBox({
  disableAutoPan: false,
  maxWidth: 150,
  pixelOffset: new google.maps.Size(-140, -250),
  zIndex: null,
  boxStyle: {
    background: '#fff',
    width: '280px',
    height: '200px',
    padding: '0 10px'
  },
  infoBoxClearance: new google.maps.Size(1, 1),
  closeBoxURL: '/img/map/close.png',
  closeBoxMargin: '10px 0 0 0'
});


$(function() {
  CodeClubWorld.makeMap();
});

})();
