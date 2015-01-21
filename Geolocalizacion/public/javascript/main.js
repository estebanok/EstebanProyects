function onDocumentReady(){
    //Conectamos socket con el servidor
    var socket = io.connect(window.location.href);
    //Seguimos los pasos de creacion de mapas
    var map = L.map('mimapa').setView([51.505, -0.09], 13);
    //Segun la pagina http://leafletjs.com/examples/quick-start.html
    var layer =L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    //Agregamos el layer al mapa
    layer.addTo(map);
    //localizamos en el mapa la posicion
    map.locate({enableHighAccuracy:true,//Maxima precision, consume mas recursos y mas internet
                zoom:18,//el maximo zoom
                watch:true,//mantenemos en constante envio de datos de coordenadas (latitud y longitud)
                setView:true//lo vemos en el mapa
               });
    map.on('locationfound', onLocationFound);
    function onLocationFound (position){
        var mypos=position.latlng;
        //El objeto que nos envia es latlong(latitudlongitud) de nuestra position
        var marker = L.marker([mypos.lat,mypos.lng]);
        marker.addTo(map);
        //agregamos un marcador en la posicion donde estamos
        var circle = L.circle([mypos.lat,mypos.lng], 80, {
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.5
    });
        circle.addTo(map);
    }
    
}
$(document).on('ready',onDocumentReady);