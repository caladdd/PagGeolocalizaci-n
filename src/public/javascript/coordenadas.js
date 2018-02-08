var refreshIntervalId;
var lat;
var lon;


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
    console.log("lat: "+lat+"lon: "+lon);
}

function locat() {
    navigator.geolocation.watchPosition(fn_ok, fn_error);

    function fn_error() {
        alert("error");
    }

    function fn_ok(respuesta) {
        lat = respuesta.coords.latitude;
        lon = respuesta.coords.longitude;
    }
}