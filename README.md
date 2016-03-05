1. Include the following script in your application https://maps.googleapis.com/maps/api/js?libraries=places
2. Include `angularAutoMap.js` or `angularAutoMap.min.js` inside your application.
3. To make a text input field map autocomplete field add the attributes below your input field.

        google-address-suggestion ng-focus="mv.geolocate()"
    
    Example: 
    
        <input id="searchTextField" google-address-suggestion ng-focus="mv.geolocate()" />
