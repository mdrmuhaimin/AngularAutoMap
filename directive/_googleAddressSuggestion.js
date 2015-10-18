/**
 * @author Muhammad Muhaimin
 */

"use restrict";

(function(){
  angular.module('autoCompleteAddress').directive('googleAddressSuggestion', [ function() {
    return {
      restrict : 'A',
      controller : 'googleAddressSuggestionController',
      controllerAs: 'mv'
    };
  }]);  
})();
