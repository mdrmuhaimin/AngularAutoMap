1. Include the following script in your application https://maps.googleapis.com/maps/api/js?libraries=places
2. Include all the files in your application alternatively you can copy the contents of the file in a single file and then include it.
3. To make a text input field map autocomplete field add the attributes below your input field.

        google-address-suggestion ng-focus="mv.geolocate()"
    
    Example: 
    
        <input id="searchTextField" google-address-suggestion ng-focus="mv.geolocate()" />
