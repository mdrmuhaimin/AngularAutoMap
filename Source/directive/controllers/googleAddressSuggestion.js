/**
 * @author Muhammad Muhaimin
 */
(function(){
  "use restrict";

  angular.module('autoCompleteAddress').controller('googleAddressSuggestionController',[ 'locationDataService', ctrlFunction ]);

  function ctrlFunction( locationDataService ){
	  var ctrl = this;
	  ctrl.geolocate = geolocate;
	  locationDataService.clearLocationData();

    var options = {
	    types: ['address']
    };

    if( typeof google === 'undefined'){
      throw new Error('Google places js library not included');
      return;
    }

    var autocomplete = new google.maps.places.Autocomplete(document.getElementById('searchTextField'), options);
    autocomplete.addListener('place_changed', updateLocationData);

    function updateLocationData(){
      var place = autocomplete.getPlace();
      locationDataService.setLocationData(place);
    }

    function geolocate() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          var circle = new google.maps.Circle({
            center: geolocation,
            radius: position.coords.accuracy
          });
          autocomplete.setBounds(circle.getBounds());
        });
      }
    }
  };

})();
