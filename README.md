1. Include the following script in your application https://maps.googleapis.com/maps/api/js?libraries=places
2. Include `angularAutoMap.js` or `angularAutoMap.min.js` inside your application.
3. Include `autoCompleteAddress` inside your angular module as dependency injection.

        angular.module('foo', [ 'autoCompleteAddress' ]);
4. To make a text input field map autocomplete field add the attributes below your input field.

        google-address-suggestion ng-focus="mv.geolocate()"
    
Example: 

        <input id="searchTextField" google-address-suggestion ng-focus="mv.geolocate()" />


[Live Demo](http://mdrmuhaimin.github.io/AngularAutoMap/)

[Live Demo Source Code](https://github.com/mdrmuhaimin/AngularAutoMap/tree/master/Example)    
        
