var mymap = L.map('mapid').setView([39.8, -98.56], 4);

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
         attribution: '©OpenStreetMap, ©CartoDB'}).addTo(mymap);

L.marker([44.017997, -124.130629]).addTo(mymap).bindPopup('<a href="http://latitudes.bandcamp.com/track/45-34-14-n-123-57-44-w"> 17-Jun</a>');
L.marker([44.1185, -123.3214]).addTo(mymap).bindPopup('<a href="http://latitudes.bandcamp.com/track/441185-n-1233214-w"> 18-Jun</a>');
L.polygon([[44.017997, -124.130629], [44.1185, -123.3214]], {color: 'grey'}).addTo(mymap);