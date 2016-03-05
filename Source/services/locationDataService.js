"use restrict";
(function(){
  angular.module('autoCompleteAddress').service('locationDataService', [ serviceFunction ]);

  function serviceFunction(){
    var locationData = null;
    this.setLocationData = setLocationData;
    this.getLocationData = getLocationData;
    this.clearLocationData = clearLocationData;
    function setLocationData( data ){
      locationData = data;
    }
    function getLocationData(){
      return locationData;
    }
    function clearLocationData(){
      locationData = null;
    }
  }
})();
