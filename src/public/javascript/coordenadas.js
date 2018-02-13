
var refreshIntervalId;
var lat;
var lon;
var usuario;

function start(){
    refreshIntervalId = setInterval(save, 1000);
    document.getElementById("toma").disabled = true;
    document.getElementById("parar").disabled = false;
}
function stop(){
    clearInterval(refreshIntervalId);
    document.getElementById("toma").disabled = false;
    document.getElementById("parar").disabled = true;
}
function save(){
    console.log("lat: "+lat+"lon: "+lon+" a "+usuario);
    document.fm.user.value = usuario
    document.fm.latitud.value = lat
    document.fm.longitud.value = lon
    document.fm.submit()
    ///Locations.insert({"local.user": usuario, "local.latitud": lat,"local.longitud": lon});
}

function locat(user) {
    navigator.geolocation.watchPosition(fn_ok, fn_error);
    usuario = user;
    function fn_error() {
        alert("error");
    }

    function fn_ok(respuesta) {
        lat = respuesta.coords.latitude;
        lon = respuesta.coords.longitude;
    }
}