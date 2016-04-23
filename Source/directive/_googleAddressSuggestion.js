/**
 * @author Muhammad Muhaimin
 */


(function(){
  "use strict";
  angular.module('autoCompleteAddress').directive('googleAddressSuggestion', [ function() {
    return {
      restrict : 'A',
      controller : 'googleAddressSuggestionController',
      controllerAs: 'mv'
    };
  }]);  
})();
